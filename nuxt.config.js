export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "mumejolog",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxt/postcss8",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },
  i18n: {
    locales: [
      {
        code: "en",
        iso: "en-US",
      },
      {
        code: "fr",
        iso: "fr-FR",
      },
      {
        code: "sw",
        iso: "swa-TZ",
      },
    ],
    defaultLocale: "fr",
    vueI18n: {
      fallbackLocale: "fr",
      messages: {
        en: {
          home: "home",
          about: "about us",
          cars: "cars",
          contact: "contact",
          welcomeTo: "welcome at",
          more: "more about us",
          intro:
            "We facilitate the purchase of your dream vehicles, and make your visa reservations whenever in the world in complete safety, and help you to make your reservations for rooms & residences, restaurants, etc. Choose MumejoLOg services for your satisfaction",
        },
        fr: {
          home: "Acceuil",
          about: "a propos de nous",
          cars: "voitures",
          contact: "contact",
          welcomeTo: "Bienvenue à",
          more: "en savoir plus sur nous",
          intro:
            "Nous facilitons l'achat de vos véhicules de rêve, et effectuons vos réservations de visa n'importe où dans le monde en toute sécurité, et vous aidons à faire vos réservations de chambres & résidences, restaurants, etc. Choisissez les services MumejoLOg pour votre satisfaction",
        },
        sw: {
          home: "nyumbani",
          about: "kuhusu sisi",
          cars: "magari",
          contact: "wasiliana",
          welcomeTo: "karibu katika",
          more: "zahidi kuhusu sisi",
          intro:
            "Tunarahisisha ununuzi wa magari ya ndoto zako, na kuweka viza yako wakati wowote duniani kwa usalama kamili, na kukusaidia kuweka uhifadhi wako wa vyumba na makazi, mikahawa n.k. Chagua huduma za MumejoLOg ili ufurahie.",
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  tailwindcss: {
    // Options
  },
};
