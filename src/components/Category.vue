<template>
<div v-for="category in categories" :key="category.name">
    <div class="col s12 m7 card horizontal header">
        <h3>{{category.name}}</h3>
        <div>
            <a class="btn-floating btn-large waves-effect waves-light red"><i id="edit" class="material-icons">edit</i></a>
            <a @click="deleteCategory(category.id)" class="modal-trigger btn-floating btn-large waves-effect waves-light red"><i id="delete" class="material-icons">delete</i></a>
        </div>
    </div>

    <!-- Modal Structure
    <div id="modalDeleteCategory" class="modal">
        <div class="modal-content">
        <h4>Tem certeza que deseja excluir {{category.name}}?</h4>
        </div>
        <div class="modal-footer">
            <a class="modal-close btn-flat">Cancelar</a>
            <a @click.prevent="deleteCategory(category.id)" class="modal-close waves-effect btn-flat">Confirmar</a>
        </div>
    </div> -->
</div>
</template>

<script>

export default {
    name: 'TheCategory',
    props: ["categories"],
    data() {
        return {
            id: "",
            // modals: []
        }
    },
    mounted() {
        // var elems = document.querySelectorAll('.modal');
        // // eslint-disable-next-line no-undef
        // this.modals = M.Modal.init(elems);
    },
    methods: {
        async deleteCategory(id) {
            await this.$store.dispatch("deleteCategory", {id: id})
            console.log(this.categories[0])
        }
    }
}
</script>

<style scoped>
    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 4em;
        padding: 0.5em 3em;
        font-size: 1.1em;
        color: black;
    }

    h3 {
        margin: 0.1em;
        font-size: 1.8em;
    }

    button {
        border: none;
    }

    #delete {
        background-color: rgb(202, 1, 1);
    }

    #edit {
        background-color: #F23030;
    }

</style>
