<template lang="pug">
    span {{ title() }}
</template>

<script>
    export default {
        props: {
            date: null
        },
        data() {
            return {
                perDay: 24 * 60 * 60 * 1000,
                timeLeft: null,
                daysLeft: null
            }
        },
        methods: {
          title() {
            let text = '';
            if (this.daysLeft > 1) {
              text = this.daysLeft + ' days left';
            }else{
              text = this.daysLeft + ' day left';
            }
            if (this.daysLeft < 0) {
              text = Math.abs(this.daysLeft) + ' days ago';
            }
            if (this.daysLeft === -1) {
              text = Math.abs(this.daysLeft) + ' day ago';
            }
            return  text;
          }
        },
        mounted() {
            this.timeLeft = (new Date(this.date).getTime() - new Date().getTime());
            this.daysLeft = Math.floor(this.timeLeft / this.perDay);
        }
    }
</script>

<style scoped>

</style>
