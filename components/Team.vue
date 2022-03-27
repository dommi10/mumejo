<template>
  <div class="h-auto bg-white pt-14">
    <div class="flex flex-col w-full h-full max-w-screen-lg px-4 mx-auto">
      <div
        class="flex flex-col items-center w-full max-w-screen-lg mx-auto space-y-8"
      >
        <span
          class="text-[#222222] tracking-tight md:leading-5 font-semibold text-center text-4xl"
          >{{ $t("team") }}</span
        >
      </div>

      <div
        class="grid w-full h-auto grid-cols-1 py-12 gap-y-2 md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-8"
      >
        <TeamItem
          v-for="item in teams"
          :key="item.title"
          :title="item.title"
          :description="item.description"
          :imageUrl="
            item.imageUrl
              ? item.imageUrl
              : 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=456&q=80'
          "
        />
      </div>
    </div>
  </div>
</template>
<script>
import TeamItem from "./TeamItem.vue";
export default {
  data() {
    return {
      teams: [
        {
          title: "Mumejo",
          description: "Managing Director (Sales) of MumejoLog",
          imageUrl: "/general.jpg",
        },
        {
          title: "Staff MumejoLog",
          description: "Creative promotion Directors (Project)",
          imageUrl: "/staff.jpg",
        },
        {
          title: "Master Mike",
          description: "Senior Core Developer",
          imageUrl: "",
        },
      ],
    };
  },
};
</script>
