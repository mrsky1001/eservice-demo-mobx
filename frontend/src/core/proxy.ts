import {appConfig} from '../appConfig';
import ProxyConfig from './proxyConfig';

const server = new ProxyConfig(appConfig.domainUrl,
    './src/core/index.html',
    appConfig.frontendPort,
    appConfig.backendPort,
    process.argv[2]
).server;

server.bundler.on('buildStart', (): void => {
    console.time('parcel build');
    console.timeLog('parcel build');
});

server.bundler.on('buildEnd', (): void => {
    console.timeEnd('parcel build');
});

server.listen(appConfig.frontendPort, (): void => {
    console.debug('Parcel proxy proxy has started');
});
