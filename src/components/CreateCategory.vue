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
            <a @click="createCategory(this.name); showAllCategories();" class="modal-close btn-flat">Criar categoria</a>
        </div>
    </form>
</template>

<script>

export default {
    data() {
        return {
            name: ""
        }
    },
    props: {
        createCategory: { type: Function },
        showAllCategories: {type: Function}
    }
}
</script>

<style>
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