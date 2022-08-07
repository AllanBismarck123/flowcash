<template>
    <div id="category-create">
        <span>Criar Categoria</span>
        <a href="#modalCreateCategory" class="modal-trigger btn-floating btn-large red"><i id="add" class="material-icons">add</i></a>
    </div>

    <!-- CREATE CATEGORY -->
    <form id="modalCreateCategory" class="modal">
        <div class="modal-content">
            <h4>Digite o nome da categoria</h4>
            <input v-model="name" type="text" class="validate">
        </div>
        <div class="modal-footer">
            <a href="" class="modal-close btn-flat">Cancelar</a>
            <a @click="createCategory(this.name);" class="modal-close btn-flat">Criar categoria</a>
        </div>
    </form>

<div v-for="category in categories" :key="category.id">
    <div class="col s12 m7 card horizontal header">
        <h3 class="option">{{category.name}}</h3>
        <div>
            <a @click="this.categoryId=category.id" href="#modalEditCategory" class="modal-trigger btn-floating btn-large waves-light red option"><i id="edit" class="material-icons">edit</i></a>
            <a @click="this.categoryId=category.id; this.categoryName=category.name" href="#modalDeleteCategory" class="modal-trigger btn-floating btn-large red option"><i id="delete" class="material-icons">delete</i></a>
        </div>
    </div>

    <!-- EDIT CATEGORY -->
    <form id="modalEditCategory" class="modal">
        <div class="modal-content">
            <h4>Digite o novo nome da categoria</h4>
            <input v-model="newName" type="text" class="validate" id="name">
        </div>
        <div class="modal-footer">
            <a class="modal-close btn-flat">Cancelar</a>
            <a @click="editCategory(newName, this.categoryId)" class="modal-close btn-flat">Atualizar categoria</a>
        </div>
    </form>

    <!-- DELETE CATEGORY -->
    <form id="modalDeleteCategory" class="modal">
        <div class="modal-content">
            <h4>Tem certeza que deseja apagar {{this.categoryName}}?</h4>
        </div>
        <div class="modal-footer">
            <a class="modal-close btn-flat">Cancelar</a>
            <a @click="deleteCategory(this.categoryId)" class="modal-close btn-flat">Confirmar</a>
        </div>
    </form>
</div>

</template>

<script>

export default {
    name: 'TheCategory',
    data() {
        return {
            permissionButtons: false,
            optionsButtons: true,
            newName: "",
            modals: [],
            categoryId: 0,
            categoryName: "",
            name: ""
        }
    },
    props: {
        categories: {},
        showAllCategories: { type: Function },
        createCategory: { type: Function },
    },
    mounted() {
        var elems = document.querySelectorAll('.modal');
        // eslint-disable-next-line no-undef
        this.modals = M.Modal.init(elems);
    },
    methods: {
        async deleteCategory(id) {
            console.log(id)
            await this.$store.dispatch("deleteCategory", {id: id})
            this.showAllCategories()
            console.log("deleteCategory " + this.categories[0])
        },

        async editCategory(name, id) {
            await this.$store.dispatch("editCategory", {name: name, id: id})
            this.showAllCategories()
            console.log("editCategory " + this.categories[0])
            this.newName = ""
        }, 
    },
}
</script>

<style scoped>
    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 4em;
        padding: 0.5em 2em;
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

    #input-edit {
        width: 75%;
    }

    #input-edit::placeholder {
        font-size: 1.2em;
        color: rgb(201, 117, 117);
    }

    #permission {
        display: flex;
    }

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
