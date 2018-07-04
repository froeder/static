<template>
    <v-snackbar v-model="show" :color="color">
        {{ text }}
        <v-btn dark flat @click="show = false">Fechar</v-btn>
    </v-snackbar>
</template>
<script>
    import events from '../events'

    export default {
        data() {
            return {
                text: '',
                color: '',
                show: false
            }
        },
        created: function () {
            this.$store.watch(state => state.messageText, () => {
                const msg = this.$store.state.messageText
                if (msg !== '') {
                    this.show = true
                    this.text = this.$store.state.messageText
                    this.color = this.$store.state.messageType
                    this.$store.commit(events.mutations.SET_INFO_MESSAGE, '')
                }
            })
        }
    }
</script>
