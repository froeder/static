<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
                <v-card>
                    <v-card-title>Confirmação do email</v-card-title>
                    <v-card-text>
                        O seu cadastro foi realizado com sucesso.
                        Estamos aguardano a confirmação do seu email.
                        Para isso, acesse sua caixa postal e clique no link contido no email que acabamos de lhe enviar.
                    </v-card-text>
                    <v-card-actions>
                        <v-container>
                            <v-btn to="/" color="info">Voltar para login</v-btn>
                        </v-container>
                    </v-card-actions>
                </v-card>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>
