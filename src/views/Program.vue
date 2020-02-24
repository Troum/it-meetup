<template lang="pug">
    b-row.m-0.p-0
        b-col.m-0.p-0.d-flex.justify-content-center.align-items-center( cols="12" )
            img.img-fluid( v-if="!isMobile" src="@/assets/under-construction.jpg" alt="Program Coming Soon")
            img.img-fluid( v-else src="@/assets/under-construction-mobile.jpg" alt="Program Coming Soon")
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
