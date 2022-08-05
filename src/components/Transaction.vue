<template>
    <div class="col s12 m7 card horizontal header">
        <div id="date-type">
            <h3>{{date}}</h3>
            <p>{{type}}</p>
        </div>
        <div class="card-stacked">
            <h3>{{description}}</h3>
            <p>{{category}}</p>
        </div>
        <div id="value">R${{value}}</div>
    </div>
</template>

<script>
export default {
    name: 'TheTransaction',
    props: {
        description: String,
        category: String,
        value: Number,
        type:  String,
        date: String
    }
}
</script>

<style scoped>
    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        gap: 4em;
        padding: 0.5em 1.8em;
        font-size: 1.1em;
        color: black;
    }

    h3 {
        margin: 0.1em;
        font-size: 1.5em;
    }

    #date-type {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #FE6905;
    }

    #value {
        color: #FE6905;
        font-size: 1.5em;
    }
</style>