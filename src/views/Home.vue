<template lang="pug">
    div
        mobile-view( v-if="isMobile" )
        desktop-view( v-else )
</template>

<script>
    export default {
        props: {
            isMobile: Boolean
        }
    }
</script>
