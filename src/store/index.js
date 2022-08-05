import { createStore } from "vuex";
import axios from "axios";

const baseURL = "https://teste7.flowcash.app/api"

export default createStore({
  state: {
    user: [],
    categories: [],
    token: "",
    login: {},
    infoUser: ""
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getToken(state) {
      return state.token;
    },
    getLogin(state) {
      return state.login;
    },
    getInfoUser(state) {
      return state.infoUser;
    }
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_LOGIN(state, login) {
      state.login = login;
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
          context.commit("SET_TOKEN", response.data);
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
          context.commit("SET_LOGIN", response.data);
        } else {
            console.error(response.error);
        }
      });
    }, 

    // authentication(token) {
    //   while(token.sbstr(0) === Number) {
    //     token.slice(-1)
    //   }
    //   token.slice(-2);
    //   token = "Bearer" + token;
    //   console.log(token)
    //   return token;
    // },

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