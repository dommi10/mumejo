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
      class="flex pt-[0px] overflow-hidden items-start w-full h-[90vh]"
    >
      <div class="relative w-[70%] h-full">
        <img
          :src="selectedImage"
          class="object-cover w-full h-full"
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
        class="flex w-[30%] no-scroll h-full overflow-y-auto flex-col space-y-2 px-6 py-10"
      >
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
        <p class="pt-6 text-xs font-light text-center">
          * {{ item.description }}
        </p>
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
            class="w-10 h-10 p-2 transition-all duration-300 border-4 rounded-full shadow-sm"
            :style="{ backgroundColor: color.color.hex }"
          ></button>
        </div>
        <p
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
            class="inline-flex items-center justify-center w-full h-10 text-sm text-white uppercase bg-orange-600 rounded-full"
          >
            Continuer la Commande
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { throws } from "assert";

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
      activeColor: {
        color: {
          id: "2mvuseh2qf6l14ozgrq86n53q4ud8pdn2tr8",
          name: "jaune mauve",
          hex: "#fffff9",
          enabled: true,
          createdAt: "2022-04-08T17:48:02.902Z",
        },
        images: [
          {
            id: "6e1vtw1ybk6ocz2fkw0_qdjtmqx9gi5uq98j",
            type: "INTERIOR",
            url: "https://bafybeidp6wv4kgl2fwdwzplx2iny5wl55mw5yzm7bbvms3nbknn75xeys4.ipfs.dweb.link/temp/2022-04-08-17-51-50-5050-f4_06ce-avatar.jpg",
            colorsOnCarsCarId: "nzfst8v9s283oh3dvahegn5az2cj8you0hdo",
            colorsOnCarsColorId: "2mvuseh2qf6l14ozgrq86n53q4ud8pdn2tr8",
          },
          {
            id: "sie47w_o0_wlwrxqcxx63bjoskelhxktxcxn",
            type: "INTERIOR",
            url: "https://bafybeidp6wv4kgl2fwdwzplx2iny5wl55mw5yzm7bbvms3nbknn75xeys4.ipfs.dweb.link/temp/2022-04-08-17-51-50-5050-s4bpgeq-bmw.jpg",
            colorsOnCarsCarId: "nzfst8v9s283oh3dvahegn5az2cj8you0hdo",
            colorsOnCarsColorId: "2mvuseh2qf6l14ozgrq86n53q4ud8pdn2tr8",
          },
        ],
      },
      activeIndex: 0,
      selectedImage:
        "https://bafybeidp6wv4kgl2fwdwzplx2iny5wl55mw5yzm7bbvms3nbknn75xeys4.ipfs.dweb.link/temp/2022-04-08-17-51-50-5050-s4bpgeq-bmw.jpg",
      item: {
        id: "nzfst8v9s283oh3dvahegn5az2cj8you0hdo",
        name: "Tesla Y 2",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis accusantium qui iusto cumque, ducimus voluptatum nisi sed soluta quas aut voluptatibus incidunt minus numquam veritatis corporis optio, dignissimos quasi exercitationem?",
        marqueId: "7rwwxa17u_m9bt175xdj8hbklkvlomjowal0",
        speed: 230,
        time: 100,
        enabled: true,
        createdAt: "2022-04-08T13:36:20.292Z",
        colors: [
          {
            carId: "nzfst8v9s283oh3dvahegn5az2cj8you0hdo",
            colorId: "2mvuseh2qf6l14ozgrq86n53q4ud8pdn2tr8",
            assignedAt: "2022-04-08T17:51:52.247Z",
            images: [
              {
                id: "6e1vtw1ybk6ocz2fkw0_qdjtmqx9gi5uq98j",
                type: "INTERIOR",
                url: "https://bafybeidp6wv4kgl2fwdwzplx2iny5wl55mw5yzm7bbvms3nbknn75xeys4.ipfs.dweb.link/temp/2022-04-08-17-51-50-5050-f4_06ce-avatar.jpg",
                colorsOnCarsCarId: "nzfst8v9s283oh3dvahegn5az2cj8you0hdo",
                colorsOnCarsColorId: "2mvuseh2qf6l14ozgrq86n53q4ud8pdn2tr8",
              },
              {
                id: "sie47w_o0_wlwrxqcxx63bjoskelhxktxcxn",
                type: "INTERIOR",
                url: "https://bafybeidp6wv4kgl2fwdwzplx2iny5wl55mw5yzm7bbvms3nbknn75xeys4.ipfs.dweb.link/temp/2022-04-08-17-51-50-5050-s4bpgeq-bmw.jpg",
                colorsOnCarsCarId: "nzfst8v9s283oh3dvahegn5az2cj8you0hdo",
                colorsOnCarsColorId: "2mvuseh2qf6l14ozgrq86n53q4ud8pdn2tr8",
              },
            ],
            color: {
              id: "2mvuseh2qf6l14ozgrq86n53q4ud8pdn2tr8",
              name: "jaune mauve",
              hex: "#fffff9",
              enabled: true,
              createdAt: "2022-04-08T17:48:02.902Z",
            },
          },
          {
            carId: "nzfst8v9s283oh3dvahegn5az2cj8you0hdo",
            colorId: "c_8qxdhxxvix1phwvg1b4hzs36j5mk1jr88p",
            assignedAt: "2022-04-08T13:36:20.292Z",
            images: [
              {
                id: "00ubst2pgnhavhf5w_db022oukql6uxjv6ki",
                type: "INTERIOR",
                url: "https://bafybeihuu6exv5dhe4cddu4go36zkvqil2vtthpp4okm5vzsqspypud6am.ipfs.dweb.link/temp/2022-04-08-17-23-46-4646-p389xlm-bmw.jpg",
                colorsOnCarsCarId: "nzfst8v9s283oh3dvahegn5az2cj8you0hdo",
                colorsOnCarsColorId: "c_8qxdhxxvix1phwvg1b4hzs36j5mk1jr88p",
              },
              {
                id: "28hk8vxdnsacqucjeiwmf_8yt_gnv_3vruzg",
                type: "INTERIOR",
                url: "https://bafybeiftddolnuac5v7xff55lmvhz2r2ynt36hmmvt7gvymqfgcwdqneqa.ipfs.dweb.link/temp/2022-04-08-16-35-54-5454-xexo0rp-bmw.jpg",
                colorsOnCarsCarId: "nzfst8v9s283oh3dvahegn5az2cj8you0hdo",
                colorsOnCarsColorId: "c_8qxdhxxvix1phwvg1b4hzs36j5mk1jr88p",
              },
            ],
            color: {
              id: "c_8qxdhxxvix1phwvg1b4hzs36j5mk1jr88p",
              name: "white",
              hex: "#ffffff",
              enabled: true,
              createdAt: "2022-04-07T13:39:38.019Z",
            },
          },
          {
            carId: "nzfst8v9s283oh3dvahegn5az2cj8you0hdo",
            colorId: "htmmlc3m6re9uurla5expsx1lvct962wwrz5",
            assignedAt: "2022-04-08T13:36:20.292Z",
            images: [
              {
                id: "p2nk4qcjds1jlr90tx0atgdl72inu4_2opl4",
                type: "INTERIOR",
                url: "https://bafybeiftddolnuac5v7xff55lmvhz2r2ynt36hmmvt7gvymqfgcwdqneqa.ipfs.dweb.link/temp/2022-04-08-16-35-54-5454-08737ne-avatar.jpg",
                colorsOnCarsCarId: "nzfst8v9s283oh3dvahegn5az2cj8you0hdo",
                colorsOnCarsColorId: "htmmlc3m6re9uurla5expsx1lvct962wwrz5",
              },
            ],
            color: {
              id: "htmmlc3m6re9uurla5expsx1lvct962wwrz5",
              name: "black light",
              hex: "#00000f",
              enabled: true,
              createdAt: "2022-04-07T14:42:46.542Z",
            },
          },
          {
            carId: "nzfst8v9s283oh3dvahegn5az2cj8you0hdo",
            colorId: "seyrwfz7061p5bp4v6qn3vb_zlqm0skx9q5c",
            assignedAt: "2022-04-08T14:24:07.918Z",
            images: [
              {
                id: "_tt44lpgpaa3g928sx51jop_05610pyye_af",
                type: "INTERIOR",
                url: "https://bafybeihuu6exv5dhe4cddu4go36zkvqil2vtthpp4okm5vzsqspypud6am.ipfs.dweb.link/temp/2022-04-08-17-23-46-4646-la7pf7v-avatar.jpg",
                colorsOnCarsCarId: "nzfst8v9s283oh3dvahegn5az2cj8you0hdo",
                colorsOnCarsColorId: "seyrwfz7061p5bp4v6qn3vb_zlqm0skx9q5c",
              },
            ],
            color: {
              id: "seyrwfz7061p5bp4v6qn3vb_zlqm0skx9q5c",
              name: "green",
              hex: "#ff7890",
              enabled: true,
              createdAt: "2022-04-08T13:58:54.571Z",
            },
          },
        ],
        marque: {
          id: "7rwwxa17u_m9bt175xdj8hbklkvlomjowal0",
          name: "Land Cruise 2",
          logoUrl:
            "https://bafybeidmqd5oc5uj6u2hffiiluln6kx6snvsb3lmwunfjutfotd72stp34.ipfs.dweb.link/temp/2022-04-07-07-29-59-5959-rq2buiu-avatar.jpg",
          enabled: false,
          createdAt: "2022-04-07T04:30:09.177Z",
        },
      },
    };
  },
  async fetch() {
    console.log(this.app);
    const res = await this.$axios.get(
      this.marqueId === "-1"
        ? `/cars/get/${this.router.params.id}`
        : `/cars/search?skip=${this.skip}&take=${this.take}&marqueId=${this.marqueId}`
    );
    const { data } = res;
    const { cars, total } = data;
    if (cars)
      this.cars = cars.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
    if (total) this.total = total;
  },
  methods: {
    changeColor(color) {
      this.selectedImage =
        color.images.length > 0
          ? color.images[0].url
          : "https://bafybeidp6wv4kgl2fwdwzplx2iny5wl55mw5yzm7bbvms3nbknn75xeys4.ipfs.dweb.link/temp/2022-04-08-17-51-50-5050-s4bpgeq-bmw.jpg";
      this.activeColor = color;
    },
    nextImage(index) {
      if (this.activeColor.images.length > 0)
        this.activeIndex =
          this.activeIndex + index < 0
            ? 0
            : this.activeIndex + index >= this.activeColor.images.length
            ? this.activeColor.images.length - 1
            : this.activeIndex + index;
      if (this.activeIndex === 0) this.disablePrev = true;
      else this.disablePrev = false;
      if (this.activeIndex === this.activeColor.images.length - 1)
        this.disableNext = true;
      else this.disableNext = false;
      this.selectedImage = this.activeColor.images[this.activeIndex].url;
    },
  },
};
</script>

<style scoped>
.no-scroll::-webkit-scrollbar {
  display: none;
}
</style>
