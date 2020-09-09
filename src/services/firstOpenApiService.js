import axiosPackage from './axiosPackage.js'
export default {
    todayVideo: (params, cb, fail) => {
        axiosPackage.sendGet('todayVideo', params, cb, fail)
    }
}