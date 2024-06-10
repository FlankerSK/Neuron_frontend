import { createRouter , createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/login.vue')
        },
        {
            path:'/',
            name:'home',
            meta:{
                title:'项目名',
            },
            redirect: '/login',
            component: ()=> import('')

        }

    ]
})


export default router
