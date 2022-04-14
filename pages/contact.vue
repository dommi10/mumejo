<template>
  <div class="flex flex-col items-center justify-center w-full h-full">
    <PageLeading :title="title" />
    <Contact />
  </div>
</template>

<script>
import PageLeading from "~/components/PageLeading.vue";
import Contact from "~/components/Contact.vue";
import "leaflet/dist/leaflet.css";

export default {
  head() {
    return {
      title: "Contact - MumejoLog",
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
  components: { PageLeading, Contact },
  data() {
    return {
      title: this.$t("us"),
    };
  },
};
</script>
