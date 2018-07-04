<template>
    <v-container fill-height>
        <v-layout row align-center>
            <v-flex text-xs-center sm8 offset-sm2 md6 offset-md3>
                <v-card>
                    <v-card-text>
                        <v-card-title>
                            <h2>Cadastrar novo usuário</h2>
                        </v-card-title>
                        <v-form autocomplete="off" v-on:submit.prevent="submit">
                            <v-text-field id="email" prepend-icon="email" name="email" label="E-mail" type="text"
                                          v-model="user.email" :error-messages="errors.collect('email')"
                                          v-validate="'required|email|unique'"></v-text-field>

                            <v-text-field id="senha" prepend-icon="lock" name="senha" label="Senha" type="password"
                                          v-model="user.password" :error-messages="errors.collect('senha')"
                                          v-validate="'required'"></v-text-field>

                            <v-text-field id="confirma" prepend-icon="lock" name="confirma" label="Confirma" type="password"
                                          v-model="user.confirm" :error-messages="errors.collect('confirma')"
                                          v-validate="'required|confirmed:senha'"></v-text-field>

                            <v-btn color="success" block type="submit" :disabled="errors.any()">SALVAR</v-btn>
                            <v-divider></v-divider>
                            <v-card-text>
                                <router-link to="/login">Voltar</router-link>
                            </v-card-text>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import events from '../events'

    export default {
        $_veeValidate: {
            validator: 'new'
        },
        data() {
            return {
                user: {
                    password: null,
                    confirm: null
                }
            }
        },
        methods: {
            async submit() {
                const isValid = await this.$validator.validateAll()
                if (isValid) {
                    this.register()
                }
            },
            async register() {
                try {
                    await this.$store.dispatch(events.actions.REGISTER, this.user)
                    this.$router.push({path: '/confirmation'})
                } catch (err) {
                    this.$store.commit(events.mutations.SET_ERROR_MESSAGE, err)
                }
            }
        }
    }
</script>
