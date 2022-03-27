<template>
  <div
    class="w-full !bg-[#000000cc]"
    style="
      background: url(https://mumejolog.com//storage/banners/January2022/gfdlJheZpA9rQAUJAsaM.jpg)
        center;
    "
  >
    <div class="!bg-[#000000cc] w-full text-white">
      <div
        class="flex pt-[80px] flex-col mx-auto max-w-[555px] items-center justify-center w-full h-[40vh] px-4 space-y-[20px]"
      >
        <span
          class="w-full text-4xl font-semibold tracking-tight text-center lowercase first-letter:uppercase"
        >
          {{ title }}</span
        >

        <div
          class="flex items-center self-center justify-center w-full space-x-2"
        >
          <p class="text-sm font-light text-right">
            {{ $t("home") }}
          </p>
          <p class="text-sm font-light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </p>
          <p class="text-sm font-light lowercase first-letter:uppercase">
            {{ title }}
          </p>
        </div>
      </div>
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
  },
};
</script>
