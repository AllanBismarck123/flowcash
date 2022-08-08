import { createStore } from "vuex";
import axios from "axios";

const api = axios.create({
  baseURL: "https://teste7.flowcash.app/api",
  Authorization: ""
})

export default createStore({
  state: {
    user: {},
    categories: [],
    token: "",
    register: {},
    delete: "",
    transactions: [],
    edit: {}
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getRegister(state) {
      return state.register;
    },
    getToken(state) {
      return state.token;
    },
    fixedToken(state) {
      api.defaults.headers.Authorization = localStorage.getItem('token')
      state.token = localStorage.getItem('token')
      return state
    },
    getCategories(state) {
      return state.categories
    },
    getDelete(state) {
      return state.delete
    },
    getTransactions(state) {
      return state.transactions
    },
    getEdit(state) {
      return state.edit
    }
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },

    SET_REGISTER(state, register) {
      state.register = register;
    },

    SET_TOKEN(state, data) {
      data = Object.values(data).toString()
      data = data.split('|', 2)
      data = "Bearer " + data[1];
      state.token = data;
      api.defaults.headers.Authorization = data;
      localStorage.setItem('token', data)
    },
 
    REMOVE_TOKEN(state, data) {
      localStorage.setItem('token', "")
      state.token = data
    },

    SET_CATEGORIES(state, categories) {
      state.categories = categories.data
    },
    async SET_DELETE(state, data) {
      state.deleteCategory = data
    },

    SET_TRANSACTIONS(state, transactions) {
      state.transactions = transactions.data
    },

    SET_EDIT(state, edit) {
      state.edit = edit
    }
  },
  actions: {
    registerUser(context, {name, email, password}) {
      api
      .post("/register", {name, email, password})
      .then((response) => {
        if(response.status === 201) {
          context.commit("SET_REGISTER", response.data);
        } else {
            console.error(response.error);
        }
      });
    }, 

    async login(context, {email, password}) {
      await api
      .post('/login', {email, password})
      .then((response) => {
        if(response.status === 200) {
          context.commit("SET_TOKEN", response.data);
        } else {
            console.error(response.error);
        }
      });
      console.log("header da api " + this.getters.getToken)
    }, 

    async logoff(context) {
      try {
        (context.commit("REMOVE_TOKEN", ""))
      } catch (error) {
          console.log(error)
      }
      console.log("header da api " + this.getters.getToken)
    },

    async infoUser(context) {
      await api
      .get('/user')
      .then((response) => {
          if (response.status === 200) {
            context.commit("SET_USER", response.data);
          } else {
            console.error(response.error);
          }
        });
      },

      async createCategory(context, {name}) {
        await api
        .post('/categories', {name})
        .then((response) => {
            if (response.status === 201) {
              context.commit("SET_REGISTER", response.data);
            } else {
              console.error(response.error);
            }
          });
      },

      async editCategory(context, {name, id}) {
        await api
        .put('/categories' + '/' + id, {name})
        .then((response) => {
            if (response.status === 200) {
              context.commit("SET_EDIT", response.data);
            } else {
              console.error(response.error);
            }
          });
      },
      
      async showCategories(context) {
        await api
        .get('/categories')
        .then((response) => {
            if (response.status === 200) {
              context.commit("SET_CATEGORIES", response.data);
            } else {
              console.error(response.error);
            }
          });
      }, 

      async deleteCategory(context, {id}) {
        await api
        .delete('/categories'+'/'+ id)
        .then((response) => {
            if (response.status === 204) {
              context.commit("SET_DELETE", response.data);
            } else {
              console.error(response.error);
            }
          });
      },

      async createTransaction(context, {category_id, user_id, description, date, status, type, value}) {
        await api
        .post('/transactions', {category_id, user_id, description, date, status, type, value})
        .then((response) => {
            if (response.status === 201) {
              context.commit("SET_REGISTER", response.data);
            } else {
              console.error(response.error);
            }
          });
      },

      async deleteTransaction(context, { id }) {
        await api
        .delete('/transactions/' + id)
        .then((response) => {
            if (response.status === 201) {
              context.commit("SET_DELETE", response.data);
            } else {
              console.error(response.error);
            }
          });
      },
      
      async showTransactions(context, {id}) {
        await api
        .get('users/' + id + '/transactions')
        .then((response) => {
            if (response.status === 200) {
              context.commit("SET_TRANSACTIONS", response.data);
            } else {
              console.error(response.error);
            }
          });
      }, 

      async editTransaction(context, {category_id, user_id, description, date, status, type, value, id_transaction}) {
        console.log("store editTransaction" + category_id, user_id, description, date, status, type, value, id_transaction)
        await api
        .put('/transactions/' + id_transaction, {category_id, user_id, description, date, status, type, value})
        .then((response) => {
            if (response.status === 200) {
              context.commit("SET_EDIT", response.data);
            } else {
              console.error(response.error);
            }
          });
      },
  },
  modules: {},
});