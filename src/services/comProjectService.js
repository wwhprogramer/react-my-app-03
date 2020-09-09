import axiosPackage from './axiosPackage.js'
export default {
    findNewComProject: (params, cb, fail) => {
        axiosPackage.sendGet('findNewComProject', params, cb, fail)
    }
}