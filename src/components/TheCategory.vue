<template>
<div v-for="category in categories" :key="category.id">
    <div class="col s12 m7 card horizontal header">
        <h3 class="option">{{category.name}}</h3>
        <div>
            <a href="#modalEditCategory" class="modal-trigger btn-floating btn-large waves-effect waves-light red option"><i id="edit" class="material-icons">edit</i></a>
            <a href="#modalDeleteCategory" class="modal-trigger btn-floating btn-large red option"><i id="delete" class="material-icons">delete</i></a>
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
            <a @click="editCategory(newName, category.id)" class="modal-close btn-flat">Atualizar categoria</a>
        </div>
    </form>

    <!-- DELETE CATEGORY -->
    <form id="modalDeleteCategory" class="modal">
        <div class="modal-content">
            <h4>Tem certeza que deseja apagar {{category.name}}?</h4>
        </div>
        <div class="modal-footer">
            <a class="modal-close btn-flat">Cancelar</a>
            <a @click="deleteCategory(category.id)" class="modal-close btn-flat">Confirmar</a>
        </div>
    </form>
</div>

</template>

<script>

export default {
    name: 'TheCategory',
    components : {
},
    data() {
        return {
            permissionButtons: false,
            optionsButtons: true,
            newName: "",
            modals: []
        }
    },
    props: {
        categories: {},
        showAllCategories: { type: Function }
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
        
        alternateMenuButtons() {
            if(this.optionsButtons === true) {
                this.permissionButtons = true
                this.optionsButtons = false
            } else {
                this.permissionButtons = false
                this.optionsButtons = true
            }
        }
     
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

</style>
