<template>
    <v-app>
        <toolbar :items="items" :title="title"/>
        <v-content fluid>
            <router-view/>
        </v-content>
        <footerbar/>
    </v-app>
</template>

<script>
    import Toolbar from './components/Toolbar'
    import Footerbar from './components/Footerbar'

    export default {
        components: {
            Toolbar,
            Footerbar
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
                        title: 'Salvar exame',
                        linkpath: '/createExam'
                    },
                    {
                        icon: 'folder',
                        title: 'Histórico',
                        linkpath: '/history'
                    },
                    {
                        icon: 'settings',
                        title: 'Dar acesso ao médico',
                        linkpath: '/generateToken'
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
