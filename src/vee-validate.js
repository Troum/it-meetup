import {extend, localize} from 'vee-validate';
import {email, required} from "vee-validate/dist/rules";
import en from 'vee-validate/dist/locale/en';

extend('required', required);
extend('email', email);


localize('en', en);
