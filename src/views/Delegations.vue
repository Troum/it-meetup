<template lang="pug">
    div.mt-5.pt-4.pt-xl-0.mt-xl-auto
        b-row.m-0.p-0.pt-2.pt-xl-0.min-xl-vh-80.min-xxl-vh-60.it-meetup_startups_greeting
            b-col.mx-auto.my-2.d-flex.justify-content-center.align-items-center.flex-column.flex-wrap( cols="10" xl="8" )
                h1.it-meetup_startups_greeting_title.text-left.w-100.pl-xl-5(
                    data-aos="fade-down"
                    :data-aos-offset="isMobile ? 20 : 50"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                ) Business&nbsp;
                    span(
                        data-aos="fade-down"
                        :data-aos-offset="isMobile ? 20 : 50"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"
                    ) Delegation
                p.it-meetup_startups_greeting_description.p-0.p-xl-5(
                    data-aos="fade-up"
                    :data-aos-offset="isMobile ? 20 : 50"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1500"
                ) We invited a colorful variety of different businesspeople, companies, organizations and investors to make the conference successful and unique. Our goal is to achieve real results and a tangible expansion of the business relations between Germany and Belarus.
        b-row.m-0.p-0( style="background: #E5E5E5" )
            b-col.mx-auto.d-flex.justify-content-center.align-items-center.flex-column.flex-wrap( cols="10" xl="8" )
                b-row.m-0.p-0.w-100
                    b-col.my-5.mx-auto.mx-xl-0( v-for="(item, i) in delegations"  :key="item.name"
                            data-aos="fade-up"
                            :data-aos-offset="isMobile ? 20 : 50"
                            data-aos-easing="ease-out-cubic"
                            :data-aos-duration="i !== 0 ? 600 * i : 500"
                            cols="10"
                            lg="6"
                            xl="3"
                        )
                        b-row.p-0.m-0
                            b-col.delegation_logo_container.mx-auto( @click="openModal(item)" cols="12" )
                                img.img-fluid.rounded-circle( v-if="item.logo" :src="`./images/delegations/${item.logo}`" :alt="item.name" )
                                font-awesome-icon.mx-auto( v-else :icon="['fas', 'user']"
                                    size="3x" style="color: #A1D9DA" )
                                button.delegation_site_link( @click="openWebsite(item.website)" )
                                    font-awesome-icon( :icon="['fas', 'arrow-right']" )
                            b-col.text-center.mx-auto.my-3( xl="12" )
                                p.mb-0.text-uppercase {{ item.name }}
                                p
                                    small.text-uppercase {{ item.branch }}

</template>

<script>
    import delegations from "../static/delegation.json";
    export default {
        props: {
          isMobile: null
        },
        data() {
            return {
                delegations: delegations.delegations
            }
        },
        methods: {
            openWebsite(link) {
                window.open(link, '_blank');
            },
            openModal(item) {
                this.$root.$emit('open-delegation', item)
            }
        }
    }
</script>

<style scoped>

</style>
