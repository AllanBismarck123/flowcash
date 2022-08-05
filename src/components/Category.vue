<template>
    <div class="col s12 m7 card horizontal header">
        <h3>{{name}}</h3>
        <div>
            <a class="btn-floating btn-large waves-effect waves-light red"><i id="edit" class="material-icons">edit</i></a>
            <a class="btn-floating btn-large waves-effect waves-light red"><i id="delete" class="material-icons">delete</i></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheCategory',
    props: {
        name: String,
    }
}
</script>

<style scoped>
    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 4em;
        padding: 0.5em 3em;
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

</style>
