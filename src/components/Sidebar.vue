<template>
    <v-navigation-drawer app v-if="this.$store.state.token" temporary :clipped="clipped" v-model="drawer"
                         enable-resize-watcher fixed>
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
</template>

<script>
    export default {
        props: ['clipped', 'drawer', 'items'],
        methods: {
            linkto(pathname) {
                this.$router.push({path: pathname})
            }
        }
    }
</script>
