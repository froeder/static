<template>
    <v-container grid-list-xl text-xs-center>
        <v-layout row wrap>
            <v-flex xs10 offset-xs1>
                <v-card>
                    <v-card-title>
                        <h1>Gerar token</h1>
                    </v-card-title>
                    <v-card-text>
                        <div class="text-xs-center">
                            <v-btn @click="generateAccessToken()">
                                Clique para gerar 
                                <v-icon>settings</v-icon>
                            </v-btn>
                        </div>
                        <p>
                            Token: {{accessToken.token}} <br>
                            Data expiração: {{accessToken.expirationDate}}
                        </p>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import moment from 'moment'

export default {
    data () {
        return {
            accessToken: {
                token: '',
                createAt: '',
                expirationDate: '',
                user_email: ''
            }
        }
    },
    methods:{
        generateAccessToken (){
            var user_email = this.$store.state.user_logged
            var number_1 = Math.floor((Math.random() * 10) + 1)
            var number_2 = Math.floor((Math.random() * 10) + 1)
            var number_3 = Math.floor((Math.random() * 10) + 1)
            var charsAcessToken = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            for (var i = 0; i < 3; i++){
                charsAcessToken += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            this.accessToken.token = charsAcessToken + number_1 + number_2 + number_3
            this.accessToken.createAt = moment().subtract(10, 'days').calendar()
            // this.accessToken.expirationDate = this.accessToken.createAt.add(7, 'days')
            var expiration = moment().add(7, 'd')
            this.accessToken.expirationDate = expiration._d

            // console.log(this.accessToken)
        }
    }
}
</script>

