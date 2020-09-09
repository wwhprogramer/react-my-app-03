import axios from 'axios'

const baseUrlProxy = '/apis'
const firstOpenApiProxy = '/firstOpenApi'
const allApi = {
    findNewComProject: baseUrlProxy + '/comProject/findNewComProject', // 获取所有新竞赛项目
    /**
     * 开放接口api
     */
    todayVideo: firstOpenApiProxy + '/todayVideo', // 每日视频推荐接口
}

const getPath = (urlId) => allApi[urlId]
const sendGet = (urlId, params, cb, fail) => {
    let path = getPath(urlId)
    axios.get(path, params)
    .then(
        res => {
            if(cb && typeof cb === 'function') cb(res.data)
        }
    ).catch(
        err => {
            if(fail && typeof fail === 'function') fail(err.data)
        }
    )
}
const sendPost = (urlId, params, cb, fail) => {
    let path = getPath(urlId)
    axios.post(path, params)
    .then(
        res => {
            if(cb && typeof cb === 'function') cb(res.data)
        }
    ).catch(
        err => {
            if(fail && typeof fail === 'function') fail(err.data)
        }
    )
}

export default {
    // 获取请求路径
    getPath,
    // 发送get请求
    sendGet,
    sendPost,
}


