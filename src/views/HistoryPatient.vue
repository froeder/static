<template>
    <v-container>
        <v-card>
            <v-card-title><h1>Histórico do paciente  </h1> <h4>{{this.$store.state.user_logged}} <br></h4></v-card-title>
            <v-card-text>
                <v-container grid-list-md>
                    <v-layout row wrap>
                        <v-flex xs12 sm4>
                            <v-card>
                                <v-card-title class="headline">Exame Sangue</v-card-title>
                                <v-spacer></v-spacer>
                                <v-card-text>
                                    {{this.fileName}} <br>
                                    <a href="/api/files/historico-pdf-1529796371985">Exame X</a>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn>
                                        Ver
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 sm4>
                            <v-card>
                                <v-card-title class="headline">Exame Urina</v-card-title>
                                <v-spacer></v-spacer>
                                <v-card-text>
                                    {{this.fileName}} <br>
                                    <a href="/api/files/mozilla-pdf-1529802961547">Exame X</a>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn>
                                        Ver
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 sm4>
                            <v-card>
                                <v-card-title class="headline">Exame Sangue</v-card-title>
                                <v-spacer></v-spacer>
                                <v-card-text>
                                    {{this.fileName}} <br>
                                    <a href="/api/files/receita-federal-do-brasil-pdf-1529802242191">Exame X</a>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn>
                                        Ver
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    </v-container>    
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            fileName: '',
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
            this.fileName = response.headers.etag

            console.log(this.fileName)
        })
        //  axios.get('/api/files/historico-pdf-1529796371985')
    }
}
</script>

