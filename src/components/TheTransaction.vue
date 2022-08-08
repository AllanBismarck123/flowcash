<template>
    <div class="button-create">
        <span>Criar Transação</span>
        <a href="#modalCreateTransaction" @click="trateCategories" id="btn-create" class="modal-trigger btn-floating btn-large red"><i id="add" class="material-icons">add</i></a>
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
        </div>
        <div id="value">R${{transaction.value}}</div>
        <div id="options-buttons">
            <a @click="this.transactionId=transaction.id" href="#modalEditTransaction" id="btn-edit" class="modal-trigger btn-floating btn-large waves-light red"><i id="edit" class="material-icons">edit</i></a>
            <a @click="this.transactionId=transaction.id; this.transactionDescription=transaction.description" href="#modalDeleteTransaction" id="btn-delete" class="modal-trigger btn-floating btn-large red"><i id="delete" class="material-icons">delete</i></a>
        </div>
    </div>

</div>

    <!-- EDIT TRANSACTION -->
    <form id="modalEditTransaction" class="modal">
        <div class="modal-content">
            <input v-model="description" placeholder="Digite a nova descrição da transação" type="text" class="validate" ><br />
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
            <a @click="editTransaction(getCategoryIdAndType(category_id), this.user_id, this.description, this.date, this.status, this.typeTransaction, this.value, this.transactionId)" class="modal-close btn-flat">Atualizar transação</a>
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
        },

        async editTransaction(category_id, user_id, description, date, status, type, value, id_transaction) {
            // const data = {
            //     category_id: category_id, 
            //     user_id: user_id, 
            //     description: description, 
            //     date: date, 
            //     status: status, 
            //     type: type, 
            //     value: value, 
            // }
            
            // console.log({data})
            await this.$store.dispatch("editTransaction", {category_id, user_id, description, date, status, type, value, id_transaction})
            console.log("EditTransaction")
            location.reload()
        }, 
    },

}
</script>

<style scoped>
    .button-create {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1vw;
        padding: 1.2vw;
    }

    span {
        font-size: 2.5vw;
    }

    #delete {
        background-color: rgb(202, 1, 1);
    }

    #edit {
        background-color: #F23030;
    }

    #add {
        background-color: #BF04A0;
    }

    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 2vw;
        padding: 0.5vw 2vw;
        font-size: 1.8vw;
        color: black;
    }
    h3 {
        margin: 0.1vw;
        font-size: 3vw;
    } 

    #date-type {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #bb6c22;
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

    @media screen and (max-width: 1000px) {
        .btn-large {
            width: 6vw;
            height: 6vw;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        .material-icons {
            width: 100%;
        }

        #options-buttons {
            display: flex;
            flex-direction: row;
        }
    }

    @media screen and (max-width: 700px) {
        h3 {
            font-size: 3.5vw;
            padding-left: 1vw;
        }

        span {
            font-size: 3.5vw;
        }
    }

    @media screen and (max-width: 550px) {
        h3 {
            font-size: 3.5vw;
            padding-left: 0vw;
        }

        span {
            font-size: 3.5vw;
        }

        .btn-large {
            width: 7vw;
            height: 7vw;
        }
    }

    @media screen and (max-width: 350px) {
        .btn-large {
            width: 9vw;
            height: 9vw;
        }
    }
</style>