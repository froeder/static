<template>
  <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
                <v-form autocomplete="off">
                    <v-card-text>
                        <h2>Selecione o arquivo</h2>
                        <input type="file" @change="onFileChange">
                        <v-btn color="success" :large="true" @click="submit">Salvar</v-btn>
                    </v-card-text>
                </v-form>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
import axios from "axios";
export default {
    data () {
        return {
            image: ""
        }
    },
    methods: {
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.createImage(files[0]);
        },
        createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;
            reader.onload = e => {
                vm.image = e.target.result;
                //imagem codificada
                console.log(e.target.result) 
                var file = e.target.result
            };
            reader.readAsDataURL(file);
        },
        removeImage: function(e) {
            this.image = "";
        },
        async submit() {
            try {
                await this.$store.dispatch('SENDFILE', this.file)
            } catch (err) {
                //TODO EXIBIR MENSAGEM DE ERRO NA TELA ATRAVES DE UM TOAST OU ALGO DO TIPO
                console.log(err)
            }
        }
    }
};
</script>
