<template>
    <v-container grid-list-xl text-xs-center>
        <v-layout row wrap>
            <v-flex xs10 offset-xs1>
                <v-card>
                    <v-card-title>
                        <h1>Registrando novo usuário</h1>
                    </v-card-title>
                    <v-card-text>
                        <v-form  ref='form' v-model="valid" lazy-validation autocomplete="off">
                            <v-text-field @change="check_email" v-model="user.email" name="email" v-validate="'required|email'" :error-messages="errors.collect('email')" id="email" label="E-mail" prepend-icon="email" type="text" 
                                          required></v-text-field>
                            <v-text-field @change="check_password" v-model="user.password" name="password" v-validate="'required|min:6'" :error-messages="errors.collect('password')"  label="Senha" prepend-icon="lock"
                                          type="password"></v-text-field>
                            <v-text-field @change="check_password" v-model="confirmed_password" name="password_confirmation" v-validate="'required|min:6'" :error-messages="errors.collect('password_confirmation')" label="Confirma a senha" prepend-icon="lock"
                                          type="password"></v-text-field>
                            <div class="text-xs-center">
                                <v-btn color="info" :large="true" to="/">Voltar</v-btn>
                                <v-btn color="success" :large="true" :disabled="!valid" @click="validateBeforeSubmit">SALVAR</v-btn>
                            </div>
                            <v-alert v-model="alert_email" type="error">
                               O email já esta cadastrado
                            </v-alert>
                            <v-alert v-model="alert_password" type="error">
                                Senhas não conferem
                            </v-alert>
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
            valid_email: false,
            valid: false,
            confirmed_password: '',
            alert_password: false,
            alert_email: false,
            user: {
                email: '',
                password: ''
            },
            dictionary_pt_br: {
                attributes: {
                    email: 'Endereço de email',
                    password: 'Senha',
                    password_confirmation: 'Confirmação de senha',
                },
                custom: {
                    email: {
                        required: () => 'Endereço de e-mail requerido',
                        email: () => 'Formato do email invalido'
                    },
                    password: {
                        required: () => 'Senha requerida',
                        min: () => 'Senha deverá ter pelo menos 6 caracteres',
                    },
                    password_confirmation: {
                        required: () => 'Confirmação de senha requerida',
                        min: () => 'Senha deverá ter pelo menos 6 caracteres',
                    },
                }
            }
        }),
        mounted () {
            this.$validator.localize('pt_br', this.dictionary_pt_br)
        },
        methods: {
            async validateBeforeSubmit() {
                if(this.$validator.validateAll() && this.valid_email && this.valid_password ){
                    this.submit()
                }
            },
            async submit() {
                try {
                    await this.$store.dispatch('REGISTER', this.user)
                    this.$router.push({path: '/confirmation'})
                } catch (err) {
                    console.log(err)
                }
            },
            async check_password() {
                try {
                    var valid_password = this.confirmed_password == this.user.password
                    if(!valid_password && !this.confirmed_password == "" && !this.user.password == ""){
                        this.alert_password = true
                    }else{
                        this.alert_password = false
                        this.valid_password = true
                    }
                } catch (err) {
                    console.log(err)
                }
            },
            async check_email() {
                try {
                    this.check_email = !(await this.$store.dispatch('CHECK_EMAIL', this.user.email)).data.exist
                    if(!this.check_email){
                        this.alert_email = true
                    }else{
                        this.alert_email = false
                        this.valid_email = true
                    }
                } catch (err) {
                    console.log(err)
                }
            }
        },
    }
</script>
