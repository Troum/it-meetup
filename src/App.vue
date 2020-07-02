<template lang="pug">
  b-container#app.m-0.p-0( fluid )
    #nav
        navigation-component
    transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
        router-view( :isMobile="isMobile" )
    footer-component
    vue-snotify
    startup-modal
    delegation-modal
    //info-modal
</template>
<script>
    import { isMobile } from "mobile-device-detect";
    import * as AOS from "aos/dist/aos";
    export default {
        data() {
            return {
                isMobile: isMobile
            }
        },
        mounted() {
            AOS.init();
            this.$bvModal.show('info')
        }
    }
</script>
