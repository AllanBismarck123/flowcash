<template>
    <TheHeader userName="Allan" />
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
}

</script>