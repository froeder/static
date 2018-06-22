<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
                <v-card>
                    <v-card-title>
                        <h1>Exame médico</h1>
                    </v-card-title>
                    <v-card-text>Para entrar com os dados de um exame médico basta clicar no botão abaixo e selecionar o arquivo que contém dos dados do exame</v-card-text>
                    <v-form autocomplete="off">
                        <v-btn color="primary" v-if="!loading" @click="onPickFile">Selecione um arquivo</v-btn>
                        <div class="text-xs-center">
                            <input ref="fileInput" @change="onFilePicked" type="file" style="display: none" accept="application/pdf">
                        </div>
                        <v-progress-circular v-if="loading" :size="100" :width="15" :rotate="360" :value="progress"
                                            color="teal">
                            {{ progress }} %
                        </v-progress-circular>
                        <p v-if="uploadedFiledata">
                            Parabens, o arquivo {{uploadedFiledata.filename}} foi carregado com sucesso
                        </p>
                        <v-alert v-if="errorUpload" :value="true" type="error">
                            O arquivo nao foi enviado
                        </v-alert>
                    </v-form>
                </v-card>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
    /* eslint-disable no-console */
    import events from '../events'

    export default {
        data() {
            return {
                uploadedFiledata: null,
                errorUpload: false
            }
        },
        computed: {
            loading() {
                return this.$store.state.loading
            },
            progress() {
                return this.$store.state.fileUploadProgress
            }
        },
        methods: {
            onPickFile() {
                this.$refs.fileInput.click()
            },
            async onFilePicked(event) {
                try {
                    const file = event.target.files[0]
                    const formData = new FormData()
                    formData.append('file', file)
                    const filedata = await this.$store.dispatch(events.actions.UPLOAD_FILE, formData)
                    this.uploadedFiledata = filedata
                } catch (err) {
                    console.log('ERRO AO SUBIR ARQUIVO')
                    this.errorUpload = true
                }
            }
        }
    }
</script>
