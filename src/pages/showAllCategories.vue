<template>
    <TheHeader :userName="user.name"/>

    <div v-if="buttonCreate" id="category-create">
        <span>Criar Categoria</span>
        <a v-on:click.prevent="alternateBoxButton" class="btn-floating btn-large waves-effect waves-light red"><i id="add" class="material-icons">add</i></a>
    </div>
    <form v-if="boxCreate" class="row">
        <label for="name">Digite o nome da categoria</label>
        <input v-model="name" type="text" class="validate" id="name" required>
        <button v-on:click.prevent="alternateBoxButton(); createCategory();" class="waves-effect waves-light btn-large" id="register">Criar categoria</button>
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
    mounted() {
        this.user = this.$store.getters.getUser
        this.showAllCategories()
        this.boxCreate = false
        this.buttonCreate = true
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
            console.log(this.categories[0])
            // this.showAllCategories()
            this.forceUpdate()
            this.name=""
        },

        alternateBoxButton() {
            if(this.boxCreate === false) {
                this.boxCreate = true
                this.buttonCreate = false
            } else {
                this.boxCreate = false
                this.buttonCreate = true
            }
        }

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