<template>
    <Settings />
    <MainFrame />
    <DayUpdates />
</template>

<script>
import Settings from './Settings.vue';
import MainFrame from './MainFrame.vue';
import DayUpdates from './DayUpdates.vue';

export default {
    name: 'TheBody',
    components: {
        Settings,
        MainFrame,
        DayUpdates
    }
}
</script>

<style>

</style>