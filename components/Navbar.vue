<template>
  <nav
    class="w-full px-4 z-50 h-[50px] lg:h-[80px] overflow-hidden bg-[#01060B] fixed top-0 border-b shadow-md text-white border-gray-700"
  >
    <!-- desktop -->
    <ul
      class="hidden fixed top-0 lg:flex items-center text-sm font-semibold 2xl:text-base justify-between leading-[1.25rem] tracking-[-0.015em] h-[80px] w-full bg-[#01060B]"
    >
      <ul
        class="flex items-center justify-between w-full max-w-screen-lg px-4 mx-auto"
      >
        <li class="flex items-center justify-center">
          <NuxtLink :to="localePath('/')">
            <img
              src="~/assets/images/logomobile.png"
              width="300"
              class="object-contain h-12 xl:w-[150px]"
            />
          </NuxtLink>
        </li>
        <ul
          class="flex items-center justify-center space-x-4 text-xs uppercase"
        >
          <li class="transition duration-300 hover:font-bold">
            <NuxtLink :to="localePath('/')">{{ $t("home") }}</NuxtLink>
          </li>
          <li class="hover:font-bold">
            <NuxtLink :to="localePath('/about')">{{ $t("about") }}</NuxtLink>
          </li>
          <li class="hover:font-bold">
            <NuxtLink :to="localePath('/cars')">{{ $t("cars") }}</NuxtLink>
          </li>
          <li class="hover:font-bold">
            <NuxtLink :to="localePath('/contact')">{{
              $t("contact")
            }}</NuxtLink>
          </li>
          <li class="-mt-2">
            <langage-switcher
              :open-or-close="showLangages"
              @showLangageDropdown="showLangageDropdown"
            />
          </li>
        </ul>
      </ul>
    </ul>
    <!-- mobile -->
    <ul
      class="flex lg:hidden items-center justify-between leading-[1.25rem] font-semibold tracking-[-0.015em] h-[50px] fixed top-0 bg-[#01060B] w-full"
    >
      <ul
        class="flex items-center justify-between w-full py-2 mx-auto max-w-screen-2xl"
      >
        <li class="flex items-center justify-center">
          <NuxtLink :to="localePath('/')">
            <img
              src="~/assets/images/logomobile.png"
              width="300"
              class="object-contain h-12"
            />
          </NuxtLink>
        </li>
        <ul class="px-4">
          <button class="px-4 focus:outline-none" @click="showMenu">
            <svg
              v-if="menuOpen"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="transition-all duration-500 feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <svg
              v-if="!menuOpen"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="transition-all duration-500 feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <transition name="slide-fade">
            <ul
              v-if="menuOpen"
              class="absolute uppercase w-full min-h-[600px] z-10 top-[50px] left-0 py-4 flex flex-col space-y-2 px-3 transition duration-300 bg-[#000000cc]"
            >
              <ul class="flex flex-col items-start w-full pt-2">
                <li class="w-full py-4 border-b">
                  <NuxtLink :to="localePath('/')">{{ $t("home") }}</NuxtLink>
                </li>
                <li class="w-full py-4 border-b">
                  <NuxtLink :to="localePath('/about')">{{
                    $t("about")
                  }}</NuxtLink>
                </li>
                <li class="w-full py-4 border-b">
                  <NuxtLink :to="localePath('/cars')">{{
                    $t("cars")
                  }}</NuxtLink>
                </li>
                <li class="w-full py-4 border-b">
                  <NuxtLink :to="localePath('/contact')">{{
                    $t("contact")
                  }}</NuxtLink>
                </li>
                <li class="flex items-center w-full py-4 space-x-4 border-b">
                  <langage-switcher
                    :open-or-close="showLangages"
                    @showLangageDropdown="showLangageDropdown"
                  />
                </li>
              </ul>
            </ul>
          </transition>
        </ul>
      </ul>
    </ul>
  </nav>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      showLangages: false,
      menuOpen: false,
    };
  },
  // async fetch() {
  //   const data = await this.$axios.get("/api/team");
  //   console.log(data);
  // },
  methods: {
    showLangageDropdown(value) {
      this.showLangages = value;
    },
    showMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
