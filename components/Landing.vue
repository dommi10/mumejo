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
        class="flex flex-col -mt-16 mx-auto text-left items-center justify-center w-full max-w-[555px] max-h-[731px] min-h-screen px-4 space-y-[20px]"
      >
        <span class="tracking-[2px] w-full uppercase font-normal">{{
          $t("welcomeTo")
        }}</span>
        <span
          class="w-full text-5xl font-semibold tracking-tight text-left uppercase"
          >MUMEJO LOG</span
        >
        <p class="w-full pb-5 text-sm font-light text-left">
          {{ $t("intro") }}
        </p>

        <NuxtLink
          class="bg-[#fab700] self-start border-transparent border hover:text-[#fab700] hover:bg-transparent hover:border-[#fab700] text-sm transition duration-500 font-medium px-[40px] leading-[40px] uppercase"
          :to="localePath('/')"
        >
          {{ $t("more") }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script></script>
