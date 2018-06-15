<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
                <v-card>
                    <v-card-title>Login</v-card-title>
                    <v-card-text>
                        <v-text-field id="usuario" name="usuario" label="Email" type="text" v-model="credentials.email"></v-text-field>
                        <v-text-field id="senha" name="senha" label="Senha" type="password" v-model="credentials.password"></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-container>
                            <v-btn color="success" @click="login()">Login</v-btn>
                            <v-btn to="/register" color="info">Cadastrar</v-btn>
                        </v-container>
                    </v-card-actions>
                </v-card>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
    /* eslint-disable no-console */

    export default {
        data: () => ({
            credentials: {}
        }),
        methods: {
            async login() {
                try {
                    await this.$store.dispatch('LOGIN', this.credentials)
                    this.$router.push({path: '/home'})
                } catch (err) {
                    console.log(err) // EXIBIR MENSAGEM DE ERRO NA TELA ATRAVES DE UM TOAST OU ALGO DO TIPO
                }
            }
        }
    }
</script>
