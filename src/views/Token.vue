<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
                <v-form>
                    <v-card>
                    <v-card-title>
                        <h1>Buscar Token</h1>
                    </v-card-title>
                    <v-card-text>
                        <v-text-field
                        name="searchToken"
                        label="Digite o Token recebido"
                        prepend-icon="search"
                        ></v-text-field>
                        <v-btn color="info" block>Buscar</v-btn>
                    </v-card-text>
                    
                </v-card>
                <v-btn color="info" block to="/">
                    <v-icon>arrow_back</v-icon>
                    Voltar
                </v-btn>
                </v-form>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>
