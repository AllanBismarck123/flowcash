<template>
    <TheHeader userName="Allan"/>
    <DayTransactions />
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import DayTransactions from '../components/DayTransactions.vue'

export default {
    components: {
    TheHeader,
    DayTransactions
}
}
</script>