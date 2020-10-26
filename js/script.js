const app = new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data() {
    return {
      errors: [],
      theme:{
      dark: false,
      darkClass: "glint",
      darkBackgroundColor: "bg-glint",
      darkCard: "card-glint",
      darkInput: "input-glint",
      darktext: "text-glint",
      },
      form:{
        nome: null,
        sobrenome: null,
        email: null,
        senha: null,
      }
  };
  },
  methods: {
    setDark() {
      this.theme.dark = !this.theme.dark;
      if (this.theme.dark) {
        this.theme.darkClass = "glint-dark";
        this.theme.darkBackgroundColor = "bg-glint-dark";
        this.theme.darkCard = "card-glint-dark";
        this.theme.darkInput = "input-glint-dark";
        this.theme.darktexto = "text-glint-dark";
      } else {
        this.theme.darkClass = "glint";
        this.theme.darkBackgroundColor = "bg-glint";
        this.theme.darkCard = "card-glint";
        this.theme.darkInput = "input-glint";
        this.theme.darktexto = "text-glint";
      }
    },
    checkForm: function (e) {
      if (this.form.nome) {
        return true;
      }

      this.errors = [];

      if (!this.form.name) {
        this.errors.push("O nome é obrigatório.");
      }

      e.preventDefault();
    },
  },
});
