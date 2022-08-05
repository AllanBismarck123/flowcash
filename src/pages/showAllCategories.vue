<template>
    <TheHeader userName="Allan"/>
    <div id="transaction-create">
        <span>Criar Categoria</span>
        <a class="btn-floating btn-large waves-effect waves-light red"><i id="add" class="material-icons">add</i></a>
    </div>
    <TheCategory name="Contas"/>
    <TheCategory name="Lazer"/>
    <TheCategory name="Obrigações"/>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheCategory from '../components/Category.vue'

export default {
    components: {
        TheHeader,
        TheCategory
    }
}
</script>

<style scoped>
    #transaction-create {
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
</style>