<template>
    <div class="card">
        <div class="card-content">
            <div id="receita" class="itens">
                <p>Receitas</p>
                <p>R$ {{valueRevenue}},00</p>
            </div>
            <div id="despesa" class="itens">
                <p>Despesas</p>
                <p>R$ {{valueExpense}},00</p>
            </div>
        </div>
        <div class="card-action">
            <p>Saldo</p>
            <p>R$ {{totalBalance}},00</p>
        </div>
    </div>
    <div class="card">
       <div class="card-action">
            <p>Saldo inicial do dia</p>
            <p>R$ {{initialDayBalance}},00</p>
        </div>
        <div class="card-action">
            <p>Saldo final do dia</p>
            <p>R$ {{finalDayBalance}},00</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'MainFrame',
    data() {
        return {
            values: "",
        }
    },
    props: {
        valueExpense: Number,
        valueRevenue: Number,
        totalBalance: Number,
        initialDayBalance: Number,
        finalDayBalance:Number
    }
}

</script>

<style scoped>
    .itens, .card-action {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0em;
        font-size: 2.2vw;
        padding: 0.2vw 15vw;
    }

    .card-action {
        color: #FF6A00;
        padding: 0.5vw 16.5vw;
    }

    #despesa {
        color: rgb(202, 1, 1);
    }

    #receita {
        color: #52BF4E;
    }

    @media screen and (max-width: 900px) {
        .itens, .card-action {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin: 0em;
            font-size: 4vw;
            padding: 0.2vw 10vw;
        }

        .itens {
            padding: 0.2vw 7vw;
        }
    }
</style>