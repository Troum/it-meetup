<template lang="pug">
    div.mt-5.pt-4.pt-xl-0.m-xl-0
        b-row.w-100.m-0.p-0.pt-2.pt-xl-5.it-meetup_startups_greeting
            b-col.mx-auto.my-2.d-xl-flex.justify-xl-content-center.align-xl-items-center.flex-column.flex-wrap.pt-xl-5.pl-xl-4.pr-xl-4( cols="10" xl="8" )
                h1.it-meetup_startups_greeting_title.p-xl-4(
                    data-aos="fade-down"
                    :data-aos-offset="isMobile ? 20 : 50"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                ) Belarusian&nbsp;
                    span(
                        data-aos="fade-down"
                        :data-aos-offset="isMobile ? 20 : 50"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"
                    ) Startups
                p.it-meetup_startups_greeting_description.p-0.p-xl-4(
                    data-aos="fade-up"
                    :data-aos-offset="isMobile ? 20 : 50"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1500"
                ) We proudly announce more than 20 participating Start-ups from Belarus. This year we are focusing on AI, Finance and Health Solutions. Also, some very innovative Start-ups are invited to show their unique solutions.
                    span &nbsp;Belarus where inventiveness meets technical skills.
            b-col.mx-auto.p-xl-0.mb-4.mb-xl-5.p-xl-4( cols="10" xl="8" )
                button.filter( @click="filterBranch" type="button" data-filter="others"
                    data-aos="fade-left"
                    :data-aos-offset="isMobile ? 20 : 50"
                    data-aos-easing="ease-out-cubic"
                    :data-aos-duration="800"
                ) Others
                button.filter( @click="filterBranch" type="button" data-filter="finance"
                    data-aos="fade-left"
                    :data-aos-offset="isMobile ? 20 : 50"
                    data-aos-easing="ease-out-cubic"
                    :data-aos-duration="900"
                ) Finance
                button.filter( @click="filterBranch" type="button" data-filter="health"
                    data-aos="fade-left"
                    :data-aos-offset="isMobile ? 20 : 50"
                    data-aos-easing="ease-out-cubic"
                    :data-aos-duration="1000"
                ) Health
                button.filter( @click="filterBranch" type="button" data-filter="VR/AR"
                    data-aos="fade-left"
                    :data-aos-offset="isMobile ? 20 : 50"
                    data-aos-easing="ease-out-cubic"
                    :data-aos-duration="1100"
                ) VR/AR
                button.filter( @click="filterBranch" type="button" data-filter="ai"
                    data-aos="fade-left"
                    :data-aos-offset="isMobile ? 20 : 50"
                    data-aos-easing="ease-out-cubic"
                    :data-aos-duration="1200"
                ) AI
        b-row.m-0.p-0
            b-col.mx-auto.it-meetup_participants_container( cols="10" xl="8" )
                div.cards-wrapper
                    div.p-0.pt-2.p-lg-2.pb-2.p-xl-4(
                        lg="6" xl="4" cols="10"
                        v-for="(item, i) in cards" :key="item.name"
                        data-aos="fade-in"
                        :data-aos-offset="isMobile ? 20 : 50"
                        data-aos-easing="ease-out-cubic"
                        :data-aos-duration="i !== 0 ? 600 * i : 500"
                    )
                        b-card.it-meetup_startup_card.shadow(
                            :data-filter="item.filters" )
                            div.image-content
                                img.img-fluid(
                                    :src="item.image ? `./images/startups/${item.image}` : './images/startups/preview.png'"
                                    :alt="item.name" )
                                div.content-wrapper
                                    button.it-meetup_button.bold.dark( @click="openInfo(item)" ) See more
                            div.card-content
                                h1.card-title {{ item.name }}
                                span.tag.text-uppercase.text-center(
                                    v-for="filter in item.filters.split(',')"
                                    :key="filter") {{ filter }}
</template>

<script>
    import participants from "../static/participant.json";
    export default {
        props: {
          isMobile: null
        },
        data() {
          return {
              cards: participants.participant
          }
        },
        methods: {
            filterBranch(event) {
                const filter = event.target.getAttribute('data-filter');
                document.querySelectorAll('.card[data-filter]').forEach( item => {
                    !item.getAttribute('data-filter').includes(filter) ?
                        item.classList.add('deactivated') :
                        (item.classList.contains('deactivated') ? item.classList.remove('deactivated') : null)
                })
            },
            openInfo(item) {
                this.$root.$emit('show-info', item);
            }
        }
    }
</script>

<style scoped>

</style>
