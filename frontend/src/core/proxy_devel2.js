/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

/* eslint-disable */
const settingsService = require("../app/settings-service")

const ParcelProxyServer = require("parcel-proxy-server")

// var exec = require('child_process').exec

let COOKIE = undefined
const HOST = settingsService.host
const URL = settingsService.backendUrl
const entryPoint = "./src/app/index.html"

if (process.argv.length > 2) {
    if (process.argv[2].indexOf("JSESSIONID=") === 0) COOKIE = process.argv[2]
    else COOKIE = "JSESSIONID=".concat(process.argv[2])
}

console.log("URL=" + URL)
console.log("HOST=" + HOST)
console.log("COOKIE=" + COOKIE)

function onSetCookies(proxyReq, req) {
    if (COOKIE !== undefined)
        Object.keys(req.headers).forEach(function (key) {
            if (key === "cookie") proxyReq.setHeader(key, COOKIE)
        })
}

const server = new ParcelProxyServer({
    entryPoint: entryPoint,
    proxies: {
        [URL]: {
            target:"http://"+ HOST,
            onProxyReq: onSetCookies,
            headers: {Host: HOST},
        },
    },
})

server.bundler.on("buildStart", () => {
    console.log("Start build!")
    console.log(new Date())
    // exec('npm run fix-valid', function(error, stdout, stderr) {
    //     console.log(stdout)
    //     console.log(stderr)
    //
    //     if (error !== null) {
    //         console.log('exec error: ')
    //         console.log(error)
    //     }
    // })
})

server.bundler.on("buildEnd", () => {
    console.log("Build completed!")
    console.log(new Date())
})

server.listen(settingsService.frontendPort, () => {
    console.log("Parcel proxy proxy has started")
})
