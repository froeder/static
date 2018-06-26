<template>
    <v-app>
        <v-navigation-drawer v-if="this.$store.state.token" temporary :clipped="clipped" v-model="drawer" enable-resize-watcher fixed>
            <v-list>
                <v-list-tile value="true" v-for="(item, i) in items" :key="i" @click="linkto(item.linkpath)">
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app :clipped-left="clipped">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-content>
            <router-view/>
        </v-content>
        <Footer></Footer>
    </v-app>
</template>

<script>
    import Footer from './menu/Footer'

    export default {
        components: {
            Footer
        },
        data() {
            return {
                title: 'MVP-Saúde',
                clipped: false,
                drawer: false,
                fixed: false,
                items: [
                    {
                        icon: 'home',
                        title: 'Home',
                        linkpath: '/home'
                    },
                    {
                        icon: 'cloud_upload',
                        title: 'Salvar exame',
                        linkpath: '/upload_pdf'
                    },
                    {
                        icon: 'folder',
                        title: 'Histórico',
                        linkpath: '/history_patient'
                    },
                    {
                        icon: 'settings',
                        title: 'Gerar Token',
                        linkpath: '/generate_token'
                    },
                    {
                        icon: 'account_box',
                        title: 'Sair',
                        linkpath: '/'
                    }
                ],
                miniVariant: false,
                right: true,
                rightDrawer: false
            }
        },
        methods: {
            linkto(pathname) {
                this.$router.push({path: pathname})
            }
        }
    }
</script>
