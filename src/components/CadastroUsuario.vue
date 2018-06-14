<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container fluid>
      <v-slide-y-transition mode="out-in">
        <v-layout column>
          <v-container grid-list-md>
            <v-card>
              <v-card-text>
                <h1>Usuários</h1>
                <v-layout row wrap>
                  <v-flex xs6>
                    <v-text-field
                    id="nome"
                    label="Nome"
                    prepend-icon="assignment_ind"
                    v-model="usuarios.usuario_nome"
                    :rules="nameRules"
                    type="text"
                    required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field
                    id="email"
                    label="E-mail"
                    prepend-icon="email"
                    v-model="usuarios.usuario_email"
                    :rules="emailRules"
                    type="texst"
                    required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field
                    id="senha"
                    label="Senha"
                    prepend-icon="lock"
                    v-model="usuarios.usuario_senha"
                    :append-icon-cb="() => (senhaVisibilidade = !senhaVisibilidade)"
                    :append-icon="senhaVisibilidade ? 'visibility_off' : 'visibility'"
                    :type="senhaVisibilidade ? 'password' : 'text'"
                    :rules="senhaRules"
                    required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field
                    id="re-senha"
                    label="Confirma a senha"
                    prepend-icon="lock"
                    :append-icon-cb="() => (re_senhaVisibilidade = !re_senhaVisibilidade)"
                    :append-icon="re_senhaVisibilidade ? 'visibility_off' : 'visibility'"
                    :type="re_senhaVisibilidade ? 'password' : 'text'"
                    :rules="senhaConfirmarRules"
                    required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field
                    id="cpf"
                    label="CPF"
                    v-model="usuarios.usuario_cpf"
                    prepend-icon="assignment"
                    type="string"
                    :mask="maskCPF"
                    :rules="cpfRules"
                    required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs6>
                    <v-menu
                    :close-on-content-click="false"
                    v-model="menu1"
                    :nudge-right="40"
                    lazy transition="scale-transition"
                    offset-y full-width
                    max-width="290px"
                    min-width="290px">
                      <v-text-field slot="activator"
                        v-model="computedDateFormatted"
                        label="Data de nascimento"
                        hint="formato DD/MM/YYYY"
                        persistent-hint
                        prepend-icon="event"
                        readonly
                        :rules="dataRules"
                        required
                        ></v-text-field>
                      <v-date-picker
                      v-model="date"
                      no-title
                      @input="menu1 = false"
                      ></v-date-picker>
                    </v-menu>
                  </v-flex>
                </v-layout>
              </v-card-text>
              <v-card-actions>
                <v-btn to="/" color="primary">
                  <v-icon color="white">arrow_back</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn @click="submit()" color="green">
                  <v-icon color="white">save</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-container>
        </v-layout>
      </v-slide-y-transition>
    </v-container>
  </v-form>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    date: null,
    valid: true,
    dateFormatted: null,
    menu1: false,
    usuarios: {},
    senhaVisibilidade: true,
    re_senhaVisibilidade: true,
    maskCPF: "###.###.###-##",
    name: "",
    nameRules: [
      v => !!v || "Name é requerido",
      v =>
        (v && v.length >= 10) || "O nome deve ter pelo menos de 10 caracteres"
    ],
    senha: "",
    senhaRules: [
      v => !!v || "Senha é requerido",
      v =>
        (v && v.length >= 10) || "A senha deve ter pelo menos de 10 caracteres"
    ],
    senhaConfirmar: "",
    senhaConfirmarRules: [
      v => !!v || "Confirmação de senha é requerida",
      v => this.comparaSenhas || "Senha não conferem"
    ],
    cpf: "",
    cpfRules: [
      v => !!v || "CPF é requerido",
      v =>
        (v && v.length >= 10) || "A senha deve ter pelo menos de 10 caracteres"
    ],
    data: "",
    dataRules: [v => !!v || "Data de nascimento é requerido"],
    emailRules: "",
    emailRules: [
      v => !!v || "E-mail é requerido",
      v =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail não valido"
    ]
  }),
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },
  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate() && comparaSenhas()) {
        axios.post("/api/submit", {});
        this.adicionarUsuario();
      }
    },
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;
      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
    adicionarUsuario() {
      let uri = "http://localhost:4001/usuarios/add";
      axios.post(uri, this.usuarios).then(response => {
        console.log("Adicionou");
      });
    },
    comparaSenhas() {
      if (this.senha === this.usuarios.usuario_senha_) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
