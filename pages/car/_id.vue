<template>
  <div>
    <div
      v-if="$fetchState.pending"
      class="flex min-h-[90vh] items-center justify-center w-full h-full text-xl font-bold"
    >
      <p>Loading...</p>
    </div>
    <div
      v-else-if="$fetchState.error"
      class="flex min-h-[90vh] flex-col items-center space-y-4 justify-center w-full h-full text-xl font-bold"
    >
      <p class="text-sm">Error was found 😥</p>
      <button
        :disabled="$fetchState.pending"
        @click="$fetch"
        class="inline-flex items-center justify-center h-10 px-4 text-sm font-semibold tracking-tighter text-white bg-orange-600 shadow-sm rounded-xl focus:outline-none active:ring-transparent focus:ring-transparent disabled:cursor-not-allowed disabled:opacity-50"
      >
        Try again
      </button>
    </div>
    <div
      v-else
      class="flex pt-[0px] md:overflow-hidden flex-col md:flex-row md:items-start w-full md:min-h-[90vh] md:h-[90vh] md:max-h-[90vh]"
    >
      <div
        class="relative w-full md:w-[70%] md:max-h-[90vh] md:h-[90vh] md:min-h-[90vh] min-h-[40vh] max-h-[40vh]"
      >
        <img
          :src="selectedImage"
          class="absolute inset-0 object-cover w-full h-full"
          alt="images"
        />
        <button
          v-if="!disablePrev"
          @click="nextImage(-1)"
          class="h-8 w-8 rounded-full inline-flex items-center justify-center z-10 bg-gray-300 absolute left-6 top-[50%]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 h-3 rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <button
          v-if="!disableNext"
          @click="nextImage(1)"
          class="h-8 w-8 rounded-full inline-flex items-center justify-center z-10 bg-gray-300 absolute right-6 top-[50%]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 h-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div
        class="flex w-full md:w-[30%] no-scroll h-full md:overflow-y-auto flex-col space-y-2 px-6 py-6"
      >
        <button
          @click="back"
          class="py-2 focus:outline-none focus:ring-transparent md:py-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            />
          </svg>
        </button>
        <div class="flex items-center justify-center">
          <h5
            class="text-5xl font-medium tracking-tighter text-center capitalize"
          >
            {{ item.name }}
          </h5>
        </div>
        <h5
          class="pt-2 text-xs tracking-tight text-center text-gray-400 lowercase !first-letter:uppercase"
        >
          {{
            item.colors.length > 1
              ? "Disponible en plusieurs couleurs*"
              : "Disponible en 1 couleur*"
          }}
        </h5>
        <!-- information -->
        <div class="flex items-center justify-center w-full pt-12 space-x-8">
          <div
            class="flex flex-col w-[80px] items-center justify-center space-y-1"
          >
            <div class="flex items-center justify-center w-full space-x-1">
              <h5 class="text-3xl font-semibold tracking-tight text-center">
                {{ item.speed }}
              </h5>
              <h5
                class="text-xs font-medium tracking-tight text-center lowercase"
              >
                km/h
              </h5>
            </div>
            <h5 class="w-full text-xs font-medium tracking-tighter text-center">
              Top Vitesse
            </h5>
          </div>
          <div
            class="flex w-[80px] flex-col items-center justify-center space-y-1"
          >
            <div class="flex items-center justify-center w-full space-x-1">
              <h5 class="text-3xl font-semibold tracking-tight text-center">
                {{ item.time }}
              </h5>
              <h5
                class="text-xs font-medium tracking-tight text-center lowercase"
              >
                sec
              </h5>
            </div>
            <h5 class="w-full text-xs font-medium tracking-tighter text-center">
              0-100 km/h
            </h5>
          </div>
        </div>
        <div class="pt-6 text-xs font-light text-center">
          <article v-html="item.description" class="prose-sm prose">
            {{ item.description }}
          </article>
        </div>
        <p
          class="w-full pt-6 pb-2 text-2xl font-semibold tracking-tight text-center"
        >
          Couleurs
        </p>
        <div class="flex items-center justify-center w-full space-x-3">
          <button
            v-for="color in item.colors"
            :key="color.id"
            @click="changeColor(color)"
            class="w-10 h-10 p-2 transition-all duration-300 border-4 rounded-full shadow-sm focus:outline-none focus:ring-transparent"
            :style="{ backgroundColor: color.color.hex }"
          ></button>
        </div>
        <p
          vifactiveColor.color
          class="w-full pt-2 capitalize !first-letter:uppercase text-sm font-medium tracking-tight text-center"
        >
          {{ activeColor.color.name }}
        </p>
        <div class="flex items-center justify-center pt-10">
          <h5
            class="text-2xl font-medium tracking-tighter text-center capitalize"
          >
            {{ item.marque.name }}
          </h5>
        </div>
        <div class="flex flex-col items-center justify-center pt-5 space-y-3">
          <h5
            class="text-sm font-medium tracking-tighter text-center capitalize"
          >
            Commander votre {{ item.name }}
          </h5>
          <button
            @click="closeModal"
            class="inline-flex items-center justify-center w-full h-10 text-sm text-white uppercase bg-orange-600 rounded-full"
          >
            Continuer la Commande
          </button>
        </div>
      </div>
    </div>
    <add-commande
      :url="'/carCommande'"
      :selected-role="selectedRole"
      @refetch="refresh"
      @refreshData="refreshData"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Car - MumejoLog",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "homepage",
          name: "homepage",
          content: "Bienvenue sur MumejoLog",
        },
      ],
    };
  },
  data() {
    return {
      disableNext: false,
      disablePrev: true,
      activeColor: {},
      selectedRole: {},
      activeIndex: 0,
      images: [],
      selectedImage:
        "https://bafybeidp6wv4kgl2fwdwzplx2iny5wl55mw5yzm7bbvms3nbknn75xeys4.ipfs.dweb.link/temp/2022-04-08-17-51-50-5050-s4bpgeq-bmw.jpg",
      item: {},
      selectedRole: this.$route.params.id,
    };
  },
  async fetch() {
    const res = await this.$axios.get(`/cars/get/${this.$route.params.id}`);
    const { data } = res;
    const { cars } = data;

    if (cars) {
      this.item = cars;
      this.activeColor = cars.colors.length > 0 ? cars.colors[0] : {};
      this.selectedRole = {
        colorId: this.activeColor.color.id,
        carId: this.item.id,
      };
      cars.colors.forEach((element) => {
        if (element.images.length > 0) {
          element.images.forEach((item) => this.images.push(item.url));
          this.selectedImage = this.images[0];
        }
      });
    }
  },
  methods: {
    closeModal() {
      this.$store.dispatch("modal/toogleModalAddRole");
    },
    async refresh() {},
    modifyData() {
      this.$store.dispatch("modal/toogleModalAddRole");
    },
    refreshData() {
      this.selectedRole = {
        id: "",
        noms: "",
        adresse: "",
        email: "",
        tel: "",
      };
    },
    changeColor(color) {
      // if (color.images.length > 0) {
      //   this.selectedImage =
      //     color.images.length > 0
      //       ? color.images[0].url
      //       : "https://bafybeidp6wv4kgl2fwdwzplx2iny5wl55mw5yzm7bbvms3nbknn75xeys4.ipfs.dweb.link/temp/2022-04-08-17-51-50-5050-s4bpgeq-bmw.jpg";
      // }
      this.activeColor = color;
      this.disableNext = false;
      this.selectedRole = {
        colorId: this.activeColor.color.id,
        carId: this.item.id,
      };
    },
    back() {
      // this.$route.
      this.$router.go(-1);
    },
    nextImage(index) {
      if (this.images.length > 0)
        this.activeIndex =
          this.activeIndex + index < 0
            ? 0
            : this.activeIndex + index >= this.images.length
            ? this.images.length - 1
            : this.activeIndex + index;
      if (this.activeIndex === 0) this.disablePrev = true;
      else this.disablePrev = false;
      if (this.activeIndex === this.images.length - 1) this.disableNext = true;
      else this.disableNext = false;
      this.selectedImage = this.images[this.activeIndex];
    },
  },
};
</script>

<style scoped>
.no-scroll::-webkit-scrollbar {
  display: none;
}
</style>
