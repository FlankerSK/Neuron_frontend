import {createRouter, createWebHistory} from "vue-router";
import {unauthorized} from "@/net";
import {useStore} from "@/store";

const router = createRouter({
    history: createWebHistory(import.meta,env.BASE_URL),
    routers: [
        {
            path:'/',
            name:'welcome',
            component:()=>import('@/components/view/WelcomeView.vue'),
            meta:{
                // 页面标题
                title: '问卷调查入口'
            },
            
        }
    ]
})