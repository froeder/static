<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
                <v-card>
                    <v-card-title>Cadastro</v-card-title>
                    <v-card-text>
                        <v-text-field v-model="user.email" id="email" label="E-mail" prepend-icon="email" type="texst"></v-text-field>
                        <v-text-field v-model="user.password" id="password" label="Senha" prepend-icon="lock" type="password"></v-text-field>
                        <v-text-field v-model="repassword" id="repassword" label="Confirma a senha" prepend-icon="lock"
                                      type="password"></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-container>
                            <v-btn color="success" :disabled="invalidForm" @click="save()">SALVAR</v-btn>
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
            repassword: null,
            user: {}
        }),
        computed: {
            invalidForm() {
                return this.user.password !== this.repassword
            }
        },
        methods: {
            async save() {
                try {
                    const savedUser = await this.$store.dispatch('SAVE_USER', this.user)
                    console.log('Usuario foi salvo com sucesso', savedUser)
                } catch (err) {
                    console.log(err)
                }
            }
        }
    }
</script>
