<template>
    <v-snackbar v-model="show" :color="type" :timeout="timeout">
        {{ text }}
        <v-btn dark flat @click="show = false">Fechar</v-btn>
    </v-snackbar>
</template>
<script>
    export default {
        props: ['text', 'type', 'show'],
        data() {
            return {
                timeout: 6000
            }
        }
    }
</script>
