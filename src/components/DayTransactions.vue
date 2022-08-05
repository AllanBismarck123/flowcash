<template>
    <div id="DayTransactions">
       <Transaction description="Salário" category="Categoria Selecionada" value=500.0 type="Receita" date="03/08"/>
       <Transaction description="Água" category="Categoria Selecionada" value=10.0 type="Despesa" date="03/08" />
    </div>
</template>

<script>
import Transaction from './Transaction.vue';

export default {
    name: 'DayTransactions',
    components: {
        Transaction
    }
}
</script>