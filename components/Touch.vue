<template>
  <div
    class="!bg-[#000000cc] w-full min-h-[30vh] my-4"
    style="background: url(calc.jpg) center"
  >
    <div class="!bg-[#000000cc] w-full text-white">
      <div
        class="flex flex-col mx-auto text-center items-center justify-center w-full max-w-[800px] min-h-[30vh] pt-6 pb-4 space-y-[10px]"
      >
        <span
          class="w-full text-4xl font-semibold tracking-tight text-center lowercase first-letter:uppercase"
        >
          {{ $t("serviceMessageTitle") }}</span
        >
        <p class="w-full pb-5 text-sm font-light text-center">
          {{ $t("serviceDesc") }}
        </p>

        <NuxtLink
          class="bg-[#fab700] self-center border-transparent border hover:text-[#fab700] hover:bg-transparent hover:border-[#fab700] text-sm transition duration-500 font-medium px-[40px] leading-[40px] uppercase"
          :to="localePath('/')"
        >
          {{ $t("inTouch") }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import BannerItem from "./BannerItem.vue";
export default { components: { BannerItem } };
</script>
