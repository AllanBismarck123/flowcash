<template>
    <TheHeader :userName="user.name"/>
    <TheCategory :showAllCategories="showAllCategories" :createCategory="createCategory" :categories="categories"/>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheCategory from '../components/TheCategory.vue'

export default {
    components: {
        TheHeader,
        TheCategory,
},
    data() {
        return {
            categories: [],
            transactions: {},
            user: {},
            id: "",
            modals: []
        }
    },
    async created() {
        this.$store.getters.fixedToken
        await this.$store.dispatch("infoUser")
        this.user = this.$store.getters.getUser
        await this.$store.dispatch("showTransactions", {id: this.user.id})
        this.transactions = this.$store.getters.getTransactions
    },
    async mounted() {
        await this.showAllCategories()
        var elems = document.querySelectorAll('.modal');
        // eslint-disable-next-line no-undef
        this.modals = M.Modal.init(elems);
    },
    methods: {
        async showAllCategories() {
            await this.$store.dispatch("showCategories")
            this.categories = this.$store.getters.getCategories
        },

        async createCategory(name) {
            await this.$store.dispatch("createCategory", {name: name})
            this.categories = this.$store.getters.getCategories
            location.reload()
        },
    },
}
</script>