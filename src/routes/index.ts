import Dashboard from '../pages/Dashboard.vue'
import Webcam from '../pages/Webcam.vue'
import Farm from '../pages/Farm.vue'
import Console from '../pages/Console.vue'
import Files from '../pages/Files.vue'
import History from '../pages/History.vue'
import Timelapse from '../pages/Timelapse.vue'
import Machine from '../pages/Machine.vue'
import UpdatePage from '../pages/UpdatePage.vue'
import AdminAuth from '../pages/AdminAuth.vue'
import { AsyncComponent, Component } from 'vue'

import {
    mdiMonitorDashboard,
    mdiWebcam,
    mdiConsoleLine,
    mdiGrid,
    mdiFileDocumentMultipleOutline,
    mdiFileEye,
    mdiHistory,
    mdiTimelapse,
    mdiWrenchCog,
    mdiCheckBold,
    mdiLock,
} from '@mdi/js'

const routes: AppRoute[] = [
    {
        title: 'Dashboard',
        path: '/',
        icon: mdiMonitorDashboard,
        component: Dashboard,
        alwaysShow: true,
        showInNavi: true,
        admin: false,
    },
    {
        title: 'Printers',
        path: '/allPrinters',
        component: Farm,
        alwaysShow: false,
        showInNavi: false,
        admin: false,
    },
    {
        title: 'Webcam',
        path: '/cam',
        icon: mdiWebcam,
        component: Webcam,
        alwaysShow: true,
        showInNavi: true,
        admin: false,
    },
    {
        title: 'Console',
        path: '/console',
        icon: mdiConsoleLine,
        component: Console,
        alwaysShow: true,
        showInNavi: true,
        klipperIsConnected: true,
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
        admin: false,
    },
    {
        title: 'G-Code Viewer',
        path: '/viewer',
        icon: mdiFileEye,
        component: () => import('../pages/Viewer.vue'),
        alwaysShow: true,
        showInNavi: true,
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
        admin: false,
    },
    {
        title: 'Update',
        path: '/update',
        icon: mdiCheckBold,
        component: UpdatePage,
        alwaysShow: true,
        showInNavi: true,
        moonrakerComponent: 'history',
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
        admin: false,
    },
    {
        title: 'Machine',
        path: '/machine',
        icon: mdiWrenchCog,
        component: Machine,
        alwaysShow: true,
        showInNavi: true,
        admin: true,
    },
    {
        title: 'Lock',
        path: '/authadmin',
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
        admin: false,
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
    admin: boolean
    registeredDirectory?: string
    moonrakerComponent?: string
    klipperComponent?: string
    klipperIsConnected?: boolean
    children?: AppRoute[]
}
