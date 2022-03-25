<template>
  <div class="flex items-center justify-center w-full h-full">
    <Landing />
  </div>
</template>

<script>
import Landing from "~/components/Landing.vue";
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
  components: { Landing },
};
</script>
