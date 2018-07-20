<template>
    <v-container>
        <v-layout row align-center>
            <v-flex text-xs-center sm8 offset-sm2 md6 offset-md3>
                <v-stepper v-model="currentStep">
                    <v-stepper-header>
                        <v-stepper-step :complete="currentStep > 1" step="1">Arquivo</v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step :complete="currentStep > 2" step="2">Complemento</v-stepper-step>
                    </v-stepper-header>
                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <v-card class="mb-5" flat height="200px">
                                <h3 class="headline">Informe o exame médico</h3>
                                <br>
                                <file-upload label="Selecione um arquivo PDF" v-model="file" accept="application/pdf"></file-upload>
                            </v-card>
                        </v-stepper-content>
                        <v-stepper-content step="2">
                            <v-form autocomplete="off" v-on:submit.prevent="submit">
                                <v-card class="mb-5" flat height="200px">
                                    <v-text-field name="typeExam" label="Tipo de exame" v-model="type"
                                                  :error-messages="errors.collect('Tipo de exame')"
                                                  v-validate="'required'" data-vv-name="Tipo de exame"/>
                                </v-card>
                                <v-btn color="primary" type="submit">CONCLUIR</v-btn>
                                <v-btn flat>CANCELAR</v-btn>
                            </v-form>
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import events from '../events'
    import FileUpload from '../components/FileUpload'

    export default {
        components: {
            FileUpload
        },
        created() {
           this.resetPage()
        },
        data() {
            return {
                currentStep: 0,
                file: '',
                type: ''
            }
        },
        watch: {
            file(newValue, oldValue) {
                const hasChanged = (oldValue != newValue)
                if (hasChanged) {
                    this.nextStep()
                }
            }
        },
        methods: {
            resetPage(){
                this.$store.commit(events.mutations.RESET_FILE_UPLOAD)
            },
            nextStep() {
                setTimeout(() => this.currentStep++, 1500)
            },
            async submit() {
                const isValid = await this.$validator.validateAll()
                if (isValid) {
                    try {
                        const examData = this.createExamData()
                        await this.createExam(examData)
                        this.showInfoMessage()
                        this.navigateToHistoryPage()
                    } catch (err) {
                        this.showErrorMessage(err)
                    }
                }
            },
            createExamData() {
                return {
                    patientEmail: this.$store.state.loggedUser,
                    file: this.file,
                    type: this.type
                }
            },
            async createExam(examData) {
                this.$store.dispatch(events.actions.CREATE_EXAM, examData)
            },
            showInfoMessage() {
                this.$store.commit(events.mutations.SET_INFO_MESSAGE, 'Parabéns, o exame foi salvo com sucesso!')
            },
            showErrorMessage(err) {
                this.$store.commit(events.mutations.SET_ERROR_MESSAGE, err)
            },
            navigateToHistoryPage() {
                setTimeout(() => this.$router.push({path: '/historyPatient'}), 1500)
            }
        }
    }
</script>
