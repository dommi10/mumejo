<template>
  <div
    class="bg-[#f9f9ff] hover-me py-12 h-auto hover:scale-100 min-h-[310px] w-full max-w-[500px] rounded-xl transition-all duration-300 flex px-8 flex-col items-start space-y-4"
  >
    <span
      class="text-[#222222] tracking-tight leading-5 font-semibold text-left text-lg"
      >{{ title }}</span
    >
    <span class="text-[#777777] tracking-tight font-light text-left text-sm">{{
      description
    }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "title ok",
    },
    description: {
      type: String,
      default: "description",
    },
  },
};
</script>

<style scoped>
.hover-me:hover {
  box-shadow: -14.142px 14.142px 20px 0px rgb(157 157 157 / 50%);
}
</style>
