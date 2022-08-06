<template>
    <TheHeader :userName="user.name"/>

    <div v-if="buttonCreate" id="transaction-create">
        <span>Criar Transação</span>
        <a v-on:click.prevent="alternateBoxButton" class="btn-floating btn-large waves-effect waves-light red"><i id="add" class="material-icons">add</i></a>
    </div>
    <form v-if="boxCreate" class="row">
        <label for="name">Digite a descrição da transação</label>
        <input v-model="name" type="text" class="validate" id="name" required>
        <button v-on:click.prevent="alternateBoxButton(); " class="waves-effect waves-light btn-large" id="register">Criar Transação</button>
    </form>

    <DayTransactions />
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import DayTransactions from '../components/DayTransactions.vue'

export default {
    components: {
        TheHeader,
        DayTransactions
    },
    data() {
        return {
            user: {},
            boxCreate: false,
            buttonCreate: true,
        }
    },
    mounted() {
        this.user = this.$store.getters.getUser
    },
    methods: {
        alternateBoxButton() {
            if(this.boxCreate === false) {
                this.boxCreate = true
                this.buttonCreate = false
            } else {
                this.boxCreate = false
                this.buttonCreate = true
            }
        }
    },
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