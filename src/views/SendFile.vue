<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">

            <v-layout column align-center>
                <v-card>
                    <v-card-title>
                        <h1>Exame médico</h1>
                    </v-card-title>
                    <div class="text-xs-center">
                    <v-card-text>Para entrar com os dados de um exame médico basta clicar no botão abaixo e selecionar o arquivo que contém dos dados do exame</v-card-text>
                    <v-form autocomplete="off">
                        <v-btn color="primary" v-if="!loading" @click="onPickFile">Selecione um arquivo</v-btn>
                            <input ref="fileInput" @change="onFilePicked" type="file" style="display: none" accept="application/pdf">
                            <v-progress-circular v-if="loading" :size="100" :width="15" :rotate="360" :value="progress" color="teal">
                            {{ progress }} %
                            </v-progress-circular>
                            <v-alert v-if="uploadedFiledata" v-model="alert" type="success" dismissible>
                                 Parabens, o arquivo {{uploadedFiledata.filename}} foi carregado com sucesso
                            </v-alert>
                            <v-alert v-if="errorUpload" v-model="alert" type="error" dismissible>
                            O arquivo nao foi enviado
                            </v-alert>
                    </v-form>
                  </div>
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
                alert: true,
                uploadedFiledata: null,
                errorUpload: false,
                user_logged: ''
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
                    filedata.user_logged = this.$store.state.user_logged
                    this.uploadedFiledata = filedata

                    console.log(filedata)
                } catch (err) {
                    console.log('ERRO AO SUBIR ARQUIVO')
                    this.errorUpload = true
                }
            }
        }
    }
</script>
