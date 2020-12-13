import vueRouter from 'vue-router'
import User from './components/User'
import UserBalance from './components/UserBalance'
import App from './App'
import Cliente from './components/Cliente'
import Venta from './components/Venta'

const router = new vueRouter({
        mode: 'history',
        base: __dirname,
        routes: [
            {
                path: '/',
                name: "root",
                component: App
            },
            {
                path: '/user/:username',
                name: "user",
                component: User
            },
            {
                path: '/cliente/:username',
                name: "cliente",
                component: Cliente
            },
            {
                path: '/venta/:username',
                name: "venta",
                component: Venta
            },
        ]
    })

export default router
