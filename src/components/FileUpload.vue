<template>
    <div>
        <v-btn color="primary" v-if="!loading && progress < 100" @click="selectFile">{{label}}</v-btn>
        <input ref="fileInput" @change="onFilePicked" type="file" style="display: none" :accept="accept">
        <v-progress-circular v-if="loading || progress === 100" :size="100" :width="15" :rotate="360" :value="progress" color="teal">
            {{ progress }} %
        </v-progress-circular>
        <p>
            {{filename}}
        </p>
    </div>
</template>
<script>
    import events from '../events'

    export default {
        props: ['value', 'label', 'accept'],
        data() {
            return {
                filename: ''
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
            selectFile() {
                this.$refs.fileInput.click()
            },
            async onFilePicked(event) {
                try {
                    const file = event.target.files[0]
                    this.filename = file.name
                    const formData = this.createFormData(file)
                    const data = await this.$store.dispatch(events.actions.UPLOAD_FILE, formData)
                    this.updateValue(data.filename)
                } catch (err) {
                    this.$store.commit(events.mutations.SET_ERROR_MESSAGE, err)
                }
            },
            createFormData(file) {
                const formData = new FormData()
                formData.append('file', file)
                return formData
            },
            updateValue(file) {
                this.$emit('input', file)
            }
        }
    }
</script>
