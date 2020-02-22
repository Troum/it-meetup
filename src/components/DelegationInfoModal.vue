<template lang="pug">
    b-modal#delegations( hide-footer centered size="lg" header-class="delegation_modal" )
        template( v-slot:modal-header )
            div.delegation_header
                b-button.delegation_close( @click="$bvModal.hide('delegations')" )
                    font-awesome-icon( :icon="['fas', 'times']" )
        b-row.m-0.p-0
            b-col.d-flex.justify-content-center.align-items-center( xl="6" )
                img.img_fluid( v-if="item.logo" :src="item.logo" :alt="item.name")
                font-awesome-icon.mx-auto( v-else :icon="['fas', 'user']"
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
