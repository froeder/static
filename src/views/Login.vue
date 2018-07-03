<template>
    <v-container fill-height>
        <v-layout row align-center>
            <v-flex text-xs-center sm8 offset-sm2 md6 offset-md3>
                <v-card>
                    <v-card-text>
                        <v-card-title>
                            <h2>Login</h2>
                        </v-card-title>
                        <v-form autocomplete="off" v-on:submit.prevent="submit">
                            <v-text-field prepend-icon="email" name="email" label="E-mail" type="text"
                                          v-model="credentials.email" :error-messages="errors.collect('E-mail')"
                                          v-validate="'required|email'" data-vv-name="E-mail"></v-text-field>

                            <v-text-field prepend-icon="lock" name="password" label="Senha" type="password"
                                          v-model="credentials.password" :error-messages="errors.collect('Senha')"
                                          v-validate="'required'" data-vv-name="Senha"></v-text-field>

                            <v-btn color="success" block type="submit" :disabled="errors.any()">ENTRAR</v-btn>
                            <v-divider></v-divider>
                            <v-card-text>
                                <router-link to="/register">Criar nova conta</router-link>
                            </v-card-text>
                        </v-form>
                        <message :show="message.show" :text="message.text" :type="message.type"/>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import events from '../events'
    import Message from '../components/Message'

    export default {
        $_veeValidate: {
            validator: 'new'
        },
        components: {
            Message
        },
        data() {
            return {
                credentials: {},
                message: {
                    show: false,
                    text: '',
                    type: 'info'
                }
            }
        },
        methods: {
            async submit() {
                const isValid = await this.$validator.validateAll()
                if (isValid) {
                    this.login()
                }
            },
            async login() {
                try {
                    await this.$store.dispatch(events.actions.LOGIN, this.credentials)
                    this.$router.push({path: '/internal'})
                } catch (err) {
                    this.message.show = true
                    this.message.text = 'Email ou senha inválidos'
                    this.message.type = 'error'
                }
            }
        }
    }
</script>
