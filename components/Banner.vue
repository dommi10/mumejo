<template>
  <div class="bg-[#fab700] w-full min-h-[20vh] my-4">
    <div
      class="grid h-full max-w-screen-lg grid-cols-1 gap-4 py-4 mx-auto md:pt-0 md:grid-cols-4"
    >
      <BannerItem numbers="1200" description="cars sold" />
      <BannerItem numbers="347" description="clients served" />
      <BannerItem numbers="9" description="partherns" />
      <BannerItem numbers="16" description="professionnals" />
    </div>
  </div>
</template>

<script>
import BannerItem from "./BannerItem.vue";
export default { components: { BannerItem } };
</script>
