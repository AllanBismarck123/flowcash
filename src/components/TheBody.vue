<template>
    <Settings />
    <MainFrame />
    <DayTransactions />
</template>

<script>
import Settings from './Settings.vue';
import MainFrame from './MainFrame.vue';
import DayTransactions from './DayTransactions.vue';

export default {
    name: 'TheBody',
    components: {
    Settings,
    MainFrame,
    DayTransactions
}
}
</script>

<style>

</style>