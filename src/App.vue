<template>
  <v-app>
    <v-navigation-drawer persistent :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app>
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
    <v-footer :fixed="fixed" app>
      <span> PET-Sistemas UFMS & Living Lab &copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
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
          title: 'Enviar de Arquivo',
          linkpath: '/upload_pdf'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'MVP-Saúde'
    }
  },
  name: 'App',
  methods: {
    linkto (pathname) {
      this.$router.push({ path: pathname })
    },
  }
}
</script>
