<template>
  <div class="w-full border-t border-b h-[260px] flex space-x-2 items-start">
    <div
      class="relative py-4 min-w-[252px] h-full w-[252px] max-w-[252px] rounded-md"
    >
      <img
        class="w-full h-full rounded-md object-fit"
        :src="
          imgUrl === ''
            ? 'https://bafybeidp6wv4kgl2fwdwzplx2iny5wl55mw5yzm7bbvms3nbknn75xeys4.ipfs.dweb.link/temp/2022-04-08-17-51-50-5050-f4_06ce-avatar.jpg'
            : imgUrl
        "
        alt="image load"
      />
    </div>
    <div class="flex relative py-4 flex-col h-[260px] space-y-1">
      <h2
        class="text-xl capitalize font-bold tracking-tighter line-clamp-1 !first-letter:uppercase"
      >
        {{ title }}
      </h2>
      <h2
        class="text-xs font-medium tracking-tighter text-opacity-50 uppercase"
      >
        Description :
      </h2>
      <p
        v-html="description"
        class="overflow-hidden text-xs font-light prose text-left lowercase line-clamp-6 text-ellipsis first-letter:uppercase"
      ></p>
      <div class="absolute bottom-0 pb-4">
        <nuxt-link
          :to="url"
          class="inline-flex items-center justify-center w-[150px] font-semibold uppercase h-10 text-sm text-white bg-orange-600 rounded-full seft-end"
        >
          voir plus
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Tesla",
    },
    description: {
      type: String,
      default: "description",
    },
    imgUrl: {
      type: String,
      default:
        "https://bafybeidp6wv4kgl2fwdwzplx2iny5wl55mw5yzm7bbvms3nbknn75xeys4.ipfs.dweb.link/temp/2022-04-08-17-51-50-5050-f4_06ce-avatar.jpg",
    },
    url: {
      type: String,
      default: "/",
    },
  },
};
</script>
