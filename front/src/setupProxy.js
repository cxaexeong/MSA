// const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/vp/',
    
    proxy({
      target: 'http://127.0.0.1:8000',
      changeOrigin: true,
    })
  );
}