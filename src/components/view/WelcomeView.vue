<template>
    <div style="width:100vw;height:100vh;overflow:hidden;display:flex">
        <div style="flex: 1;background-color: antiquewhite;">
            <el-image style="width: 100%;height: 100%"fit="cover" 
            src = "/src/test_img/img_1.png"></el-image>
        </div>
        <div class="welcome_title">
            <div style="font-size: 30px;font-weight: bold;">输入文字_1</div>
            <div style="margin-top: 5px;">输入文字_2</div>
        </div>
        <div class="right-card">
            <router-view v-slot="{Component}">
                <transition name="el-fade-in-linear"mode='out-in'>
                    <component :is="Component" style="height: 100%;"/>
                </transition>
            </router-view>
        </div>
    </div>
</template>

<script>
export default {
    name:"WelcomeView"
}
</script>