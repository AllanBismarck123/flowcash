<template>
    <div id="settings">
        <div class="options">
            <div></div>
            <p>Adicionar Categoria</p>
        </div>
        <div class="options">
            <div></div>
            <p>Editar Categoria</p>
        </div>
        <div class="options">
            <div></div>
            <p>Excluir Categoria</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HSettings',   
}
</script>

<style scoped>
    .options {
        color: white;
        font-size: 30px;
        text-align: center;
    }

    #settings {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background-color: gray;
    }
</style>