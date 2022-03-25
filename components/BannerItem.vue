<template>
  <div
    class="w-full max-w-[500px] h-[10vh] md:h-[20vh] rounded-xl flex px-8 flex-col items-center md:items-start justify-center space-y-2"
  >
    <span
      class="text-[#222222] anime-couter tracking-tight leading-5 font-semibold text-left text-3xl md:text-5xl"
      >{{ numbers }}</span
    >
    <span
      class="text-[#222222] capitalize tracking-tight leading-5 text-left text-lg"
      >{{ description }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    numbers: {
      type: String,
      default: "1000",
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
