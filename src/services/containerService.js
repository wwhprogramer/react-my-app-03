import axiosPackage from './axiosPackage.js'
export default {
    getAllMenu: (params, cb, fail) => {
        axiosPackage.sendGet('getAllMenu', params, cb, fail)
    }
}