<template lang="pug">
    b-modal#startups( hide-footer centered size="lg" header-class="startup_modal" )
        template( v-slot:modal-header )
            div.startup_header
                b-button.startup_close( @click="$bvModal.hide('startups')" )
                    font-awesome-icon( :icon="['fas', 'times']" )
                h1.startup_title.ml-auto {{ item.name }}
                small.d-block.text-right.white {{ item.solution }}

        div.w-100.p-0( :class="item ? '' : 'my-4'" )
            b-row.w-xl-95.mx-auto
                b-col( cols="5" )
                    img.img-fluid.startup_image(
                        :src="item.image ? `./images/startups/${item.image}` : './images/startups/preview.png'"
                        :alt="item.name" )
                b-col.startup_description( cols="7" ) {{ item.description }}
            b-row.w-xl-100.mx-auto.my-3( v-if="item.hasOwnProperty('team') && item.team.length > 0" )
                b-col.mx-auto.text-center( cols="12" )
                    span.startup_team_title Our team
            b-row.w-xl-100.mx-auto.my-3.p-0.position-relative.d-flex.justify-content-center.align-items-center( v-if="item.hasOwnProperty('team') && item.team.length > 0" style="height: 14rem" )
                b-col.p-0.m-0.position-absolute( cols="12" style="top: 0; left: 0;background: #fff; height: 5rem" )
                b-col.p-0.m-0.position-absolute( cols="12" style="bottom: 0; left: 0;background: #1c2b3f; height: 9rem" )
                b-col.p-0.m-0( cols="9" )
                    b-row.m-0.p-0
                        b-col.mx-auto( cols="4" v-for="teammate in item.team" :key="teammate.name" )
                            b-row.m-0.p-0
                                b-col.text-center( cols="12" )
                                    img.rounded-circle.img-fluid( style="height: 118px; width: 118px" :src="teammate.image" )
                                b-col.text-center( cols="12" )
                                    p.white.font-weight-bold.mb-0.mt-2 {{ teammate.name }}
                                    small.white {{ teammate.position }}
            b-row.w-xl-100.mx-auto.my-3( v-if="item.hasOwnProperty('socials') && item.socials.length > 0" )
                b-col.mx-auto.text-center( cols="12" )
                    span.startup_team_title Contact us
                b-col.mx-auto.my-3.text-center.d-flex.justify-content-around.align-items-center( cols="2" )
                    font-awesome-icon.d-inline.mx-auto.social-icon( v-for="icon in item.socials"
                        v-if="icon.link"
                        @click="goToLink(icon.link)"
                        :icon="[icon.prefix, icon.icon]" :key="icon.link" style="font-size: 1.2rem")
</template>

<script>
    export default {
        data() {
          return {
              item: Object
          }
        },
        mounted() {
            this.$root.$on('show-info', item => {
                this.item = item;
                this.$bvModal.show('startups')
            })
        },
        methods: {
            goToLink(link) {
                window.open(link, '_blank');
            }
        }
    }
</script>

<style scoped>

</style>
