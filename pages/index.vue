<template>
  <div class="flex flex-col items-center justify-center w-full h-full">
    <Landing />
    <Service />
    <About />
    <Banner />
    <Avis />
    <Touch />
    <Sponsor />
  </div>
</template>

<script>
import Landing from "~/components/Landing.vue";
import Service from "~/components/Service.vue";
import About from "~/components/About.vue";
import Banner from "~/components/Banner.vue";
import Avis from "~/components/Avis.vue";
import Touch from "~/components/Touch.vue";
import Sponsor from "../components/Sponsor.vue";
export default {
  head() {
    return {
      title: "Home - Mumejo Log",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "homepage",
          name: "homepage",
          content:
            "Bienvenue sur Finup, jamais gérer ses activités n'as jamais été aussi facile",
        },
      ],
    };
  },
  components: { Landing, Service, About, Banner, Touch, Sponsor },
};
</script>
