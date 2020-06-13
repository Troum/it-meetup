<template lang="pug">
    b-modal#info( hide-footer centered size="lg" header-class="info_modal" )
        template( v-slot:modal-header )
            div.info_header
                b-button.info_close( @click="$bvModal.hide('info')" )
                    font-awesome-icon( :icon="['fas', 'times']" )
                h1.info_title.ml-auto Greetings
        div.overflow-a.d-flex
            img(src="@/assets/iframe1.png" alt="events belarus" class="iframe1" @click="updateIframe('iframe1')")
            div#iframe1
            img(src="@/assets/iframe2.png" alt="events belarus" class="iframe2" @click="updateIframe('iframe2')")
            div#iframe2
            img(src="@/assets/iframe3.png" alt="events belarus" class="iframe3" @click="updateIframe('iframe3')")
            div#iframe3
</template>

<script>
    export default {
        name: "InfoModal",
        methods: {
            updateIframe(elem) {
                document.getElementById('iframe1').innerHTML = '';
                document.getElementById('iframe2').innerHTML = '';
                document.getElementById('iframe3').innerHTML = '';
                document.getElementsByClassName('iframe1')[0].hidden = false;
                document.getElementsByClassName('iframe2')[0].hidden = false;
                document.getElementsByClassName('iframe3')[0].hidden = false;
                document.getElementsByClassName(elem)[0].hidden = true;
                switch (elem) {
                    case 'iframe1':
                        document.getElementById(elem).innerHTML = '<iframe height="500" src="https://www.youtube.com/embed/SZcKYqSWkEQ?autoplay=1" frameborder="0" autoplay="1" allow="accelerometer; autoplay = 1; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                        break;
                    case 'iframe2':
                        document.getElementById(elem).innerHTML = '<iframe height="500" src="https://www.youtube.com/embed/lYQ0rY08Tuo?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                        break;
                    case 'iframe3':
                        document.getElementById(elem).innerHTML = '<iframe height="500" src="https://www.youtube.com/embed/DR7a0g5hXS4?autoplay=1" frameborder="0" autoplay="1" allow="accelerometer; autoplay = 1; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                        break;
                }
            }
        }
    }
</script>

<style scoped>
    iframe {
        width: 100%;
    }
    img {
        cursor: pointer;
        width: 300px;
        height: 500px;
    }
    .overflow-a {
        overflow: auto;
    }
</style>
