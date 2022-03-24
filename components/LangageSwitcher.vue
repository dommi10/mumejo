<template>
  <div class="z-20 flex items-start justify-between">
    <button
      class="flex items-center justify-between focus:outline-none"
      @click="showLangageDropdown"
    >
      <div class="flex items-center">
        <country-flag
          :country="
            $i18n.locale === 'fr' ? 'fr' : $i18n.locale === 'sw' ? 'CD' : 'us'
          "
        />
        <span class="text-sm font-semibold capitalize">{{
          $i18n.locale === "fr"
            ? "Français "
            : $i18n.locale === "sw"
            ? "Swahili"
            : "English"
        }}</span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
    <div
      v-if="isOpen"
      class="absolute text-black z-40 flex flex-col items-start h-auto pt-4 pb-2 w-[240px] rounded-md divide-y shadow-md mt-12"
    >
      <nuxt-link
        class="flex items-center w-full"
        :to="switchLocalePath('en')"
        @click.native="showLangageDropdown"
      >
        <country-flag country="us" />
        <span
          class="text-smcapitalize"
          :class="{ 'font-semibold': $i18n.locale === 'en' }"
        >
          English</span
        >
      </nuxt-link>
      <nuxt-link
        class="flex items-center w-full"
        :to="switchLocalePath('fr')"
        @click.native="showLangageDropdown"
      >
        <country-flag country="fr" />
        <span
          class="text-smcapitalize"
          :class="{ 'font-semibold': $i18n.locale === 'fr' }"
        >
          Français
        </span>
      </nuxt-link>
      <nuxt-link
        class="flex items-center w-full"
        :to="switchLocalePath('sw')"
        @click.native="showLangageDropdown"
      >
        <country-flag country="CD" />
        <span
          class="text-smcapitalize"
          :class="{ 'font-semibold': $i18n.locale === 'sw' }"
        >
          Swahili
        </span>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import CountryFlag from "vue-country-flag";
export default {
  components: { CountryFlag },
  props: {
    openOrClose: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  watch: {
    openOrClose(val) {
      this.isOpen = val;
    },
  },
  methods: {
    showLangageDropdown() {
      this.isOpen = !this.isOpen;
      this.$emit("showLangageDropdown", this.isOpen);
    },
  },
};
</script>
