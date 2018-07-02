<template>
    <div class="text-xs-center">
        <p>Para entrar com os dados de um exame médico basta clicar no botão abaixo e selecionar o arquivo que
            contém dos dados do exame</p>
        <v-btn color="primary" v-if="!loading && progress < 100" @click="onPickFile">Selecione um arquivo</v-btn>
        <input ref="fileInput" @change="onFilePicked" type="file" style="display: none" accept="application/pdf">
        <v-progress-circular v-if="loading || progress === 100" :size="100" :width="15" :rotate="360" :value="progress" color="teal">
            {{ progress }} %
        </v-progress-circular>
    </div>
</template>
<script>
    import events from '../events'

    export default {
        props: ['value'],
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
                    const data = await this.$store.dispatch(events.actions.UPLOAD_FILE, formData)
                    this.updateValue(data.filename)
                } catch (err) {
                    //SEND A TOAST MESSAGE
                }
            },
            updateValue(file) {
                this.$emit('input', file)
            }
        }
    }
</script>
