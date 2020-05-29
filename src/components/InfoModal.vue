<template lang="pug">
    b-modal#info( hide-footer centered size="lg" header-class="info_modal" )
        template( v-slot:modal-header )
            div.info_header
                b-button.info_close( @click="$bvModal.hide('info')" )
                    font-awesome-icon( :icon="['fas', 'times']" )
                h1.info_title.ml-auto Greetings
        div
            <iframe height="500" src="https://www.youtube.com/embed/CcebKAG9ALM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</template>

<script>
    export default {
        name: "InfoModal"
    }
</script>

<style scoped>
    iframe {
        width: 100%;
    }
</style>
