<template>
    <TheTransaction :transactions="transactions" />
</template>

<script>
import TheTransaction from './TheTransaction.vue';

export default {
    name: 'DayTransactions',
    data() {
        return {
            user: {},
            transactions: [],
            showAllTransactions: { type: Function}
        }
    },
    components: {
        TheTransaction
    },
    async mounted() {
        this.user = this.$store.getters.getUser
        this.showAllTransactions()
    },
    methods: {
        
    }
}

</script>