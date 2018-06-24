<template>
    <v-container>
        <v-card>
            <v-card-title>
               <h2>Meu Perfil</h2>
            </v-card-title>
            <v-card-text>
                <p>Email: {{this.$store.state.user_logged}} </p>
                <p>Último arquivo enviado: </p>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
//TODO: Fazer resumo do paciente
    export default {
        components: {
        }
    }
</script>