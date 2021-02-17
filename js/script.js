var app = new Vue({
  el: "#app",
  data: {

    // dati bottomNavbar
    bottomNav: [{
        nome: "HOME",
        link: "index.html"
      },
      {
        nome: "ABOUT",
        link: "#company"
      },
      {
        nome: "SERVICES",
        link: "#services"
      },
      {
        nome: "PROCESS",
        link: "#process"
      },
      {
        nome: "TEAM",
        link: "#team"
      },
      {
        nome: "BLOG",
        link: "index.html"
      },
    ],


    // dati azienda
    datiAzienda: {
      orarioApertura: "Mon - Sat - 9:00 - 18:00",
      numeroTelefono: "+1 (305) 1234-5678",
      email: "hello@example.com",
      logoSx: "N e x",
      logoDx: "G e n",
      attivita: "Fusion & Acquisitions",
      areaAttivita: "Insurance Consulting",
      descrizione: "A Functional HTML Template for Corporate & Business.",
      indirizzo: "Main Avenue, 987"
    },




  }, // fine data

  methods: {} //fine methods


}) //fine app
