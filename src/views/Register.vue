<template>
    <v-container grid-list-xl text-xs-center>
        <v-layout row wrap>
            <v-flex xs10 offset-xs1>
                <v-card>
                    <v-card-title>
                        <h1>Registrando novo usuário</h1>
                    </v-card-title>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation autocomplete="off">
                            <v-text-field v-model="user.email" :rules="emailRules" id="email" label="E-mail" prepend-icon="email" type="texst"
                                          required></v-text-field>
                            <v-text-field v-model="user.password" :rules="passwordRules" id="password" label="Senha" prepend-icon="lock"
                                          type="password" required></v-text-field>
                            <v-text-field v-model="repassword" :rules="repasswordRules" id="repassword" label="Confirma a senha" prepend-icon="lock"
                                          type="password" required></v-text-field>
                            <div class="text-xs-center">
                                <v-btn color="success" :large="true" :disabled="!valid" @click="submit">SALVAR</v-btn>
                            </div>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    /* eslint-disable no-console */

    export default {
        data: () => ({
            valid: false,
            emailRules: [
                v => !!v || 'E-mail é obrigatório',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail deve ser válido'
            ],
            passwordRules: [
                v => !!v || 'Senha é obrigatória',
                v => v.length >= 6 || 'Senha deve ter pelo menos 6 caracteres'
            ],
            repasswordRules: [
                v => !!v || 'Senha é obrigatória' //TODO FALTA A CONTRA-SENHA VALIDAR SOMENTE SE FOR IGUAL A OUTRA
            ],
            user: {
                email: '',
                password: ''
            },
            repassword: ''
        }),
        methods: {
            async submit() {
                if (this.$refs.form.validate()) {
                    try {
                        await this.$store.dispatch('REGISTER', this.user)
                        this.$router.push({path: '/confirmation'})
                    } catch (err) {
                        //TODO EXIBIR MENSAGEM DE ERRO NA TELA ATRAVES DE UM TOAST OU ALGO DO TIPO
                        console.log(err)
                    }
                }
            }
        }
    }
</script>
