<template>
    <header>
        <nav>
            <div class="nav-wrapper">
                <div class="brand-logo">FLOWCASH</div>
            </div>
        </nav>
    </header>

    <main>
        <div class="boxhome">
            <h1>Fazer login</h1>
            <div class="row">
                <div class="input-field col s12">
                    <input type="email" class="validate" id="email_login" >
                    <label for="email">Email</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="password" class="validate" id="password_login">
                    <label for="password">Senha (mínimo 8 caracteres)</label>
                </div>
            </div>
             <a class="waves-effect waves-light btn-large" id="login">Entrar</a>
        </div>

        <div class="boxhome">
            <h1>Ainda não tem conta? Cadastre-se</h1>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" class="validate" id="name">
                    <label for="password">Nome</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="email" class="validate" id="email_register">
                    <label for="email">Email</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="password" class="validate" id="password_register">
                    <label for="password">Senha (mínimo 8 caracteres)</label>
                </div>
            </div>
            <a class="waves-effect waves-light btn-large" id="register">Cadastrar</a>
        </div>

    </main>

</template>

<script>

export default {
    name: 'TheHome',
}

</script>

<style scoped>
    .nav-wrapper {
        padding-left: 5em;
    }

    main {
        font-size: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .boxhome {
        width: 40%;
    }

    h1 {
        font-size: 30px;
        text-align: center;
    }

</style>