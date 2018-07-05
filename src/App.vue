<template>
    <v-app>
        <loading/>
        <toolbar :items="items" :title="title"/>
        <v-content fluid>
            <router-view/>
        </v-content>
        <message/>
        <footerbar/>
    </v-app>
</template>

<script>
    import Toolbar from './components/Toolbar'
    import Footerbar from './components/Footerbar'
    import Message from './components/Message'
    import Loading from './components/Loading'

    export default {
        components: {
            Toolbar,
            Footerbar,
            Message,
            Loading
        },
        data() {
            return {
                title: 'Medical Records',
                items: [
                    {
                        icon: 'home',
                        title: 'Home',
                        linkpath: '/internal'
                    },
                    {
                        icon: 'cloud_upload',
                        title: 'Inserir exame',
                        linkpath: '/createExam'
                    },
                    {
                        icon: 'folder',
                        title: 'Histórico de exames',
                        linkpath: '/historyPatient'
                    },
                    {
                        icon: 'settings',
                        title: 'Gerar chave de acesso',
                        linkpath: '/tokenGenerate'
                    },
                    {
                        icon: 'account_box',
                        title: 'Sair',
                        linkpath: '/'
                    }
                ]
            }
        }
    }
</script>
