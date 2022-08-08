<template>
    <nav id="container">
        <div class="nav-wrapper">
            <div id="title">
                <span id="logo">FlowCash | </span>
                <div id="username" >Bem vindo, {{userName}}</div>
            </div> 
            <ul>
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
    #title {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    #username {
        padding-left: 0.4vw;
        font-size: 2vw;
    }

    #logo {
        font-size: 2.3vw;
        color: #d9ff00;
        padding: 0px;
    }

    .menubar {
        font-size: 1.8vw;
    }

    .nav-wrapper { 
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content: space-between;
        padding-left: 5vw;
    }

    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    @media screen and (max-width: 900px) {
        .nav-wrapper { 
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding-left: 0;
        }

        #container {
            height: 15vw;
        }

        #title {
            padding: 0;
        }

        ul {
            padding: 0;
            display: flex;
            margin: 0;
        }

        #username {
            padding-left: 0.4vw;
            font-size: 4vw;
        }

        #logo {
            font-size: 4.5vw;
            color: #d9ff00;
        }

        .menubar {
            font-size: 3vw;
        }

        #nav-mobile {
            margin-left: -7vw;
            gap: 7vw;
        }

        .menubar {
            font-size: 4vw;
        }
    }

    @media screen and (max-width: 700px) {
        #container {
            height: 20vw;
        }

        #nav-mobile {
            gap: 3vw;
        }

        .nav-wrapper { 
            justify-content: center;
            align-items: center;
        }

        li {
            padding-top: 0;
        }
    }

    @media screen and (max-width: 500px) {
        #container {
            height: 25vw;
        }

        #nav-mobile {
            margin: 0;
            padding: 0;
            margin-left: -15vw;
            gap: 0vw;
        }

    }

</style>