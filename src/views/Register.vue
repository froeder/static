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
                            <v-text-field v-model="user.email" name="email" v-validate="'required|email'" :error-messages="errors.collect('email')" id="email" label="E-mail" prepend-icon="email" type="texst"
                                          required></v-text-field>
                            <v-text-field v-model="user.password" name="password" v-validate="'required|min_value:6'" :error-messages="errors.collect('password')" id="password"  label="Senha" prepend-icon="lock"
                                          type="password" required></v-text-field>
                            <v-text-field v-model="repassword" name="password_confirmation" v-validate="'required|min_value:6|confirmed:password'" :error-messages="errors.collect('password_confirmation')" id="password_confirmation" label="Confirma a senha" prepend-icon="lock"
                                          type="password" required></v-text-field>
                            <div class="text-xs-center">
                                <v-btn color="info" :large="true" to="/">Voltar</v-btn>
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
        $_veeValidate: {
            validator: 'new'
        },
        data: () => ({
            valid: false,
            user: {
                email: '',
                password: ''
            },
            repassword:'',
            dictionary: {
                pt_br:{
                    custom: {
                        email: {
                            required: () => 'Endereço de e-mail requerido',
                        },
                        password: {
                            required: () => 'Senha requerido',
                            min_value: () => 'Senha deverá ter pelo menos 6 caracteres'
                        },
                        password_confirmation: {
                            required: () => 'Senha requerida',
                            min_value: () => 'Senha deverá ter pelo menos 6 caracteres',
                            confirmed:()  => 'A senhas não conferem'
                        },
                    }
                }
            }
        }),

        mounted () {
            this.$validator.localize('pt_br', this.dictionary)
        },
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
            },
            async check_email() {
                try {
                    (await this.$store.dispatch('CHECK_EMAIL', this.user.email)).data.exist
                } catch (err) {
                    console.log(err)
                }
            }
        },
    }
</script>
