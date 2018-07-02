<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
                <v-stepper v-model="currentStep" vertical>

                    <!-- PASSO 1-->
                    <v-stepper-step :complete="step1Done" step="1">
                        Enviar Arquivo
                        <small>Apenas arquivos em PDF</small>
                    </v-stepper-step>
                    <v-stepper-content step="1">
                        <sendFileStep1 v-model="exam.file"/>
                        <v-btn v-if="step1Done" color="primary" @click="nextStep">Próxima</v-btn>
                    </v-stepper-content>

                    <!-- PASSO 2 -->
                    <v-stepper-step :complete="step2Done" step="2">
                        Informações adicionais
                        <small>Tipo, categorias e outros</small>
                    </v-stepper-step>
                    <v-stepper-content step="2">
                        <v-card color="grey lighten-4" class="mb-5">
                            <v-card-text>
                                <v-text-field id="type" name="Tipo" label="Tipo do exame" v-model="exam.type"></v-text-field>
                            </v-card-text>
                        </v-card>
                        <v-btn v-if="step2Done" color="primary" @click="finish">Concluir</v-btn>
                    </v-stepper-content>

                    <!-- PASSO 3 -->
                    <p v-if="currentStep >= 3">Parabéns, você acabou de lançar um novo exame médico</p>

                </v-stepper>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
    /* eslint-disable no-console */
    import events from '../events'
    import SendFileStep1 from '../components/SendFileStep1'

    export default {
        components: {SendFileStep1},
        data() {
            return {
                currentStep: 1,
                exam: {
                    patientEmail: this.$store.state.loggedUser
                }
            }
        },
        computed: {
            step1Done() {
                return (this.exam.file !== undefined)
            },
            step2Done() {
                return true
            }
        },
        methods: {
            nextStep() {
                this.currentStep++
            },
            async finish() {
                this.nextStep()
                await this.$store.dispatch(events.actions.CREATE_EXAM, this.exam)
            }
        }
    }
</script>
