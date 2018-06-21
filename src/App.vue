<template>
    <v-app>
        <v-navigation-drawer persistent :clipped="clipped" v-model="drawer" enable-resize-watcher fixed>
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
    import Toolbar from './menu/Toolbar'
    import Footer from './menu/Footer'
    import NavigationDrawer from './menu/NavigationDrawer'

    export default {
        components: {
            Toolbar,
            Footer,
            NavigationDrawer
        },
        data() {
            return {
                title: 'MVP-Saúde',
                clipped: false,
                drawer: true,
                fixed: false,
                items: [
                    {
                        icon: 'account_box',
                        title: 'Login',
                        linkpath: '/'
                    },
                    {
                        icon: 'cloud_upload',
                        title: 'Salvar exame',
                        linkpath: '/upload_pdf'
                    },
                    {
                        icon: 'settings',
                        title: 'Gerar Token',
                        linkpath: '/generate_token'
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
