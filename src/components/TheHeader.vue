<template>
    <nav>
        <div class="nav-wrapper">
            <div id="title">
                <a href="#" class="brand-logo">FLOWCASH</a>
                <div id="username" href="#" class="brand-logo">Bem vindo, {{userName}}</div>
            </div> 
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><router-link to="/main" class="menubar">Home</router-link></li>
                <li><router-link to="/transactions" class="menubar">Transações</router-link></li>
                <li><router-link to="/categories" class="menubar">Categorias</router-link></li>
                <li><a v-on:click.prevent="logoffUser" class="menubar">Sair</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'TheHeader',
        props: {
            userName: String,
        },
        methods: {
            async logoffUser() {
                await this.$store.dispatch("logoff")
                if(this.$store.getters.getToken === "") {
                    this.$router.push({path: "/"})
                }
            }
        }
    }
</script>

<style scoped>
    #username {
        display: flex;
        font-size: 1.5em;
        padding-top: 1.2em;
    }

    #title {
        display: flex;
        flex-direction: column;
    }

    nav {
        height: 6em;
    }

    .menubar {
        font-size: 1.4em;
        padding: 0.65em;
    }

    .nav-wrapper { 
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content: space-between;
    }

    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    @media only screen and (max-device-width < 1000px) {

    }

</style>