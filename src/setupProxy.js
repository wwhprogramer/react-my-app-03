const { createProxyMiddleware: proxy } = require('http-proxy-middleware');

const basicUrl = 'http://47.100.92.113:8088/api'
const firstOpenApi = 'https://api.apiopen.top'

module.exports = function (app) {
    app.use(
        proxy('/apis', {
            target: basicUrl,
            changeOrigin: true,
            pathRewrite: {
                "^/apis": "/"
            },
        })
    );
    app.use(
        proxy('/firstOpenApi', {
            target: firstOpenApi,
            changeOrigin: true,
            pathRewrite: {
                "^/firstOpenApi": "/"
            },
        })
    );
};