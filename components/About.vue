<template>
  <div
    class="grid w-full min-h-[50vh] pb-10 grid-cols-1 md:gap-8 md:grid-cols-2"
  >
    <div class="w-full h-full">
      <img
        src="~/assets/images/bmw.jpg"
        width="800"
        class="object-center w-full h-full"
      />
    </div>
    <div
      class="flex flex-col mx-auto text-left items-center justify-center w-full max-w-[555px] px-4 space-y-[20px]"
    >
      <span
        class="w-full pt-5 text-3xl font-semibold tracking-tight text-left uppercase md:pt-0 md:text-5xl"
      >
        {{ $t("who") }}</span
      >
      <p class="w-full pb-5 text-sm font-light text-left">
        {{ $t("whoDesc") }}
      </p>

      <NuxtLink
        class="bg-[#fab700] self-start border-transparent border hover:text-[#fab700] hover:bg-transparent hover:border-[#fab700] text-sm transition duration-500 font-medium px-[40px] leading-[40px] uppercase"
        :to="localePath('/')"
      >
        {{ $t("more") }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {};
</script>
