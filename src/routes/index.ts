import Dashboard from '../pages/Dashboard.vue'
import Webcam from '../pages/Webcam.vue'
import Farm from '../pages/Farm.vue'
import Console from '../pages/Console.vue'
import Files from '../pages/Files.vue'
import History from '../pages/History.vue'
import Timelapse from '../pages/Timelapse.vue'
import Machine from '../pages/Machine.vue'
import AdminAuth from '../pages/AdminAuth.vue'
import SlicerDownload from '../pages/SlicerDownload.vue'
import UpdatePage from '../pages/UpdatePage.vue'
import { AsyncComponent, Component } from 'vue'

import {
    mdiMonitorDashboard,
    mdiWebcam,
    mdiConsole,
    mdiGrid,
    mdiFileDocumentMultipleOutline,
    mdiPackageVariant,
    mdiVideo3d,
    mdiHistory,
    mdiTimelapse,
    mdiWrenchCog,
    mdiLock,
    mdiCloudCogOutline,
} from '@mdi/js'

const routes: AppRoute[] = [
    {
        title: 'Dashboard',
        path: '/',
        icon: mdiMonitorDashboard,
        component: Dashboard,
        alwaysShow: true,
        showInNavi: true,
        position: 10,
        admin: false,
    },
    {
        title: 'Printers',
        path: '/allPrinters',
        component: Farm,
        alwaysShow: false,
        showInNavi: false,
        admin: true,
    },
    {
        title: 'Webcam',
        path: '/cam',
        icon: mdiWebcam,
        component: Webcam,
        alwaysShow: true,
        showInNavi: true,
        position: 20,
        admin: false,
    },
    {
        title: 'Console',
        path: '/console',
        icon: mdiConsole,
        component: Console,
        alwaysShow: true,
        showInNavi: true,
        klipperIsConnected: true,
        position: 30,
        admin: false,
    },
    {
        title: 'Heightmap',
        path: '/heightmap',
        icon: mdiGrid,
        component: () => import('../pages/Heightmap.vue'),
        alwaysShow: false,
        showInNavi: true,
        klipperComponent: 'bed_mesh',
        position: 40,
        admin: true,
    },
    {
        title: 'G-Code Files',
        path: '/files',
        icon: mdiFileDocumentMultipleOutline,
        component: Files,
        alwaysShow: true,
        showInNavi: true,
        registeredDirectory: 'gcodes',
        position: 50,
        admin: false,
    },
    {
        title: 'G-Code Viewer',
        path: '/viewer',
        icon: mdiVideo3d,
        component: () => import('../pages/Viewer.vue'),
        alwaysShow: true,
        showInNavi: true,
        position: 60,
        admin: true,
    },
    {
        title: 'History',
        path: '/history',
        icon: mdiHistory,
        component: History,
        alwaysShow: true,
        showInNavi: true,
        moonrakerComponent: 'history',
        position: 70,
        admin: false,
    },
    {
        title: 'Update',
        path: '/update',
        icon: mdiCloudCogOutline,
        component: UpdatePage,
        alwaysShow: true,
        showInNavi: true,
        position: 90,
        admin: false,
    },
    {
        title: 'Slicer',
        path: '/slicer',
        icon: mdiPackageVariant,
        component: SlicerDownload,
        alwaysShow: false,
        showInNavi: true,
        position: 100,
        admin: false,
    },
    {
        title: 'Timelapse',
        path: '/timelapse',
        icon: mdiTimelapse,
        component: Timelapse,
        alwaysShow: true,
        showInNavi: true,
        moonrakerComponent: 'timelapse',
        position: 80,
        admin: true,
    },
    {
        title: 'Machine',
        path: '/config',
        icon: mdiWrenchCog,
        component: Machine,
        alwaysShow: true,
        showInNavi: true,
        position: 100,
        admin: true,
    },
    {
        title: 'Lock',
        path: '/admin',
        icon: mdiLock,
        component: AdminAuth,
        alwaysShow: true,
        showInNavi: true,
        admin: true
    },
    {
        title: null,
        component: null,
        alwaysShow: false,
        showInNavi: false,
        path: '/settings/machine',
        redirect: '/config',
        admin: true,
    },
]

export default routes

export interface AppRoute {
    title: string | null
    path: string
    redirect?: string
    icon?: string
    component: Component | AsyncComponent | null
    alwaysShow: boolean
    showInNavi: boolean
    registeredDirectory?: string
    moonrakerComponent?: string
    klipperComponent?: string
    klipperIsConnected?: boolean
    children?: AppRoute[]
    position?: number
    admin: boolean
}
