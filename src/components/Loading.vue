<template>
    <v-dialog v-model="dialog" hide-overlay persistent width="300">
        <v-card color="primary" dark>
            <v-card-text>
                Por favor espere
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
