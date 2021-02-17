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

    // dati footer
    datiFooter: [{
        titolo: "About",
        links: [{
            nome: "The Company",
            link: "#company"
          },
          {
            nome: "Institutional",
            link: "index.html"
          },
          {
            nome: "Social & Events",
            link: "index.html"
          },
          {
            nome: "Innovation",
            link: "index.html"
          },
          {
            nome: "Environment",
            link: "index.html"
          },
          {
            nome: "Technology",
            link: "index.html"
          }
        ]
      },
      {
        titolo: "Services",
        links: [{
            nome: "Audit & Assurance",
            link: "index.html"
          },
          {
            nome: "Financial Advisory",
            link: "index.html"
          },
          {
            nome: "Analytics M&A",
            link: "index.html"
          },
          {
            nome: "Middle Marketing",
            link: "index.html"
          },
          {
            nome: "Legal Consulting",
            link: "index.html"
          },
          {
            nome: "Regulatory Risk",
            link: "index.html"
          }
        ]
      },
      {
        titolo: "Support",
        links: [{
            nome: "Responsability",
            link: "index.html"
          },
          {
            nome: "Terms of Use",
            link: "index.html"
          },
          {
            nome: "About Cookies",
            link: "index.html"
          },
          {
            nome: "Privacy Policy",
            link: "index.html"
          },
          {
            nome: "Accessibility",
            link: "index.html"
          },
          {
            nome: "Information",
            link: "index.html"
          }
        ]
      }
    ]
  }, // fine data

  methods: {} //fine methods


}) //fine app
