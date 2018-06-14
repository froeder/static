<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
                <v-card>
                    <v-card-title>Login</v-card-title>
                    <v-card-text>
                        <v-text-field id="usuario" name="usuario" label="Usuário" type="text"></v-text-field>
                        <v-text-field id="senha" name="senha" label="Senha" type="password"></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-container>
                            <v-btn color="success">Login</v-btn>
                            <v-btn to="/cadastro-usuario" color="info">Cadastrar</v-btn>
                        </v-container>
                    </v-card-actions>
                </v-card>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>
