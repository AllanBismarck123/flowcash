<template>
    <div id="DayTransactions">
       <Transaction :transactions="transactions" />
    </div>
</template>

<script>
import Transaction from './Transaction.vue';

export default {
    name: 'DayTransactions',
    data() {
        return {
            user: {},
            transactions: []
        }
    },
    components: {
        Transaction
    },
    mounted() {
        this.user = this.$store.getters.getUser
        this.showAllTransactions(this.user.id)
    },
    methods: {
        async showAllTransactions(id) {
            await this.$store.dispatch("showTransactions", {id: id})
            await this.tratementDates()
        },
        tratementDates() {
            this.transactions = this.$store.getters.getTransactions
            this.transactions.forEach((i) => {
                i.date = i.date.split("-", 3)
                i.date = i.date[2].split("T", 1) + '/' + i.date[1] + '/' + i.date[0]
            });
        }
    }
}

</script>