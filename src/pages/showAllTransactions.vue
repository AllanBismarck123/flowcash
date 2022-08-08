<template>
    <TheHeader :userName="user.name"/>
    <TheTransaction :showAllTransactions="showAllTransactions" :createTransaction="createTransaction" :transactions="transactions" :user_id="this.user.id" :categories="categories" :testar="oi" />
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheTransaction from '../components/TheTransaction.vue'

export default {
    components: {
        TheHeader,
        TheTransaction,
    },
    data() {
        return {
            transactions: [],
            categories: [],
            user: {},
            id: "",
            modals: [],
            oi: "ooooi"
        }
    },
    async created() {
        this.$store.getters.fixedToken
        await this.$store.dispatch("infoUser")
        await this.$store.dispatch("showCategories")
        this.user = this.$store.getters.getUser
        this.categories = this.$store.getters.getCategories
        await this.showAllTransactions(this.user.id)
    },
    async mounted() {
        var elems = document.querySelectorAll('.modal');
        // eslint-disable-next-line no-undef
        this.modals = M.Modal.init(elems);
    },
    methods: {
        async showAllTransactions(id) {
            await this.$store.dispatch("showTransactions", { id: id })
            this.transactions = this.$store.getters.getTransactions
            this.tratamentDates()
        },

        tratamentDates() {
            this.transactions.forEach((i) => {
                i.date = i.date.split("-", 3)
                i.date = i.date[2].split("T", 1) + '/' + i.date[1] + '/' + i.date[0]
            });
        },

        async createTransaction(category_id, user_id, description, date, status, type, value) {
            console.log(category_id, user_id, description, date, status, type, value)
            await this.$store.dispatch("createTransaction", {category_id: category_id, user_id: user_id, description: description, date: date, status: status, type: type, value: value})
            this.transactions = this.$store.getters.getTransactions
            location.reload()
        },
    },
}
</script>