<template lang="pug">
    b-modal#delegations( hide-footer
        style="z-index: 10000"
        centered size="xl"
        header-class="delegation_modal" )
        template( v-slot:modal-header )
            div.delegation_header
                b-button.delegation_close( @click="$bvModal.hide('delegations')" )
                    font-awesome-icon.mx-xl-auto( :icon="['fas', 'times']" )
        b-row.m-0.p-0
            b-col.d-flex.justify-content-center.align-items-center( xl="6" )
                img.img-fluid.rounded-circle( v-if="item.logo" :src="`./images/delegations/${item.logo}`" :alt="item.name")
                font-awesome-icon.mx-auto.my-5.my-xl-0( v-else :icon="['fas', 'user']"
                    size="5x" style="color: #A1D9DA" )
            b-col( xl="6" ).delegation_colored
                p.delegation_title {{ item.name }}
                p.delegation_subtitle
                    small {{ item.branch }}
                p.delegation_description {{ item.description }}


</template>

<script>
    export default {
        data() {
            return {
                item: Object
            }
        },
        mounted(){
            this.$root.$on('open-delegation', item => {
                this.item = item;
                this.$bvModal.show('delegations');
            });
        }
    }
</script>

<style scoped>

</style>
