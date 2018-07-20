<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-subheader>Histórico de exames</v-subheader>
                <v-card>
                    <v-list two-line>
                        <template v-for="(item, index) in exams">
                            <v-list-tile :key="item._id" @click="download(item.file)">
                                <v-list-tile-content>
                                    <v-list-tile-title v-html="item.type"></v-list-tile-title>
                                    <v-list-tile-sub-title>{{item.date | moment-date}}</v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-divider :key="index"/>
                        </template>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import events from '../events'

    export default {
        data() {
            return {
                exams: []
            }
        },
        async mounted() {
            if (this.$route.params && this.$route.params.token) {
                this.exams = await this.$store.dispatch(events.actions.GET_AUTHORIZED_EXAMS, this.$route.params.token)
            } else {
                this.exams = await this.$store.dispatch(events.actions.GET_MY_EXAMS)
            }
        },
        methods: {
            download(filename) {
                const url = `/api/files/${filename}/download`
                window.open(url)
            }
        }
    }
</script>

