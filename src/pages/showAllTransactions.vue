<template>
    <TheHeader :userName="user.name"/>

    <div id="transaction-create">
        <span>Criar Transação</span>
        <a href="#modal1" class="modal-trigger btn-floating btn-large waves-effect waves-light red"><i id="add" class="material-icons">add</i></a>
    </div>

    <!-- Modal Structure -->
    <!-- <form id="modal1" class="modal">
        <div class="modal-content">
            <label>Digite a descrição da transação</label>
            <input v-model="name" type="text" class="validate" id="name" required>
        </div>
        <div class="modal-footer">
            <a class="modal-close btn-flat">Cancelar</a>
            <a class="modal-close btn-flat">Criar transação</a>
        </div>
    </form> -->

    <DayTransactions :showAllTransactions="showAllTransactions" />
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
            modals: [],
            selects: [],
            name: ""
        }
    },
    async created() {
        this.$store.getters.fixedToken
        await this.$store.dispatch("infoUser")
        this.user = this.$store.getters.getUser
        console.log("created " + this.$store.getters.getToken)
    },
    mounted() {
        var elems = document.querySelectorAll('.modal');
        // eslint-disable-next-line no-undef
        this.modals = M.Modal.init(elems);
        // var elems2 = document.querySelectorAll('select');
        // // eslint-disable-next-line no-undef
        // this.selects = M.FormSelect.init(elems2, options);
    },
    methods: {
        async showAllTransactions(id) {
            console.log("showAllTransactions")
            await this.$store.dispatch("showTransactions", {id: id})
            this.transactions = this.$store.getters.getTransactions
            this.tratamentDates()
        },
        tratamentDates() {
            this.transactions.forEach((i) => {
                i.date = i.date.split("-", 3)
                i.date = i.date[2].split("T", 1) + '/' + i.date[1] + '/' + i.date[0]
            });
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