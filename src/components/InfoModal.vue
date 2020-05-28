<template lang="pug">
    b-modal#info( hide-footer centered size="lg" header-class="info_modal" )
        template( v-slot:modal-header )
            div.info_header
                b-button.info_close( @click="$bvModal.hide('info')" )
                    font-awesome-icon( :icon="['fas', 'times']" )
                h1.info_title.ml-auto Additional info
        div
            p Dear Sirs,
            p due to travel restrictions and the ban on public events due to the coronavirus (COVID-19) in the Republic of Belarus, we postpone our conference until summer 2020.
            p All registered participants will receive a separate message with further information.
            p Your organization team
</template>

<script>
    export default {
        name: "InfoModal"
    }
</script>

<style scoped lang="scss">

</style>
