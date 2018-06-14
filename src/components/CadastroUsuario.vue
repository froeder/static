<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column>
                <v-container grid-list-md>
                    <v-card>
                        <v-card-text>
                            <h1>Usuários</h1>
                            <v-layout row wrap>
                                <v-flex xs6>
                                    <v-text-field v-model="usuarios.usuario_nome" id="nome" label="Nome" prepend-icon="assignment_ind" type="text"></v-text-field>
                                </v-flex>
                                <v-flex xs6>
                                    <v-text-field v-model="usuarios.usuario_email" id="email" label="E-mail" prepend-icon="email" type="texst"></v-text-field>
                                </v-flex>
                                <v-flex xs6>
                                    <v-text-field v-model="usuarios.usuario_senha" id="senha" label="Senha" prepend-icon="lock" type="password"></v-text-field>
                                </v-flex>
                                <v-flex xs6>
                                    <v-text-field id="re-senha" label="Confirma a senha" prepend-icon="lock" type="password"></v-text-field>
                                </v-flex>
                                <v-flex xs6>
                                    <v-text-field v-model="usuarios.usuario_cpf" id="cpf" label="CPF" prepend-icon="assignment" type="string"></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn to="/" color="primary">
                                <v-icon color="white">arrow_back</v-icon>
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn @click="adicionarUsuario()" color="green">
                                <v-icon color="white">save</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-container>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        date: null,
        dateFormatted: null,
        menu1: false,
        usuarios: {}
    }),
    computed: {
        computedDateFormatted () {
            return this.formatDate(this.date)
        }
    },
    watch: {
    },
    methods: {
        formatDate (date) {
            if (!date) return null
            const [year, month, day] = date.split('-')
            return `${day}/${month}/${year}`
        },
        parseDate (date) {
            if (!date) return null
            const [month, day, year] = date.split('/')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },
        adicionarUsuario () {
            let uri = 'http://localhost:4001/usuarios/add'
            axios.post(uri, this.usuarios)
        }
    }
}
</script>
