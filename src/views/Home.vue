<template>
    <v-jumbotron>
        <v-container fill-height>
            <v-layout align-center>
                <v-flex text-xs-center>
                    <div class="title mb-3">Como deseja acessar?</div>
                    <v-btn large color="primary" to="/login">COMO PACIENTE</v-btn>
                    <v-btn large color="secundary" to="/token">COMO MÉDICO</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </v-jumbotron>
</template>
