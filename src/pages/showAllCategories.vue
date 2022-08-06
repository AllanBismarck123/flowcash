<template>
    <TheHeader :userName="user.name"/>

    <div id="category-create">
        <span>Criar Categoria</span>
        <a href="#modalCreateCategory" class="modal-trigger btn-floating btn-large waves-effect waves-light red"><i id="add" class="material-icons">add</i></a>
    </div>

    <!-- Modal Structure -->
    <form id="modalCreateCategory" class="modal">
        <div class="modal-content">
            <h4>Digite o nome da categoria</h4>
            <input v-model="name" type="text" class="validate" id="name" required>
        </div>
        <div class="modal-footer">
            <a class="modal-close btn-flat">Cancelar</a>
            <a @click="createCategory" class="modal-close waves-effect btn-flat">Criar categoria</a>
        </div>
    </form>

    <TheCategory :categories="categories"/>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheCategory from '../components/Category.vue'

export default {
    components: {
        TheHeader,
        TheCategory,
    },
    data() {
        return {
            categories: [],
            boxCreate: false,
            buttonCreate: true,
            name: "",
            user: {}
        }
    },
    async created() {
        this.$store.getters.fixedToken
        await this.$store.dispatch("infoUser")
        this.user = this.$store.getters.getUser
        console.log("created " + this.$store.getters.getToken)
    },
    mounted() {
        this.showAllCategories()
        var elems = document.querySelectorAll('.modal');
        // eslint-disable-next-line no-undef
        this.modals = M.Modal.init(elems);
    },
    methods: {
        async showAllCategories() {
            await this.$store.dispatch("showCategories")
            this.categories = this.$store.getters.getCategories
            console.log(this.categories[0])
        },

        async createCategory() {
            await this.$store.dispatch("createCategory", {name: this.name})
            this.categories = this.$store.getters.getCategories
            this.showAllCategories()
            this.name=""
            console.log(this.categories[0])
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