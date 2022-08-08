<template>
    <header>
        <nav>
            <div class="nav-wrapper">
                <div class="brand-logo">FlowCash</div>
            </div>
        </nav>
    </header>
    <main>
        <form class="boxhome">
            <h1>Fazer login</h1>
            <div class="row">
                <div class="input-field col s12">
                    <input v-model="email_login" type="email" class="validate" id="email_login" >
                    <label for="email">Email</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input v-model="password_login" type="password" class="validate" id="password_login">
                    <label for="password">Senha (mínimo 8 caracteres)</label>
                </div>
            </div>
             <button @click.prevent="loginUser" class="waves-effect waves-light btn-large" id="login">Entrar</button>
        </form>

        <form class="boxhome">
            <h1>Ainda não tem conta? Cadastre-se</h1>
                <div class="row">
                    <div class="input-field col s12">
                        <input v-model="name" type="text" class="validate" id="name">
                        <label for="name">Nome</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input v-model="email" type="email" class="validate" id="email_register">
                        <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input v-model="password" type="password" class="validate" id="password_register">
                        <label for="password">Senha (mínimo 8 caracteres)</label>
                    </div>
                </div>
                <a @click.prevent="newUser" href="#modalRegister" class="waves-effect waves-light btn-large modal-trigger" id="register">Cadastrar</a>
        </form>
    </main>

    <!-- REGISTER -->
    <form id="modalRegister" class="modal">
        <div class="modal-content">
            <h4>Usuário cadastrado com sucesso! Faça o login para entrar.</h4>
        </div>
        <div class="modal-footer">
            <a class="modal-close btn-flat">Fechar</a>
        </div>
    </form>
</template>

<script>
export default {
    name: 'TheHome',
    data() {
      return {
        user: {},
        name: "",
        email: "",
        password: "",
        email_login: "",
        password_login: "",
        token: {}
      };
    },
    mounted() {
        var elems = document.querySelectorAll('.modal');
        // eslint-disable-next-line no-undef
        this.modals = M.Modal.init(elems);
    },

    methods: {
        async newUser() {
            const data = { name: this.name, email: this.email, password: this.password }
            await this.$store.dispatch("registerUser", data)
            this.name = ""
            this.email = ""
            this.password = ""
        },

        async loginUser() {
            const data = {email: this.email_login, password: this.password_login}
            await this.$store.dispatch("login", data)
            this.token = this.$store.getters.getToken
            await this.infoUserLogged();
            if(this.token !== null) {
                this.$router.push({path: "/main"})
            }
        },

        async infoUserLogged() {
            await this.$store.dispatch("infoUser")
        }
    },

}
</script>

<style >
    .nav-wrapper {
        padding-left: 5.5vw;
        background-color: #B80098;
    }

    main {
        font-size: 2vw;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .boxhome {
        width: 40%;
    }

    h1 {
        font-size: 2vw;
        text-align: center;
    }

    .btn-large {
        margin-left: 10px;
        background-color: #B80098;
    }

    @media screen and (max-width: 800px) {
        main {
            font-size: 4vw;
            flex-direction: column;
            align-items: center;
        }

        h1 {
            font-size: 4vw;
            text-align: center;
        }

        .boxhome {
            width: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .btn-large {
            width: 60%;
            font-size: 3vw;
        }

        .row {
            width: 90%;
        }
     }

</style>