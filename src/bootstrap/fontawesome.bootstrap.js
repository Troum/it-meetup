import Vue from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import { faMapMarkerAlt, faChevronUp, faChevronDown, faTimes, faArrowRight, faGlobe, faUser } from "@fortawesome/free-solid-svg-icons";
import { faXing, faInstagram, faFacebookF, faLinkedinIn, faTelegramPlane } from "@fortawesome/free-brands-svg-icons";

Vue.component('font-awesome-icon', FontAwesomeIcon);

library.add(faXing, faInstagram, faFacebookF, faLinkedinIn,
    faTelegramPlane, faMapMarkerAlt, faChevronUp,
    faChevronDown, faTimes, faArrowRight, faGlobe, faUser);
