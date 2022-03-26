<template>
  <div class="h-auto pt-8 pb-6 bg-white">
    <div class="flex flex-col w-full h-full max-w-screen-lg px-4 mx-auto">
      <div
        class="flex flex-col items-center w-full max-w-screen-lg mx-auto space-y-8"
      >
        <span
          class="text-[#222222] tracking-tight md:leading-5 font-semibold text-center text-4xl"
          >{{ $t("patherns") }}</span
        >
        <span
          class="text-[#777777] tracking-tight font-light text-center text-sm"
          >{{ $t("pathernsDesc") }}</span
        >
      </div>

      <div class="flex flex-col w-full pt-12 md:flex-row md:space-x-4">
        <img
          src="~/assets/images/bf.png"
          width="300"
          class="object-contain h-20 xl:w-[300px]"
        />
        <img
          src="~/assets/images/auto.webp"
          width="300"
          class="object-contain h-20 xl:w-[300px]"
        />
        <img
          src="~/assets/images/autodel.png"
          width="300"
          class="object-contain h-20 xl:w-[300px]"
        />
        <img
          src="~/assets/images/sbt.png"
          width="300"
          class="object-contain h-20 xl:w-[300px]"
        />
      </div>
    </div>
  </div>
</template>
<script>
import AviItem from "./AviItem.vue";
export default {};
</script>
