<template>
    <div>
        <v-navigation-drawer app temporary :clipped="clipped" v-model="drawer" enable-resize-watcher fixed>
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
        <v-toolbar app dark flat color="indigo" :clipped-left="clipped">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title v-text="title"></v-toolbar-title>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        props: ['title', 'items'],
        data() {
            return {
                clipped: false,
                drawer: false
            }
        },
        methods: {
            linkto(pathname) {
                this.$router.push({path: pathname})
            }
        }
    }
</script>
