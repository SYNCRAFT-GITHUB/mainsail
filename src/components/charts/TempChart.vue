<template>
    <e-chart
        ref="tempchart"
        v-observe-visibility="visibilityChanged"
        :option="chartOptions"
        :init-options="{ renderer: 'svg' }"
        :autoresize="true"
        :style="tempchartStyle"
        class="tempchart"
        @mouseenter.native="hoverChart = true"
        @mouseleave.native="hoverChart = false" />
</template>

<script lang="ts">
import { convertName } from '@/plugins/helpers'
import Component from 'vue-class-component'
import { Mixins, Watch } from 'vue-property-decorator'
import BaseMixin from '../mixins/base'
import { PrinterTempHistoryStateSourceEntry } from '@/store/printer/tempHistory/types'

import type { ECharts } from 'echarts/core'
import type { ECBasicOption } from 'echarts/types/dist/shared.d'
import { mdiClock } from '@mdi/js'
import { datasetTypesInPercents } from '@/store/variables'
import ThemeMixin from '../mixins/theme'

interface echartsTooltipObj {
    [key: string]: any
}

@Component({
    components: {},
})
export default class TempChart extends Mixins(BaseMixin, ThemeMixin) {
    declare $refs: {
        tempchart: any
    }

    hoverChart = false
    private isVisible = true
    get chartOptions(): ECBasicOption {
        return {
            renderer: 'svg',
            animation: false,
            tooltip: this.tooltip,
            grid: {
                top: 35,
                right: this.gridRight,
                bottom: 30,
                left: 25,
            },
            legend: {
                animation: false,
                show: false,
                selected: this.selectedLegends,
            },
            xAxis: {
                type: 'time',
                splitNumber: 5,
                minInterval: 60 * 1000,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: this.fgColorFaint,
                    },
                },
                axisLabel: {
                    color: this.fgColorLow,
                    margin: 10,
                    formatter: this.timeFormat,
                },
            },
            yAxis: this.yAxis,
            media: this.media,
            dataset: {
                source: [],
            },
            series: this.series,
        }
    }

    get tooltip() {
        return {
            animation: false,
            trigger: 'axis',
            backgroundColor: this.bgColor(1),
            borderWidth: 0,
            textStyle: {
                color: this.fgColorHi,
                fontSize: '14px',
            },
            padding: 20,
            formatter: this.tooltipFormatter,
            confine: true,
            className: 'echarts-tooltip',
            position: function (pos: any, params: any, dom: any, rect: any, size: any) {
                // tooltip will be fixed on the right if mouse hovering on the left,
                // and on the left if hovering on the right.
                const obj: echartsTooltipObj = { top: 60 }
                obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5
                return obj
            },
        }
    }

    get yAxis() {
        return [
            {
                name: this.$t('Panels.TemperaturePanel.TemperaturesInChart'),
                type: 'value',
                min: 0,
                max: (value: any) => {
                    if (!this.autoscale) return this.maxTemp

                    return Math.ceil((value.max + 5) / 20) * 20
                },
                minInterval: 20,
                maxInterval: 100,
                nameLocation: 'end',
                nameGap: 5,
                nameTextStyle: {
                    color: this.fgColorMid,
                    align: 'left',
                },
                splitLine: {
                    lineStyle: {
                        color: this.fgColorFaint,
                    },
                },
                axisLabel: {
                    color: this.fgColorMid,
                    formatter: '{value}',
                    rotate: 90,
                    //showMaxLabel: false,
                    showMinLabel: true,
                    margin: 5,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: this.fgColorLow,
                    },
                },
            },
            {
                show: this.boolDisplayPwmAxis,
                name: 'PWM [%]',
                min: 0,
                max: 1,
                minInterval: 0.25,
                type: 'value',
                nameLocation: 'end',
                nameGap: 5,
                nameTextStyle: {
                    color: this.fgColorMid,
                    align: 'right',
                },
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    color: this.fgColorMid,
                    formatter: (value: number) => {
                        return value * 100
                    },
                    showMinLabel: true,
                    rotate: 90,
                    margin: 5,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: this.fgColorLow,
                    },
                },
            },
        ]
    }

    get media() {
        return [
            {
                query: {
                    minWidth: 500,
                },
                option: {
                    grid: {
                        right: this.optionGridRight,
                        left: 40,
                    },
                    yAxis: [
                        {
                            maxInterval: 50,
                            axisLabel: {
                                showMinLabel: false,
                                showMaxLabel: true,
                                rotate: 0,
                            },
                        },
                        {
                            maxInterval: 25,
                            axisLabel: {
                                showMinLabel: false,
                                rotate: 0,
                            },
                        },
                    ],
                },
            },
        ]
    }

    name(text: string) {

        let hasTwoExt: boolean = false
        let sensors = this.$store.state.printer?.heaters?.available_sensors ?? []

        for (let i = 0; i < sensors.length; i++) {
            if (sensors[i] == "extruder1") {
                hasTwoExt = true;
                break;
            }
        }

        switch (text) {
            case "extruder":
                if (hasTwoExt == true) {
                    return this.$t('Panels.TemperaturePanel.Item.Extruder1')
                } else {
                    return this.$t('Panels.TemperaturePanel.Item.Extruder')
                }
            case "extruder1":
                return this.$t('Panels.TemperaturePanel.Item.Extruder2')
            case "heater_bed":
                return this.$t('Panels.TemperaturePanel.Item.HeaterBed')
            case "chamber_fan":
                return this.$t('Panels.TemperaturePanel.Item.ChamberFan')
            case "filament_heater":
                return this.$t('Panels.TemperaturePanel.Item.FilamentHeater')
            default:
                break;
        }

        const splits = text.split(' ')
        if (splits.length === 1) return text

        return splits[1]
    }

    get chart(): ECharts | null {
        return this.$refs.tempchart?.chart ?? null
    }

    get maxHistory() {
        return this.$store.getters['printer/tempHistory/getTemperatureStoreSize']
    }

    get series() {
        return this.$store.state.printer.tempHistory.series ?? {}
    }

    get source() {
        return this.$store.state.printer.tempHistory.source ?? []
    }

    get autoscale() {
        return this.$store.state.gui.view.tempchart.autoscale ?? true
    }

    get maxTemp() {
        return this.$store.getters['printer/getMaxTemp'] ?? 300
    }

    get boolDisplayPwmAxis() {
        return this.$store.getters['printer/tempHistory/getBoolDisplayPwmAxis']
    }

    get selectedLegends() {
        return this.$store.getters['printer/tempHistory/getSelectedLegends']
    }

    get timeFormat() {
        return this.hours12Format ? '{hh}:{mm}' : '{HH}:{mm}'
    }

    get tempchartHeight() {
        return this.$store.state.gui.uiSettings.tempchartHeight ?? 250
    }

    get tempchartStyle() {
        return {
            height: this.tempchartHeight + 'px',
        }
    }

    get gridRight() {
        return this.boolDisplayPwmAxis ? 25 : 15
    }

    get optionGridRight() {
        if (this.boolDisplayPwmAxis) return 35

        return 15
    }

    beforeDestroy() {
        if (typeof window === 'undefined') return
        if (this.chart) this.chart.dispose()
    }

    visibilityChanged(isVisible: boolean) {
        this.isVisible = isVisible
    }

    tooltipFormatter(datasets: any) {
        let output = ''

        const mainDatasets = datasets.filter((dataset: any) => dataset.seriesName.endsWith('-temperature'))
        if (datasets.length) {
            let outputTime = datasets[0]['axisValueLabel']
            outputTime = outputTime.substring(outputTime.indexOf(' '))
            const theme = this.$vuetify.theme.dark ? 'theme-dark' : ''

            output +=
                '<div class="row">' +
                '<div class="col py-1" style=\'border-bottom: 1px solid rgba(255, 255, 255, 0.24);\'>' +
                `<span class="v-icon mdi ${theme}" style="margin-right: 5px;">` +
                '<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" viewBox="0 0 24 24" class="v-icon__svg" style="font-size: 12px; width: 12px; height: 12px;">' +
                `<path d="${mdiClock}">` +
                '</path>' +
                '</svg>' +
                '</span>' +
                '<span class="font-weight-bold">' +
                outputTime +
                '</span>' +
                '</div>' +
                '</div>'
        }

        mainDatasets.forEach((dataset: any) => {
            const baseSeriesName = dataset.seriesName.substring(0, dataset.seriesName.lastIndexOf('-'))
            let displayName = baseSeriesName
            if (displayName.indexOf(' ') !== -1) {
                displayName = displayName.substring(displayName.indexOf(' ') + 1)
            }

            output += '<div class="row">'

            output += '<div class="col-auto py-0">'
            output += dataset.marker
            output += "<span class='ml-2'>" + this.name(displayName) + ':</span>'
            output += '</div>'

            output += '<div class="col text-right py-0 font-weight-bold">'

            const seriesNameTemperature = `${baseSeriesName}-temperature`
            const seriesNameTarget = `${baseSeriesName}-target`

            if (seriesNameTemperature in dataset.value) {
                const value = dataset.value[seriesNameTemperature]
                output += value !== null ? value.toFixed(1) : '--'
            }
            if (seriesNameTarget in dataset.value) {
                output += ' / '
                const value = dataset.value[seriesNameTarget]
                output += value !== null ? value.toFixed(1) : '--'
            }
            output += '°C'

            datasetTypesInPercents.forEach((attrKey) => {
                const seriesName = `${baseSeriesName}-${attrKey}`
                if (!(seriesName in dataset.value)) return

                let value = dataset.value[seriesName]
                value = value !== null ? (dataset.value[seriesName] * 100).toFixed(0) : '--'
                output += ` [ ${value}% ]`
            })

            output += '</div>'
            output += '</div>'
        })

        return output
    }

    @Watch('selectedLegends')
    selectedLegendsChanged(newVal: any, oldVal: any) {
        if (this.chart?.isDisposed() !== true) {
            Object.keys(newVal).forEach((key) => {
                if (newVal[key] !== oldVal[key]) {
                    const actionType = newVal[key] ? 'legendSelect' : 'legendUnSelect'
                    this.chart?.dispatchAction({ type: actionType, name: key })
                }
            })
        }
    }

    @Watch('source')
    sourceChanged(newVal: PrinterTempHistoryStateSourceEntry[]) {
        // break if the chart isn't initialized or not visible or is hovered
        if (!this.chart || !this.isVisible || this.hoverChart) return

        this.chart?.setOption({
            dataset: {
                source: newVal,
            },
        })

        const limitDate = new Date(Date.now() - this.maxHistory * 1000)
        let newSource = newVal.filter((entry: PrinterTempHistoryStateSourceEntry) => {
            return entry.date >= limitDate
        })

        // reset tempHistory if working sources are smaller than 80%
        if (newVal.length > 0 && newSource.length < this.maxHistory * 0.8) {
            this.$socket.emit(
                'server.temperature_store',
                { include_monitors: true },
                { action: 'printer/tempHistory/init' }
            )
        }
    }
}
</script>

<style scoped>
.tempchart {
    width: 100%;
}
</style>
