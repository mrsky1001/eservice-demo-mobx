const ParcelProxyServer = require('parcel-proxy-server');

class ProxyConfig {
    /**
     * @inheritdoc
     */
    private readonly _domainUrl: string;
    private readonly _entryPoint: string;
    private readonly _frontendPort: string;
    private readonly _backendPort: string;
    private readonly _url: string;
    private _cookie: string;

    constructor(domainUrl, entryPoint, frontendPort, backendPort, cookie = '') {
        this._domainUrl = domainUrl;
        this._entryPoint = entryPoint;
        this._backendPort = backendPort;
        this._frontendPort = frontendPort;
        this._cookie = cookie.indexOf('JSESSIONID=') === 0 ? cookie : 'JSESSIONID='.concat(cookie);

        this._url = this._domainUrl + '/backend/';
    }

    public get server() {
        return new ParcelProxyServer({
            entryPoint: this._entryPoint,
            proxies: {
                [this._url]: {
                    target: 'http://127.0.0.1:' + this._backendPort + '/',
                },
            },
        });
    }
}

export default ProxyConfig;
//
// const url = settingsService.domainUrl + "/backend/"
// const entryPoint = "./src/core/index.html"
//
// const server = new ParcelProxyServer({
//     entryPoint: entryPoint,
//     proxies: {
//         [url]: {
//             target: "http://127.0.0.1:" + settingsService.backendPort + "/",
//         },
//     },
// })
//
// server.bundler.on("buildStart", () => {
//     console.log("Start build!")
//     console.log(new Date())
//     // exec("npm run fix-valid", function(error, stdout, stderr) {
//     //     console.log(stdout)
//     //     console.log(stderr)
//     //
//     //     if (error !== null) {
//     //         console.log("exec error: ")
//     //         console.log(error)
//     //     }
//     // })
// })
//
// server.bundler.on("buildEnd", () => {
//     console.log("Build completed!")
//     console.log(new Date())
// })
//
// server.listen(settingsService.frontendPort, () => {
//     console.log("Parcel proxy proxy has started")
// })
