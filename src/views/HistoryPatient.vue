<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
                <v-card>
                    <v-card-title><h1>Histórico do paciente</h1></v-card-title>
                    <v-card-text>
                        {{this.fileName}} <br>
                        {{this.$store.state.user_logged}} <br>
                        <a href="/api/files/historico-pdf-1529796371985">Exame X</a>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn @click="loadPdf()">
                            Load
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            fileName: 'file',
            user: 'user'
        }
    },
    methods: {
        loadPdf (){
           console.log('cliclou')
        }
    },
     created: function () {
         console.log('CRIOU')
         let uri = '/api/files/historico-pdf-1529796371985'
        axios.get(uri).then((response) => {
            console.log(response)
        })
        //  axios.get('/api/files/historico-pdf-1529796371985').then('pegou')
    }
}
</script>

