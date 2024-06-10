<template>
    <div class=" container">
        <el-from ref="formRef" :model="formList" :rules="rules">
            <!-- 页面标题 -->
            <div class="title">
                登录页面
            </div>
            <!-- 登录框 -->
            <div class="content">
                <el-form-item prop="username">
                    <el-input v-model="formList.username" :prefix-icon="Avatar" clearable
                        placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="formList.password" :prefix-icon="Lock" clearable show-password type="password"
                        placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item prop="captcha" v-if="loginOrRegister">
                    <div class="captcha_box">
                        <el-input v-model="formList.captcha" :prefix-icon="ScaleToOriginal" clearable
                            placehoder="请输入验证码" autocomplete="off"></el-input>
                        <div v-html="captcha_img" @click="getCaptchaImg"></div>
                    </div>
                </el-form-item>
                <el-form-item>
                    <div class="form-btn-group">
                        <el-button color="#626aef" class="submit-btn" type="primary" @click="submitionForM(formRef)">
                            {{ loginOrRegister ? '登录' : '注册' }}
                        </el-button>
                        <el-button color="#62aef" type="primary" @click="handleLoginOrRegister">
                            <el-icon :size="20">
                                <Refresh />
                            </el-icon>
                        </el-button>
                    </div>
                </el-form-item>
            </div>
        </el-from>
    </div>
</template>


<script setup>
import { onMounted } from 'vue';
import { Avatar, Lock, ScaleToOriginal } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'

import { ElMessage } from 'element-plus'
import { login, register, getCaptcha } from '../api/users'
import { useRouter } from 'vue-router'

onMounted(() => {
    getCaptchaImg()
})
// 获取router实例
const router = useRouter()
// 定义表单实例，用以验证
const formRef = ref(null)
// 定义要绑定的表单数据、注册登录时保存的数据,
const formList = reactive({
    username: '', // 用户名
    password: '', // 用户密码
    captcha: '',// 验证码
})
// 定义验证规则
const rules = {
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { max: 12, message: '长度不能超过12个字符', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 12, message: '长度在6到12个字符', trigger: 'blur' },
    ],
    captcha: [
        { required: true, message: '请输入验证码', trigger: 'blur' },
    ],
}
//提交登录表单
const submitForm = (formEl) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            //表单校验成功，判断登录还是注册 longinOrRegister 1:登录 0：注册
            if (loginOrRegister) {
                //执行登录
                loginForm(formEl)
            }
            else {
                //执行注册
                registerForm(formEl)
            }
        }
    })
}

const loginOrRegister = ref(true)
const handleLoginOrRegister = () => {
    loginOrRegister.value = !loginOrRegister.value
}
// 登录处理
const loginForm = async (formEl) => {

    router.push('') // 把信息发给首页
}

const registerForm = async (formEl) => {
    // 调用api接口
    const { message } = await register(formList)
    formEl.registerFields()
    ElMessage.success(message)
}

// 获取验证码
const captcha_img = ref('')
const getCaptchaImg = async () => {
    // 请求获取验证码接口
    // const res = await getCaptcha()
    // captcha_img.value = res.data
}
</script>

<style scoped lang="scss">
.container {
    width: 100%;
    height: 100vh;
    background: url('../../src/assets/login-bg.svg') no-repeat bottom;

    .title {
        font-size: 40px;
        color: #ffff;
        margin-bottom: 10px;
    }

    .el-form {
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .el-input {
        width: 400px;
        height: 45px;
        border-radius: 10%;
        background-color: #283443 !important;
    }


    .content {
        width: 400px;

        .form-btn-group {
            width: 400px;
            display: flex;
            justify-content: space-between;

            .submit-btn {
                flex: 1;
            }
        }

        .captcha_box {
            display: flex;
            width: 100%;
            align-items: center;

            .captcha_image {
                width: 100px;
                transform: scale(0.9);
                cursor: pointer;
            }
        }
    }
}
</style>