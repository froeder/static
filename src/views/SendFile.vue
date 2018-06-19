<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
                <h2 class="display-1">Exame médico</h2>
                <p>Para entrar com os dados de um exame médico basta clicar no botão abaixo e selecionar o arquivo que contém dos dados do exame</p>
                <v-form autocomplete="off">
                    <v-btn color="primary" v-if="!loading" @click="onPickFile">Selecione um arquivo</v-btn>
                    <input ref="fileInput" @change="onFilePicked" type="file" style="display: none" accept="application/pdf">
                    <v-progress-circular v-if="loading" :size="100" :width="15" :rotate="360" :value="progress"
                                         color="teal">
                        {{ progress }} %
                    </v-progress-circular>
                    <p v-if="uploadedFiledata">
                        Parabens, o arquivo {{uploadedFiledata.filename}} foi carregado com sucesso
                    </p>
                </v-form>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
    /* eslint-disable no-console */
    export default {
        data() {
            return {
                uploadedFiledata: null
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
                    const filedata = await this.$store.dispatch('UPLOAD_FILE', formData)
                    this.uploadedFiledata = filedata
                } catch (err) {
                    console.log('ERRO AO SUBIR ARQUIVO')
                }
            }
        }
    }
</script>
