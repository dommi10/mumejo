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

  // serverMiddleware:
  //   process.env.NODE_ENV === "production" ? [] : ["~/api/index.js"],
  // serverMiddleware: {
  //   "/api": "~/api/index.js",
  // },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~plugins/leaflet.js", ssr: false }],

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
          us: "contact us",
          cars: "cars",
          contact: "contact",
          welcomeTo: "welcome at",
          more: "more about us",
          intro:
            "We facilitate the purchase of your dream vehicles, and make your visa reservations whenever in the world in complete safety, and help you to make your reservations for rooms & residences, restaurants, etc. Choose MumejoLOg services for your satisfaction",
          serviceTitle: "What Services we offer to our clients",
          serviceDescription:
            "Who are in extremely love with eco friendly system.",
          service1Title: "mumejolog sale of vehicules service",
          service1Description:
            "The MumejoLog sale of vehicles service we helps you to buy and to sell vehicles. With the payment of 50% cash for the car, we brought you your car from Japan to whenever you are.",
          service2Title: "MumejoLog Visa reservation service",
          service2Description:
            "The MumejoLog Visa reservation service facilitates you to get visa from whenever you are to any destination in the world with the payment of 50% in cash of the visa requirements and charges.",
          service3Title:
            "MumejoLog Counseling vehicles and Visa inquiry service",
          service3Description:
            "The MumejoLog Counseling vehicles and Visa inquiry service advices the client how to get a car in Japan through our partners and getting a visa in a min time. We the best",
          service4Title: "MumejoLog Transport & logistic service",
          service4Description:
            "The MumejoLog Transport & logistic is serving you in transportation of your vehicles and any other goods from Kampala to the DRC (Goma-Kinshasa-Butembo-Beni-Bunia-Kisangani...)",
          who: "Who we are",
          whoDesc:
            "MumejoLog's importing your dream vehicles with the mission To facilitate the intermediary between vehicle buyers and manufacturing companies To help buyers place orders at the official site for the purchase of the vehicles of their choice To facilitate the importation of vehicles from the manufacturing house to the customer's destination in complete safety Allocation of vehicles to the public for such or such other event. MumejoLog Service's mission is to import vehicles to its customers by guaranteeing their safety. We also offer the service of obtaining visas for countries such as: China, the UAE, China, Canada, the USA, Belgium, France, etc. for your travels.. We also provide room & residence reservation services, restaurants, etc. for your destination.",
          thinkTitle: "What people think about us",
          thinkDescription: "Some testimonials from our satisfied customers.",
          think1Title: "JOHN from Kinshasa",
          think1Description:
            "MumejoLog offers the best auto import services! Experience shows that offering quality action over time is appreciated because few people have this expertise in the DRC.",
          think2Title: "JNATHAN MUHONGYA from DRC",
          think2Description:
            "MumejoLog offers the best auto import and visa services! Last time when I went to Dubai I enjoyed the whole organization for this respectable company. Experience shows that offering quality action over time is appreciated because few people have this expertise in the DRC.",
          think3Title: "ALLI from Uganda",
          think3Description:
            "MumejoLog offers the best auto import services! Experience shows that offering quality action over time is appreciated because few people have this expertise in the DRC.",
          think4Title: "Julien from Bukavu",
          think4Description:
            "Congratulations MumejoLog I got satisfied with my BMW 3",
          think5Title: "Eric",
          think5Description:
            "I appreciate the visa service of MumejoLog. Thank you MumejoLOg",
          think6Title: "NAOMIE",
          think6Description:
            "Thank you MumejoLog for your services I appreciate",
          serviceMessageTitle: "Experience Great services",
          inTouch: "get in touch with us",
          serviceDesc:
            "MumejoLog is a company that's offering brand new cars to clients and also facilitation them to get visa from everywhere in the world. If you choose MumejoLog today, as our client your safety is our good",
          patherns: "Our Partners",
          pathernsDesc: "Who are in extremely love with eco friendly system.",
          link1Title: "Quick links",
          link2Title: "Features",
          link3Title: "Resources",
          link4Title: "Follow Us",
          link5Title: "Newsletter",
          jobs: "jobs",
          brand: "Brand Assets",
          inverstisor: "Investor Relations",
          terms: "Terms of Service",
          social: "Social Media",
          info: "Stay update with our latest",
          email: "Enter email",
          copyright: "copyright",
          rights: "All rights reserved",
          team: "Experienced Team",
          send: "Send message",
        },
        fr: {
          home: "Acceuil",
          us: "Nous contacter",
          about: "a propos de nous",
          cars: "voitures",
          contact: "contact",
          welcomeTo: "Bienvenue à",
          more: "en savoir plus sur nous",
          intro:
            "Nous facilitons l'achat de vos véhicules de rêve, et effectuons vos réservations de visa n'importe où dans le monde en toute sécurité, et vous aidons à faire vos réservations de chambres & résidences, restaurants, etc. Choisissez les services MumejoLOg pour votre satisfaction",
          serviceTitle: "Quels services nous offrons à nos clients",
          serviceDescription:
            "Qui sont extrêmement amoureux du système écologique.",
          service1Title: "Service de vente de véhicules MumejoLog",
          service1Description:
            "Le service de vente de véhicules MumejoLog vous aide à acheter et à vendre des véhicules. Avec le paiement de 50 % en espèces pour la voiture, nous vous apportons votre voiture du Japon à tout moment.",
          service2Title: "Service de réservation Visa MumejoLog",
          service2Description:
            "Le service de réservation MumejoLog Visa vous facilite l'obtention d'un visa où que vous soyez vers n'importe quelle destination dans le monde avec le paiement de 50% en espèces des exigences et des frais de visa.",
          service3Title:
            "MumejoLog Véhicules de conseil et service de demande de visa",
          service3Description:
            "Les véhicules de conseil MumejoLog et le service de demande de visa conseillent le client sur la façon d'obtenir une voiture au Japon par l'intermédiaire de nos partenaires et d'obtenir un visa en un temps record. Nous les meilleurs",
          service4Title: "MumejoLog Transport & service logistique",
          service4Description:
            "Le MumejoLog Transport & logistique est à votre service dans le transport de vos véhicules et toutes autres marchandises de Kampala vers la RDC (Goma-Kinshasa-Butembo-Beni-Bunia-Kisangani...)",
          who: "Qui nous sommes",
          whoDesc:
            "MumejoLog importe vos véhicules de rêve avec pour mission De faciliter l'intermédiaire entre les acheteurs de véhicules et les entreprises de fabrication D'aider les acheteurs à passer des commandes sur le site officiel pour l'achat des véhicules de leur choix De faciliter l'importation de véhicules de la maison de fabrication à la destination du client en toute sécurité Affectation de véhicules au public pour tel ou tel autre événement. La mission de MumejoLog Service est d'importer des véhicules à ses clients en garantissant leur sécurité. Nous proposons également le service d'obtention de visas pour des pays tels que : la Chine, les Emirats Arabes Unis, la Chine, le Canada, les USA, la Belgique, la France, etc. pour vos déplacements. votre destination.",
          thinkTitle: "Ce que les gens pensent de nous",
          thinkDescription: "Quelques témoignages de nos client ssatisfaits.",
          think1Title: "JOHN de Kinshasa",
          think1Description:
            "MumejoLog offre les meilleurs services d'importation automatique ! L'expérience montre que proposer une action de qualité dans la durée est apprécié car peu de personnes ont cette expertise en RDC.",
          think2Title: "JNATHAN MUHONGYA de RDC",
          think2Description:
            "MumejoLog offre les meilleurs services d'import automatique et de visa ! La dernière fois que je suis allé à Dubaï, j'ai apprécié toute l'organisation de cette entreprise respectable. L'expérience montre que proposer une action de qualité dans la durée est apprécié car peu de personnes ont cette expertise en RDC.",
          think3Title: "ALLI d'Ouganda",
          think3Description:
            "MumejoLog offre les meilleurs services d'importation automatique ! L'expérience montre que proposer une action de qualité dans la durée est apprécié car peu de personnes ont cette expertise en RDC.",
          think4Title: "Julien de Bukavu",
          think4Description:
            "Félicitations MumejoLog je suis satisfait de ma BMW 3",
          think5Title: "Eric",
          think5Description:
            "J'apprécie le service des visas de MumejoLog. Merci MumejoLOg",
          think6Title: "NAOMIE",
          think6Description: "Merci MumejoLog pour vos services j'apprécie",
          serviceMessageTitle: "Découvrez d'excellents services",
          inTouch: "prenez contact avec nous",
          serviceDesc:
            "MumejoLog est une entreprise qui propose des voitures neuves à ses clients et leur permet également d'obtenir un visa partout dans le monde. Si vous choisissez MumejoLog aujourd'hui, en tant que client, votre sécurité est notre bien",
          patherns: "Nos partenaires",
          pathernsDesc: "Qui sont extrêmement amoureux du système écologique.",
          link1Title: "Liens rapides",
          link2Title: "Caractéristiques",
          link3Title: "Ressources",
          link4Title: "Suivez-nous",
          link5Title: "Bulletin",
          jobs: "Travaux",
          brand: "Actifs de marque",
          inverstisor: "Relations avec les investisseurs",
          terms: "Conditions d'utilisation",
          social: "Réseaux sociaux",
          info: "Restez à jour avec nos dernières",
          email: "Entrez l'email",
          copyright: "copyright",
          rights: "Tous les droits réservés",
          team: "Une équipe experimentée",
          send: "Envoyez le message",
        },
        sw: {
          home: "nyumbani",
          us: "tu",
          about: "kuhusu sisi",
          cars: "magari",
          contact: "wasiliana",
          welcomeTo: "karibu katika",
          more: "zahidi kuhusu sisi",
          intro:
            "Tunarahisisha ununuzi wa magari ya ndoto zako, na kuweka viza yako wakati wowote duniani kwa usalama kamili, na kukusaidia kuweka uhifadhi wako wa vyumba na makazi, mikahawa n.k. Chagua huduma za MumejoLOg ili ufurahie.",
          serviceTitle: "Ni Huduma gani tunazotoa kwa wateja wetu",
          serviceDescription: "Ambao wanapenda sana mfumo rafiki wa mazingira.",
          service1Title: "MumejoLog uuzaji wa huduma ya magari",
          service1Description:
            "Uuzaji wa huduma ya magari ya MumejoLog tunakusaidia kununua na kuuza magari. Kwa malipo ya 50% ya pesa taslimu ya gari, tulikuletea gari lako kutoka Japani hadi wakati wowote ulipo.",
          service2Title: "Huduma ya uhifadhi ya Visa ya MumejoLog",
          service2Description:
            "Huduma ya kuweka nafasi ya Visa ya MumejoLog hukuwezesha kupata visa kutoka wakati wowote unapoenda kwenye marudio yoyote duniani kwa malipo ya 50% taslimu ya mahitaji na ada za visa.",
          service3Title:
            "Magari ya Ushauri ya MumejoLog na huduma ya uchunguzi wa Visa",
          service3Description:
            "Magari ya Ushauri wa MumejoLog na huduma ya uchunguzi ya Visa humshauri mteja jinsi ya kupata gari nchini Japani kupitia washirika wetu na kupata visa baada ya dakika chache. Sisi bora",
          service4Title: "MumejoLog Usafiri na huduma ya vifaa",
          service4Description:
            "MumejoLog Transport & logistic inakuhudumia katika usafirishaji wa magari yako na bidhaa nyingine yoyote kutoka Kampala hadi DRC (Goma-Kinshasa-Butembo-Beni-Bunia-Kisangani...)",
          who: "Sisi ni nani",
          whoDesc:
            "MumejoLog inaagiza magari ya ndoto yako na dhamira Ili kuwezesha mpatanishi kati ya wanunuzi wa magari na kampuni za utengenezaji Kusaidia wanunuzi kuweka oda kwenye tovuti rasmi kwa ununuzi wa magari wanayochagua Kurahisisha uagizaji wa magari kutoka kwa nyumba ya utengenezaji hadi kwa mteja. kwa usalama kamili Ugawaji wa magari kwa umma kwa tukio kama hilo au lingine. Dhamira ya Huduma ya MumejoLog ni kuagiza magari kwa wateja wake kwa kuwahakikishia usalama wao. Pia tunatoa huduma ya kupata visa kwa nchi kama vile: Uchina, UAE, Uchina, Kanada, Marekani, Ubelgiji, Ufaransa, n.k. kwa safari zako. Pia tunatoa huduma za kuhifadhi vyumba na makazi, mikahawa, n.k. kwa unakoenda.",
          thinkTitle: "Watu wanafikiri nini juu yetu",
          thinkDescription: "Ushuuda ya wateja wetu",
          think1Title: "JOHN kutoka Kinshasa",
          think1Description:
            "MumejoLog inatoa huduma bora zaidi za kuagiza otomatiki! Uzoefu unaonyesha kuwa kutoa hatua za ubora kwa wakati kunathaminiwa kwa sababu watu wachache wana utaalamu huu nchini DRC.",
          think2Title: "JNATHAN MUHONGYA kutoka DRC",
          think2Description:
            "MumejoLog inatoa huduma bora zaidi za kuagiza otomatiki na visa! Mara ya mwisho nilipoenda Dubai nilifurahia shirika zima la kampuni hii yenye heshima. Uzoefu unaonyesha kuwa kutoa hatua za ubora kwa wakati kunathaminiwa kwa sababu watu wachache wana utaalamu huu nchini DRC.",
          think3Title: "ALLI Kutoka Uganda",
          think3Description:
            "MumejoLog inatoa huduma bora zaidi za kuagiza otomatiki! Uzoefu unaonyesha kuwa kutoa hatua za ubora kwa wakati kunathaminiwa kwa sababu watu wachache wana utaalamu huu nchini DRC.",
          think4Title: "Julien Kutoka Bukavu",
          think4Description: "Hongera MumejoLog Nimeridhika na BMW 3 yangu",
          think5Title: "Eric",
          think5Description:
            "Ninashukuru huduma ya visa ya MumejoLog. Asante MumejoLOG",
          think6Title: "NAOMIE",
          think6Description: "Asante MumejoLog kwa huduma zako nashukuru",
          serviceMessageTitle: "Pata huduma bora",
          inTouch: "wasiliana",
          serviceDesc:
            "MumejoLog ni kampuni inayotoa magari mapya kwa wateja na pia kuwawezesha kupata visa kutoka kila mahali duniani. Ukichagua MumejoLog leo, kama mteja wetu usalama wako ni mzuri wetu",
          patherns: "Washirika wetu",
          pathernsDesc: "Ambao wanapenda sana mfumo rafiki wa mazingira.",
          link1Title: "Viungo vya haraka",
          link2Title: "Vipengele",
          link3Title: "Rasilimali",
          link4Title: "Tufuate",
          link5Title: "Jarida",
          jobs: "Ajira",
          brand: "Mali ya Biashara",
          inverstisor: "Mahusiano ya Wawekezaji",
          terms: "Masharti ya Huduma",
          social: "Wacha tuwe wa kijamii",
          info: "Endelea kusasishwa na habari zetu mpya",
          email: "Weka barua pepe",
          copyright: "Hakimiliki Haki zote zimehifadhiwa",
          rights: "Haki zote zimehifadhiwa",
          team: "Team ya washuja",
          send: "Tuma baruwa",
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
