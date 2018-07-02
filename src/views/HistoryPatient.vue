<template>
    <v-container>
        <v-card>
            <v-card-title><h1>Histórico do paciente </h1></v-card-title>
            <v-card-text>
                <v-container grid-list-md>
                    <v-layout row wrap>
                        <v-flex xs12 sm4 v-for="exam in examsList">
                            <v-card>
                                <v-card-title class="headline">{{exam.type}}</v-card-title>
                                <v-spacer></v-spacer>
                                <v-card-text>
                                    {{exam.date}}
                                </v-card-text>
                                <v-card-actions>
                                    <a :href="createUrl(exam.file)">
                                        <v-btn>Ver</v-btn>
                                    </a>
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
    import events from '../events'

    export default {
        data() {
            return {
                examsList: []
            }
        },
        async mounted() {
            this.examsList = await this.$store.dispatch(events.actions.GET_MY_EXAMS)
        },
        methods: {
            createUrl(filename) {
                return `/api/files/${filename}/download`
            }
        }
    }
</script>
<style scoped>
    a {
        text-decoration: none
    }
</style>

