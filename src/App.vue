<template>
    <v-app>
        <!--<sidebar :drawer="drawer" :clipped="clipped" :items="items"/>-->
        <toolbar :drawer="drawer" :clipped="clipped" :title="title"/>
        <v-content fluid>
            <router-view/>
        </v-content>
        <footerbar/>
    </v-app>
</template>

<script>
    import Sidebar from './components/Sidebar'
    import Toolbar from './components/Toolbar'
    import Footerbar from './components/Footerbar'

    export default {
        components: {
            Sidebar,
            Toolbar,
            Footerbar
        },
        data() {
            return {
                title: 'Medical Records',
                clipped: false,
                drawer: false,
                items: [
                    {
                        icon: 'home',
                        title: 'Home',
                        linkpath: '/home'
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
