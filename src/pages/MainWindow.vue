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
    async created() {
        this.$store.getters.fixedToken
        await this.$store.dispatch("infoUser")
        this.user = this.$store.getters.getUser
        console.log("created " + this.$store.getters.getToken)
    },
}

</script>