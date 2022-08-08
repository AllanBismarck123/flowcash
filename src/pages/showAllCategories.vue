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
            user: {},
            id: "",
            modals: []
        }
    },
    async created() {
        this.$store.getters.fixedToken
        await this.$store.dispatch("infoUser")
        this.user = this.$store.getters.getUser
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

<style scoped>
    #category-create {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1em;
        padding: 1.2em;
    }

    span {
        font-size: 2em;
    }

    #add {
        background-color: #BF04A0;
    }

    form {
        width: 70%;
    }
    label {
        font-size: 1.4em;
    }

    .row {
        padding: 2em;
    }
</style>