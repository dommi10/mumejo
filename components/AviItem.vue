<template>
  <div
    class="bg-[#f9f9ff] hover-me pb-6 pt-8 !max-h-fit hover:scale-100 w-full max-w-[500px] rounded-xl transition-all duration-300 flex px-8 flex-col items-start space-y-4"
  >
    <span
      class="text-[#222222] w-full tracking-tight leading-5 font-semibold text-center text-lg"
      >{{ title }}</span
    >
    <span
      class="text-[#777777] w-full tracking-tight font-light text-center text-sm"
      >{{ description }}</span
    >
    <div class="flex max-w-xs pt-4 mx-auto space-x-1 text-gray-400">
      <svg
        v-for="item in 5"
        :key="item"
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        :class="{ 'text-orange-400': item <= stars }"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>
    </div>
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
    stars: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
.hover-me:hover {
  box-shadow: -14.142px 14.142px 20px 0px rgb(157 157 157 / 50%);
}
</style>
