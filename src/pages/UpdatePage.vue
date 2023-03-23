<template>
    <v-container fluid py-0 px-0>
        <v-row>
            <v-col col-12>
                <update-panel></update-panel>
            </v-col>
        </v-row>
    </v-container>
</template>
<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import UpdatePanel from '@/components/panels/Machine/UpdatePanel.vue'
@Component({
components: {
    UpdatePanel,
},
})
export default class UpdatePage extends Mixins(BaseMixin) {}
</script>
