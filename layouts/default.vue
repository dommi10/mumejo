<template>
  <div>
    <!-- <notification /> -->
    <div class="relative min-w-full min-h-screen">
      <Navbar />
      <main class="overflow-y-auto block mt-[50px] lg:mt-[80px]">
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "~/components/Navbar.vue";
export default Vue.extend({
  components: { Navbar },
});
</script>
