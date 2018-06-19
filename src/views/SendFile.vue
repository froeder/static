<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
                <h2 class="display-1">Exame médico</h2>
                <p>Para entrar com os dados de um exame médico basta clicar no botão abaixo e selecionar o arquivo que contém dos dados do exame</p>
                <v-form autocomplete="off">
                    <v-btn color="primary" v-if="!uploading" @click="onPickFile">Selecione um arquivo</v-btn>
                    <input ref="fileInput" @change="onFilePicked" type="file" style="display: none" accept="application/pdf">
                    <v-progress-circular v-if="uploading" :size="100" :width="15" :rotate="360" :value="progress" color="teal">
                        {{ progress }}
                    </v-progress-circular>
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
                uploading: false,
                progress: 0
            }
        },
        methods: {
            onPickFile() {
                this.$refs.fileInput.click()
            },
            onFilePicked(event) {
                const file = event.target.files[0]
                const formData = new FormData()
                formData.append('file', file)

                const reader = new FileReader()
                reader.onerror = () => this.errorHandler(reader)
                reader.onprogress = (evt) => this.updateProgressHandler(evt)

                reader.onloadstart = () => {
                    this.uploading = true
                }

                reader.onload = () => {
                    this.progress = 100
                    this.uploading = false
                }
                this.$store.dispatch('UPLOAD_FILE', formData)
            },

            errorHandler(reader) {
                reader.abort()
            },

            updateProgressHandler(evt) {
                if (evt.lengthComputable) {
                    var percentLoaded = Math.round((evt.loaded / evt.total) * 100)
                    if (percentLoaded < 100) {
                        this.progress = percentLoaded + '%'
                    }
                }
            }
        }
    }
</script>
