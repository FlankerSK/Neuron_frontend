import { defineStore } from 'pinia'

const initTabs = [
    {
        title: 'homepage',
        path: '/home',
        closable: false,
    },
]

export const useAppStore = dedfineStore('app', {
    state: () => {
        return {
            topNav:initTabs, //导航栏
            asideCollaps: false, // 侧边栏（默认收起）
            darkMode:false, //黑夜模式（默认关闭）
        }
    },
    actions: {
        // 切换侧边栏收起
        toggleAsideCollapse() {
            this.asideCollaps = !this.asideCollaps
        },
        // 切换顶部导航栏
        addTopNav(tab) {
            let hasTab = this.topNav.find((item)=>item.path===tab.path)
            if (hasTab) return
            this.topNav.push(tab)
        },
        // 删除一个顶部导航栏
        removeTopNav(tab) {
            let index = -1
            this.topNav.forEach((item,i) =>{
                if (item.path === tab.path) {
                    index = i
                }
            })
            if (index === -1) return
            this.topNav.splice(index,1)
            return this.topNav[this.topNav.length-1]
        },
        // 删除所有顶部导航栏
        removeAllTopNav(){
            const arr = this.topNav
            arr.filter((item)=>{
                if(item.path !='home'){
                    this.removeTopNav(item)
                }
            })
        },
        // 切换黑夜模式（编辑器）
        toggleDarkMode(){
            this.darkMode = !this.darkMode
        },
    },
})