<template>
    <v-layout row justify-center>
        <v-dialog v-model="$store.state.loading" persistent width="300">
            <v-card color="primary" dark>
                <v-card-text>
                    Por favor, aguarde
                    <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-layout>
</template>
