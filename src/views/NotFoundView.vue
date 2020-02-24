<template lang="pug">
    b-row.m-0.p-0.position-relative
        b-col.m-0.p-0.d-flex.justify-content-center.align-items-center( cols="12" )
            img.img-fluid( v-if="!isMobile" src="@/assets/404.jpg" alt="Not Found")
            img.img-fluid( v-else src="@/assets/404-mobile.jpg" alt="Not Found")
        b-col.m-0.p-0.d-flex.justify-content-center.align-items-center.position-absolute( style="top:0; left: 0; height: 100%" cols="12" )
            router-link.it-meetup_button( to="/" style="color: #000; font-weight: 600; letter-spacing: 0.085") go home
</template>

<script>
    export default {
        name: "NotFoundView"
    }
</script>

<style scoped>

</style>
