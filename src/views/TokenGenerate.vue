<template>
    <v-container>
        <v-layout row align-center>
            <v-flex text-xs-center sm8 offset-sm2 md6 offset-md3>
                <v-card>
                    <v-card-text>
                        <div class="title font-weight-light">Chave de acesso</div>
                        <div class="display-3 font-weight-black">{{token.key}}</div>
                        <p class="font-weight-thin">Válido até {{token.expirationAt}}</p>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import events from '../events'

    export default {
        mounted() {
            this.generateToken()
        },
        data() {
            return {
                token: ''
            }
        },
        methods: {
            async generateToken() {
                try {
                    this.token = await this.$store.dispatch(events.actions.GENERATE_TOKEN)
                } catch (err) {
                    this.$store.commit(events.mutations.SET_ERROR_MESSAGE, err)
                }
            }
        }
    }
</script>

