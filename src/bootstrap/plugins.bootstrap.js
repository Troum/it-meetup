import Vue from 'vue';
import {ButtonPlugin, CardPlugin,
    CollapsePlugin,
    FormPlugin, FormGroupPlugin,
    FormInputPlugin, NavbarPlugin, NavPlugin, LayoutPlugin, ModalPlugin, InputGroupPlugin } from "bootstrap-vue";
import ToggleButton from 'vue-js-toggle-button'
import "../vee-validate";
import HttpService from "../services/http.service";
import FormDataService from "../services/form-data.service";
import HandlerService from "../services/handler.service";
let VueScrollTo = require('vue-scrollto');

Vue.use(HttpService);
Vue.use(FormDataService);
Vue.use(HandlerService);
Vue.use(ButtonPlugin);
Vue.use(CardPlugin);
Vue.use(FormPlugin);
Vue.use(FormInputPlugin);
Vue.use(FormGroupPlugin);
Vue.use(NavbarPlugin);
Vue.use(LayoutPlugin);
Vue.use(ModalPlugin);
Vue.use(NavPlugin);
Vue.use(InputGroupPlugin);
Vue.use(CollapsePlugin);
Vue.use(VueScrollTo);
Vue.use(ToggleButton);
Vue.use(VueScrollTo, {
    container: "body",
    duration: 1200,
    easing: "ease-in-out",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
});
