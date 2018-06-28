<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
                <v-stepper v-model="e6" vertical>
                    <v-stepper-step :complete="e6> 1" step="1">
                        Enviar Arquivo
                        <small>Apenas arquivos em PDF</small>
                    </v-stepper-step>
                    <v-stepper-content step="1">
                        <v-card color="grey lighten-4" class="mb-5">
                            <v-card-title>
                                <h1>Exame médico</h1>
                            </v-card-title>
                            <div class="text-xs-center">
                                <v-card-text>Para entrar com os dados de um exame médico basta clicar no botão abaixo e selecionar o arquivo que contém dos dados do exame</v-card-text>
                                <v-form autocomplete="off">
                                    <v-btn color="primary" v-if="!loading" @click="onPickFile">Selecione um arquivo</v-btn>
                                        <input ref="fileInput" @change="onFilePicked" type="file" style="display: none" accept="application/pdf">
                                        <v-progress-circular v-if="loading" :size="100" :width="15" :rotate="360" :value="progress" color="teal">
                                        {{ progress }} %
                                        </v-progress-circular>
                                        <v-alert v-if="uploadedFiledata" v-model="alert" type="success" dismissible>
                                            Parabens, o arquivo {{uploadedFiledata.filename}} foi carregado com sucesso
                                        </v-alert>
                                        <v-alert v-if="errorUpload" v-model="alert" type="error" dismissible>
                                        O arquivo nao foi enviado
                                        </v-alert>
                                </v-form>
                            </div>
                        </v-card>
                        <v-btn color="primary" @click.native="e6 = 2">Próxima</v-btn>
                    </v-stepper-content>
                    <v-stepper-step :complete="e6> 2" step="2">
                        Informações adicionais
                        <small>Tipo, categorias e outros</small>
                    </v-stepper-step>
                    <v-stepper-content step="2">
                        <v-card color="grey lighten-4" class="mb-5">
                            <v-card-text>
                                <v-text-field
                                    id="type"
                                    name="Tipo"
                                    label="Tipo do exame"
                                ></v-text-field>
                            </v-card-text>
                        </v-card>
                        <v-btn color="primary" @click.native="e6 = 3">Próxima</v-btn>
                    </v-stepper-content>
                    <v-stepper-step :complete="e6> 3" step="3">Resumo do envio</v-stepper-step>
                    <v-stepper-content step="3">
                        <v-card color="grey lighten-4" class="mb-5">
                            <v-card-text>
                                <p>Nome do arquivo: {{this.filename}}</p>
                                <p>Outros</p>
                            </v-card-text> 
                        </v-card>
                        <v-btn color="primary" @click="e6 = 6">Enviar outro</v-btn>
                    </v-stepper-content>
                </v-stepper>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
/* eslint-disable no-console */
import events from "../events";

export default {
  data() {
    return {
      alert: true,
      uploadedFiledata: null,
      errorUpload: false,
      user_logged: "",
      e6: 1,
      fileName: ''
    };
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
    progress() {
      return this.$store.state.fileUploadProgress;
    }
  },
  methods: {
    onPickFile() {
      this.$refs.fileInput.click();
    },
    async onFilePicked(event) {
      try {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        const filedata = await this.$store.dispatch(
          events.actions.UPLOAD_FILE,
          formData
        );
        filedata.user_logged = this.$store.state.user_logged;
        this.uploadedFiledata = filedata;
        this.filename = this.uploadedFiledata.originalname

      } catch (err) {
        console.log("ERRO AO SUBIR ARQUIVO");
        this.errorUpload = true;
      }
    }
  }
}
</script>
