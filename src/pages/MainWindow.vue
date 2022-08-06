<template>
    <TheHeader :userName="user.name" />
    <TheBody />
</template>

<script>
import TheBody from "../components/TheBody.vue";
import TheHeader from "../components/TheHeader.vue";

export default {
    components: {
        TheBody,
        TheHeader
    },
    data() {
        return {
            user: {},
        }
    },
    mounted() {
        this.user = this.$store.getters.getUser
        console.log(this.user)
    },
}

</script>