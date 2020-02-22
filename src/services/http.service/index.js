import Vue from 'vue';
import HandlerService from "../handler.service";
import axios from 'axios';

Vue.use(HandlerService);

let $http = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}`,
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'X-Requested-With' : 'XMLHttpRequest'
    },
    withCredentials: false,
    crossDomain: true,
    params: {}
});

$http.interceptors.request.use(request => {
    return request;
}, error => {
        Vue.prototype.$handler.error(error);
});

$http.interceptors.response.use( response => {
    return response;
}, error => {
    switch (error.response.status) {
        case 404:
        case 409:
        case 500:
        case 502:
            Vue.prototype.$handler.error(error.response.data.error);
            break;
        case 422:
            for(let err in error.response.data.errors) {
                Vue.prototype.$handler.error(error.response.data.errors[err][0]);
            }
            break;
    }
});

const HttpService = {
    install(Vue) {
        Vue.prototype.$httpService = $http;
    }
};

export default (HttpService);
