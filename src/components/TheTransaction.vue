<template>
    <div class="button-create">
        <span>Criar Transação</span>
        <a href="#modalCreateTransaction" @click="trateCategories" class="modal-trigger btn-floating btn-large red"><i id="add" class="material-icons">add</i></a>
    </div>

    <!-- CREATE TRANSACTION -->
    <form id="modalCreateTransaction" class="modal">
        <div class="modal-content">
            <input v-model="description" placeholder="Digite a descrição da transação" type="text" class="validate" ><br />
            <!-- <input v-model="category_id" type="text" class="validate" > -->
            <label>Selecione a categoria</label>
            <div class="input-field col s12">
                <select class="browser-default" v-model="category_id">
                    <option disabled selected></option>
                    <option v-for="category in categories" :key="category.id">{{category.name}}</option>
                </select>
            </div>
            <input placeholder="Selecione a data" type="date" lang="pt-br" format="dd/mm/yyyy" v-model="date" ><br/>
            <form id="radios">
                <label>
                    <input value="Despesa" class="with-gap" name="group1" type="radio" checked />
                    <span class="label-radio">Despesa</span>
                </label>
                <label>
                    <input value="Receita" class="with-gap" name="group1" type="radio" />
                    <span class="label-radio">Receita</span>
                </label>
            </form>
            <input v-model="value" placeholder="Digite o valor da transação" type="text" class="validate" >
        </div>
        <div class="modal-footer">
            <a class="modal-close btn-flat">Cancelar</a>
            <a @click="createTransaction(getCategoryIdAndType(category_id), this.user_id, this.description, this.date, this.status, this.typeTransaction, this.value)" class="modal-close btn-flat">Criar transação</a>
        </div>
    </form>

<div v-for="transaction in transactions" :key="transaction.id">
    <div class="col s12 m7 card horizontal header">
        <div id="date-type">
            <h3>{{transaction.date}}</h3>
            <p>{{transaction.type}}</p>
        </div>
        <div class="card-stacked">
            <h3>{{transaction.description}}</h3>
            <p>{{transaction.category}}</p>
        </div>
        <div id="value">R${{transaction.value}}</div>
        <div>
            <a @click="this.transactionId=transaction.id" href="#modalEditTransaction" class="modal-trigger btn-floating btn-large waves-light red"><i id="edit" class="material-icons">edit</i></a>
            <a @click="this.transactionId=transaction.id; this.transactionDescription=transaction.description" href="#modalDeleteTransaction" class="modal-trigger btn-floating btn-large red"><i id="delete" class="material-icons">delete</i></a>
        </div>
    </div>

</div>

    <!-- EDIT TRANSACTION -->
    <form id="modalEditTransaction" class="modal">
        <div class="modal-content">
            <label>Digite a nova descrição da transação</label>
            <input v-model="newName" type="text" class="validate" id="name">
        </div>
        <div class="modal-footer">
            <a class="modal-close btn-flat">Cancelar</a>
            <a class="modal-close btn-flat">Atualizar transação</a>
        </div>
    </form>

    <!-- DELETE TRANSACTION -->
    <form id="modalDeleteTransaction" class="modal">
        <div class="modal-content">
            <h4>Tem certeza que deseja apagar {{this.transactionDescription}}?</h4>
        </div>
        <div class="modal-footer">
            <a class="modal-close btn-flat">Cancelar</a>
            <a @click="deleteTransaction(this.transactionId)" class="modal-close btn-flat">Confirmar</a>
        </div>
    </form>

</template>

<script>

export default {
    name: 'TheTransaction',
    props: {
        transactions: {},
        categories: {},
        user_id: Number,
        testar: String,
        showAllTransactions: { type: Function },
        createTransaction: { type: Function },
    },
    mounted() {
        var elems2 = document.querySelectorAll('.modal');
        // eslint-disable-next-line no-undef
        this.modals = M.Modal.init(elems2);
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.datepicker');
            // eslint-disable-next-line no-undef
            M.Datepicker.init(elems);
        });
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            // eslint-disable-next-line no-undef
            M.FormSelect.init(elems);
        });
    },
    data() {
        return {
            description: "",
            category_id: 0,
            date: "",
            typeTransaction: "",
            status: true,
            value: "",
            permissionButtons: false,
            optionsButtons: true,
            newName: "",
            modals: [],
            instances: [],
            transactionId: 0,
            transactionDescription: "",
            categoriesInArray: [],
        }
    },
    methods: {
        async deleteTransaction(id) {
            console.log(id)
            await this.$store.dispatch("deleteTransaction", {id: id})
            location.reload()
            console.log("deleteTransaction " + this.transactions[0])
        },

        getCategoryIdAndType(categoryId) { 
            this.categoriesInArray = Object.values(this.categories)
            this.categoriesInArray = Object.values(this.categoriesInArray)
            this.categoriesInArray.forEach(element => {
                if(element.name === categoryId) {
                    categoryId = element.id
                }
            });

            let radio = document.querySelectorAll('#radios > label > input')
            if(radio[0].checked === true) {
                this.typeTransaction = "Despesa"
            } else {
                this.typeTransaction = "Receita"
            }
            return categoryId;
        }

        // async editCategory(name, id) {
        //     await this.$store.dispatch("editCategory", {name: name, id: id})
        //     this.showAllCategories()
        //     console.log("editCategory " + this.categories[0])
        //     this.newName = ""
        // }, 
    },

}
</script>

<style scoped>
    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 2em;
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

    .label-radio {
        font-size: 20px;
    }

    #radios {
        display: flex;
        flex-direction: row;
        gap: 2em;
    }
</style>