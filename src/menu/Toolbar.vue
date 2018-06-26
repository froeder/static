<template>
   <div></div>
</template>

<script>
    // SUGESTAO: QUEBRAR ESTA TELA EM COMPONENTES: SIDEBAR, TOOLBAR, FOOTER
    export default {
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
