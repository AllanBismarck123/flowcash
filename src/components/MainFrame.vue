<template>
    <div id="mainframe">
        <div id="frame1">
            <div class="rowsmainframe">
                <div>Receita</div>
                <div class="values">valor</div>
            </div>
            <div class="rowsmainframe">
                <div>Despesa</div>
                <div class="values">valor</div>
            </div>
            <div class="rowsmainframe">
                <div>Saldo</div>
                <div class="values">valor</div>
            </div>
        </div>
        <div id="frame2">
            <div class="rowsmainframe">
                <div>Saldo Inicial</div>
                <div class="values">valor</div>
            </div>
            <div class="rowsmainframe">
                <div>Saldo Final</div>
                <div class="values">valor</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'MainFrame',
}

</script>

<style scoped>
    #mainframe {
        background-color: blue;
        color: white;
        font-size: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .rowsmainframe {
        display: flex;
        flex-direction: row;
        gap: 100px;
        justify-content: space-evenly;
    }
</style>