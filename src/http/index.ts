import axios from "axios";

const $host = axios.create({
    baseURL: 'http://localhost:7000/'
});

const $authHost = axios.create({
    baseURL: 'http://localhost:7000/'
});

const authInterceptor = (config: any) => {
    return config;
}

$authHost.interceptors.request.use(authInterceptor);

export {
    $host,
    $authHost
}
