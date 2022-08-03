<template>
    <div id="DayUpdates">
       <Update description="Salário" category="Categoria Selecionada" value=500.0 type="Receita" date="03/08"/>
       <Update description="Água" category="Categoria Selecionada" value=10.0 type="Despesa" date="03/08" />
    </div>
</template>

<script>
import Update from './Update.vue';

export default {
    name: 'DayUpdates',
    components: {
        Update,
    }
}
</script>

<style >
    #DayUpdates {
        background-color: darkgreen;
        color: orange;
        font-size: 30px;
    }
</style>