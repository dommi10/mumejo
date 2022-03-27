<template>
  <div>
    <!-- <notification /> -->
    <div class="relative min-w-full min-h-screen">
      <Navbar />
      <main class="overflow-y-auto block mt-[50px] lg:mt-[80px]">
        <Nuxt />
      </main>
      <FooterPage />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "~/components/Navbar.vue";
import FooterPage from "~/components/FooterPage.vue";
export default Vue.extend({
  components: { Navbar, FooterPage },
});
</script>
