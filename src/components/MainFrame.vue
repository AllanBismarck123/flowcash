<template>
    <div class="card">
        <div class="card-content">
            <div id="receita" class="itens">
                <p>Receita</p>
                <p>Valor</p>
            </div>
            <div id="despesa" class="itens">
                <p>Despesa</p>
                <p>Valor</p>
            </div>
        </div>
        <div class="card-action">
            <p>Saldo</p>
            <p>Valor</p>
        </div>
    </div>
    <div class="card">
       <div class="card-action">
            <p>Saldo Inicial</p>
            <p>Valor</p>
        </div>
        <div class="card-action">
            <p>Saldo Final</p>
            <p>Valor</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'MainFrame',
}

</script>

<style scoped>
    .itens, .card-action {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0em;
        font-size: 1.8em;
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
</style>