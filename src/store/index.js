import { createStore } from "vuex";
import axios from "axios";

const baseURL = "https://teste7.flowcash.app/api"

export default createStore({
  state: {
    user: [],
    categories: [],
    token: "",
    register: {},
    infoUser: ""
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
    getInfoUser(state) {
      return state.infoUser;
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
    },
    SET_INFOUSER(state, infoUser) {
      state.infoUser = infoUser;
    }
  },
  actions: {
    async fetchUsers(context) {
      await axios
        .get()
        .then((response) => {
          if (response.status === 200) {
            context.commit("SET_USER", response.data);
          } else {
            console.error(response.error);
          }
        });
    },

    registerUser(context, {name, email, password}) {
      axios
      .post(baseURL + "/register", {name, email, password})
      .then((response) => {
        if(response.status === 201) {
          context.commit("SET_REGISTER", response.data);
        } else {
            console.error(response.error);
        }
      });
    }, 

    login(context, {email, password}) {
      axios
      .post(baseURL + "/login", {email, password})
      .then((response) => {
        if(response.status === 200) {
          context.commit("SET_TOKEN", response.data);
        } else {
            console.error(response.error);
        }
      });
    }, 

    // async infoUser(context, token) {
    //   await axios
    //   .get(baseURL + '/user'), {
    //     body: {
    //       Authorization: authentication(token)
    //     }
    //   }
    //     .then((response) => {
    //       if (response.status === 200) {
    //         context.commit("SET_INFOUSER", response.data);
    //       } else {
    //         console.error(response.error);
    //       }
    //     });
    // } 
  },
  modules: {},
});