<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
                <v-form autocomplete="off">
                    <v-card>
                        <v-card-title>
                            <h1>Login</h1>
                        </v-card-title>
                        <v-card-text>
                            <v-text-field id="email" name="email" label="Email" type="text" v-model="credentials.email" required=""></v-text-field>
                            <v-text-field id="password" name="password" label="Senha" type="password" v-model="credentials.password"
                                          required=""></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-container>
                                <v-btn color="success" @click="submit">Login</v-btn>
                                <v-btn to="/register" color="info">Cadastrar</v-btn>
                            </v-container>
                        </v-card-actions>
                    </v-card>
                </v-form>
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
            async submit() {
                try {
                    await this.$store.dispatch('LOGIN', this.credentials)
                    this.$router.push({path: '/home'})
                } catch (err) {
                    //TODO EXIBIR MENSAGEM DE ERRO NA TELA ATRAVES DE UM TOAST OU ALGO DO TIPO
                    console.log(err)
                }
            }
        }
    }
</script>
