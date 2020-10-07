<template lang="pug">
    b-row.m-0.p-0.pt-5( style="background: #1C2B3F" )
        b-col.m-0.p-0.d-flex.justify-content-center.align-items-center( cols="12" v-if="!existing"  )
            img.img-fluid( v-if="!isMobile" src="@/assets/under-construction.svg" alt="Program Coming Soon")
            img.img-fluid( v-else src="@/assets/under-construction-mobile.svg" alt="Program Coming Soon")
        b-col.mx-auto.mt-xl-5.p-1.d-flex.justify-content-center.flex-column.w-100.align-items-center.min-vh-100( :style="isMobile ? 'background: #1C2B3F' : 'background: #fff'" cols="12" xl="8" v-else  )
            pdf-viewer( :src="sourceLink" :page="1" :scale.sync="scale" style="width:100%;" )
                template( v-slot:loading )
                    span.d-block.w-100.text-white.text-uppercase.text-center Loading...
            pdf-viewer( :src="sourceLink" :page="2" :scale.sync="scale" style="width:100%;" )
              template( v-slot:loading )
                span.d-block.w-100.text-white.text-uppercase.text-center Loading...
</template>

<script>
    export default {
        props: {
            isMobile: Boolean
        },
        data() {
            return {
                sourceLink: null,
                existing: false,
                scale: 'page-width'
            }
        },
        mounted() {
            try {
                this.sourceLink = './files/program.pdf';
                this.existing = true;
            } catch (e) {
                this.existing = false;
            }
        }
    }
</script>
