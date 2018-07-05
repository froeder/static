<template>
    <v-container>
        <v-layout row align-center>
            <v-flex text-xs-center sm8 offset-sm2 md6 offset-md3>
                <v-card>
                    <v-card-text>
                        <v-card-title>
                            <h2>Acesso ao prontuário eletrônico</h2>
                        </v-card-title>
                        <v-form autocomplete="off" v-on:submit.prevent="submit">
                            <v-text-field prepend-icon="lock" name="token" label="Token de acesso" type="text"
                                          v-model="token" :error-messages="errors.collect('Token de acesso')"
                                          v-validate="'required'" data-vv-name="Token de acesso"></v-text-field>

                            <v-btn color="success" block type="submit" :disabled="errors.any()">ENTRAR</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                token: ''
            }
        },
        methods: {
            async submit() {
                const isValid = await this.$validator.validateAll()
                if (isValid) {
                    this.$router.push({path: '/historyPatient/', params: {token: this.token}})
                }
            }
        }
    }
</script>
