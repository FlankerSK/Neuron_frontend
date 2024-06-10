<template>
    <div class="header">
        <div class="header-left">
            <!-- 收缩按钮 -->
            <el-button link @click="store.toggleAsideCollapse">
                <el-icon :size="22" v-if="store.asideCollapse">
                    <expand />
                </el-icon>
                <el-icon :size="22" v-else>
                    <Fold />
                </el-icon>
            </el-button>
            <!-- 面包屑 -->
            <BreadCrumb></BreadCrumb>
        </div>
        <div class="header-right">
            <!-- 全屏组件 -->
            <FullScreen></FullScreen>
            <!-- 黑暗模式 -->
            <DarkMode></DarkMode>
            <!-- 头像下拉框 -->
            <el-dropdown trigger="click">
                <img class="avator" src="../assets/avator.png" alt="" />
                <template #dropdown>
                    <el-dropdown-menu>
                        <!-- command 是点击时触发的回调 -->
                        <el-dropdown-item @click="people_center">个人中心</el-dropdown-item>
                        <el-dropdown-item @click="handel_exit">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup>
import {useAppStore} from '../store/app'
import BreadCrumb from './components/BreadCrumb.vue'

</script>