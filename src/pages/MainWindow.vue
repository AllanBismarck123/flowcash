<template>
    <TheHeader :userName="user.name" />
    <MainFrame :valueExpense="valueExpense" :valueRevenue="valueRevenue" :totalBalance="totalBalance" :initialDayBalance="initialDayBalance" :finalDayBalance="finalDayBalance" />
</template>

<script>
import MainFrame from "../components/MainFrame.vue";
import TheHeader from "../components/TheHeader.vue";

export default {
    components: {
        MainFrame,
        TheHeader
    },
    data() {
        return {
            user: {},
            transactions: {},
            valueExpense: 0,
            valueRevenue: 0,
            totalBalance: 0,
            initialDayBalance: 0,
            finalDayBalance:0
        }
    },
    async created() {
        await this.$store.getters.fixedToken
        await this.$store.dispatch("infoUser")
        this.user = await this.$store.getters.getUser
        await this.$store.dispatch("showTransactions", {id: this.user.id})
        this.transactions = this.$store.getters.getTransactions
        this.calculateAllValues()
    },
    mounted() {
        var elems = document.querySelectorAll('.modal');
        // eslint-disable-next-line no-undef
        this.modals = M.Modal.init(elems);
    },

    methods: {
        calculateAllValues() {
            let transactionsLocal = Object.values(this.transactions)
            transactionsLocal = Object.values(transactionsLocal)
            transactionsLocal.forEach(element => {
                if(element.type === "Receita") {
                    this.valueRevenue += Number(element.value)
                } else {
                    this.valueExpense += Number(element.value)
                }
            })
            this.totalBalance = this.valueRevenue - this.valueExpense

            let date = new Date();
            let day = String(date.getDate()).padStart(2, '0');
            let month = String(date.getMonth() + 1).padStart(2, '0');
            let year = date.getFullYear();
            let today = day + '/' + month + '/' + year;

            transactionsLocal.forEach(element => {
                element.date = this.tratamentDates(element.date)
                if(element.date === today) {
                    if(element.type === "Receita") {
                        this.finalDayBalance += Number(element.value)
                        this.initialDayBalance += Number(element.value)
                    } else {
                        this.finalDayBalance -= Number(element.value)
                    }
                }
            })
        },

        tratamentDates(dateforTrate) {
            dateforTrate = dateforTrate.split("-", 3)
            dateforTrate = dateforTrate[2].split("T", 1) + '/' + dateforTrate[1] + '/' + dateforTrate[0]
            return dateforTrate
        }
    }
}

</script>

<style>

</style>