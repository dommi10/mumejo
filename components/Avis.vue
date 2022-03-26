<template>
  <div class="h-auto bg-white pt-14">
    <div class="flex flex-col w-full h-full max-w-screen-lg px-4 mx-auto">
      <div
        class="flex flex-col items-center w-full max-w-screen-lg mx-auto space-y-8"
      >
        <span
          class="text-[#222222] tracking-tight md:leading-5 font-semibold text-center text-4xl"
          >{{ $t("thinkTitle") }}</span
        >
        <span
          class="text-[#777777] tracking-tight font-light text-center text-sm"
          >{{ $t("thinkDescription") }}</span
        >
      </div>

      <div
        class="grid w-full h-auto grid-cols-1 py-12 gap-y-2 md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-8"
      >
        <AviItem
          :title="$t('think1Title')"
          :description="$t('think1Description')"
          :stars="4"
        />
        <AviItem
          :title="$t('think2Title')"
          :description="$t('think2Description')"
          :stars="3"
        />
        <AviItem
          :title="$t('think3Title')"
          :description="$t('think3Description')"
          :stars="5"
        />
        <AviItem
          :title="$t('think4Title')"
          :description="$t('think4Description')"
          :stars="4"
        />
        <AviItem
          :title="$t('think5Title')"
          :description="$t('think2Description')"
          :stars="3"
        />
        <AviItem
          :title="$t('think6Title')"
          :description="$t('think3Description')"
          :stars="5"
        />
      </div>
    </div>
  </div>
</template>
<script>
import AviItem from "./AviItem.vue";
export default {};
</script>
