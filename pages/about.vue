<template>
  <div class="flex flex-col items-center justify-center w-full h-full">
    <PageLeading :title="title" />

    <About :boutonActive="false" />
    <Service />
    <Banner />
    <Team />
    <Touch />
    <Sponsor />
  </div>
</template>

<script>
import About from "~/components/About.vue";
import Banner from "~/components/Banner.vue";
import Team from "~/components/Team.vue";
import Touch from "~/components/Touch.vue";
import Sponsor from "../components/Sponsor.vue";
import PageLeading from "~/components/PageLeading.vue";
import Service from "~/components/Service.vue";
export default {
  head() {
    return {
      title: "About - MumejoLog",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "homepage",
          name: "homepage",
          content: "Bienvenue sur MumejoLog",
        },
      ],
    };
  },
  components: { About, Banner, Touch, Sponsor, PageLeading, Team, Service },
  data() {
    return {
      title: this.$t("about"),
    };
  },
};
</script>
