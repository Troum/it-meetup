<template lang="pug">
    span {{ daysLeft }} {{ daysLeft > 1 ? 'days left' : 'day left' }}
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
        mounted() {
            this.timeLeft = (new Date(this.date).getTime() - new Date().getTime());
            this.daysLeft = Math.floor(this.timeLeft / this.perDay);
        }
    }
</script>

<style scoped>

</style>
