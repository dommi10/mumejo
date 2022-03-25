<template>
  <div class="h-auto bg-white pt-14">
    <div class="flex flex-col w-full h-full px-4">
      <div
        class="flex flex-col items-center w-full max-w-screen-lg mx-auto space-y-8"
      >
        <span
          class="text-[#222222] tracking-tight md:leading-5 font-semibold text-center text-4xl"
          >{{ $t("serviceTitle") }}</span
        >
        <span
          class="text-[#777777] tracking-tight font-light text-center text-sm"
          >{{ $t("serviceDescription") }}</span
        >
      </div>

      <div
        class="grid w-full h-auto grid-cols-1 py-12 gap-y-2 md:grid-cols-2 lg:grid-cols-4 md:gap-4 lg:gap-8"
      >
        <ServiceItem
          :title="$t('service1Title')"
          :description="$t('service1Description')"
        />
        <ServiceItem
          :title="$t('service2Title')"
          :description="$t('service2Description')"
        />
        <ServiceItem
          :title="$t('service3Title')"
          :description="$t('service3Description')"
        />
        <ServiceItem
          :title="$t('service4Title')"
          :description="$t('service4Description')"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ServiceItem from "./ServiceItem.vue";
export default {};
</script>
