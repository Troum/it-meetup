<template lang="pug">
    b-row.m-0.pt-5.p-xl-0.position-relative( style="background: #1C2B3F" )
        b-col.mx-auto.p-0.d-flex.justify-content-center.align-items-center( cols="12" xl="12" )
            img.img-fluid( v-if="!isMobile" src="@/assets/404.svg" alt="Not Found" )
            img.img-fluid( v-if="isMobile" src="@/assets/404-mobile.svg" alt="Not Found" width="100%")
        b-col.m-0.p-0.d-flex.justify-content-center.align-items-center.position-absolute( style="top:0; left: 0; height: 100%" cols="12" )
            router-link.it-meetup_button( to="/" style="color: #000; font-weight: 600; letter-spacing: 0.085") go home
</template>

<script>
    export default {
        props: {
            isMobile: Boolean
        }
    }
</script>

<style scoped>

</style>
