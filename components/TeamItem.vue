<template>
  <div
    class="bg-[#f9f9ff] hover-me pb-12 h-auto hover:scale-100 min-h-[310px] w-full max-w-[500px] rounded-xl transition-all duration-300 flex flex-col items-start space-y-4"
  >
    <img :src="imageUrl" width="800" class="object-cover w-full h-[300px]" />
    <span
      class="text-[#222222] w-full px-8 tracking-tight leading-5 font-semibold text-center capitalize text-lg"
      >{{ title }}</span
    >
    <span
      class="text-[#777777] px-8 tracking-tight lowercase first-letter:capitalize font-light text-center w-full text-sm"
      >{{ description }}</span
    >
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
    imageUrl: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  },
};
</script>

<style scoped>
.hover-me:hover {
  box-shadow: -14.142px 14.142px 20px 0px rgb(157 157 157 / 50%);
}
</style>
