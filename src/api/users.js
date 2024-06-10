import service from '../func/request'

// 登录
export const login = async (data) => {
    return service({
        url: '/user/login',
        method: 'post',
        data,
    })
}
// 退出登录
export const logout = () => {
    return service({
        url: '',
        method: 'post',
    })
}
// 注册
export const register = (params) => {
    return service({
        url: '',
        method: 'post',
        data: params,
    })
}

//获取验证码
export const getCaptcha = (params) => {
    return service({
        url: '',
        method: 'get'
    })
}

//获取当前用户信息
export const getCurrentUserInfo = () => {
    return service({
        url: '',
        method: 'get',
    })
}

