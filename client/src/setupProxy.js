// proxy for domain to forwarding to other servers (ex. react: 3000 (or domain), to express (5000) )
const { createProxyMiddleware } = require('http-proxy-middleware');

// forwards user requests from react server (3000) to express server (5000)
module.exports = function (app) {
    app.use( createProxyMiddleware (["/api", "/auth/google"], { target: "http://localhost:5000", }));
};