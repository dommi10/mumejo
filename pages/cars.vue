<template>
  <div class="flex flex-col items-center justify-center w-full h-full">
    <PageLeading :title="'Cars'" />
    <!-- Results and choce -->
    <div
      class="flex md:flex-row flex-col items-start min-h-[60vh] w-full flex-1 max-w-screen-lg px-4 py-6 mx-auto space-x-4"
    >
      <!-- search -->
      <div
        class="relative flex flex-col rounded-xl justify-start w-full md:max-w-xs min-h-[40vh] md:min-h-[60vh] px-5 py-6 border my-shaddow spacey-4"
      >
        <label for="oper" class="text-xl font-bold tracking-tighter text-left">
          Selectionner une Marque
        </label>
        <!-- chooser -->
        <div class="mt-4">
          <DropDown
            :id="'oper'"
            :url="`/marques`"
            :exact-url="false"
            :height-icon="'h-10'"
            :selected-item="selectedProduit"
            :disabled="$fetchState.pending"
            :isFilter="true"
            :defaultItemText="'Toutes les marques'"
            class="max-w-[250px] md:min-w-[200px] h-10"
            @selected="produitSelected"
            @initRefetch="init"
          />
        </div>
        <div class="absolute bottom-0 left-0 right-0 px-5 pb-6">
          <button
            :disabled="$fetchState.pending"
            @click="init"
            class="inline-flex items-center justify-center w-full h-10 text-sm font-semibold tracking-tighter text-white bg-orange-600 rounded-md shadow-sm focus:outline-none active:ring-transparent focus:ring-transparent disabled:cursor-not-allowed disabled:opacity-50"
          >
            Search
          </button>
        </div>
      </div>
      <div
        v-if="$fetchState.pending"
        class="flex min-h-[60vh] items-center justify-center w-full h-full text-xl font-bold"
      >
        <p>Loading...</p>
      </div>
      <div
        v-else-if="$fetchState.error"
        class="flex min-h-[60vh] flex-col items-center space-y-4 justify-center w-full h-full text-xl font-bold"
      >
        <p class="text-sm">Error was found 😥</p>
        <button
          :disabled="$fetchState.pending"
          @click="init"
          class="inline-flex items-center justify-center h-10 px-4 text-sm font-semibold tracking-tighter text-white bg-orange-600 shadow-sm rounded-xl focus:outline-none active:ring-transparent focus:ring-transparent disabled:cursor-not-allowed disabled:opacity-50"
        >
          Try again
        </button>
      </div>
      <div v-else class="w-full">
        <div
          v-if="cars.length === 0"
          class="flex min-h-[60vh] items-center justify-center w-full h-full text-xl font-bold"
        >
          <p>Aucun resultat</p>
        </div>
        <div v-else class="w-full py-4">
          <Card
            v-for="item in cars"
            :key="item.id"
            :title="item.name"
            :url="`/car/${item.id}`"
            :imgUrl="getCoverImge(item)"
            :description="item.description"
          />
          <div
            class="w-full flex flex-col md:flex-row md:space-y-0 space-y-2 md:items-center md:justify-between min-w-[400px] text-sm py-4 overflow-x-auto"
          >
            <p>{{ getTipsOfRowsNumber() }}</p>
            <div class="flex items-start py-2 space-x-1 md:justify-end">
              <button
                class="flex items-center justify-center w-auto h-8 p-2 text-xs transition duration-300 bg-gray-100 border rounded-md"
                :disabled="activeNumber === 1"
                :class="{
                  'opacity-60 cursor-not-allowed': activeNumber === 1,
                }"
                @click="
                  paginate(activeNumber > 1 ? activeNumber - 1 : activeNumber)
                "
              >
                <span
                  class="font-semibold transition duration-300 first-letter:uppercase"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    /></svg
                ></span>
              </button>
              <div class="flex items-center justify-center">
                <button
                  v-for="n in getRowNumbers()"
                  :key="n"
                  class="flex items-center justify-center w-8 h-8 p-2 text-xs transition duration-300 border-t border-b first:border-l last:border-r"
                  :class="{
                    'text-white bg-[#006494] rounded-md': n === activeNumber,
                  }"
                  @click="paginate(n)"
                >
                  <span class="font-semibold first-letter:uppercase">{{
                    n
                  }}</span>
                </button>
              </div>

              <button
                :disabled="total <= parseInt(take) + skip"
                class="flex items-center justify-center w-auto h-8 p-2 text-xs transition duration-300 border rounded-md shadow"
                :class="{
                  'opacity-60 cursor-not-allowed':
                    total <= parseInt(take) + skip,
                }"
                @click="paginate(activeNumber + 1)"
              >
                <span
                  class="font-semibold first-letter:uppercase text-[#299DDF] transition duration-300"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    /></svg
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DropDown from "~/components/DropDown.vue";
export default {
  head() {
    return {
      title: "Cars - MumejoLog",
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
  components: { DropDown },
  data() {
    return {
      selectedProduit: {
        text: "",
        value: "",
        desc: "",
      },

      marqueId: "",
      activeNumber: 1,
      disableSelect: false,
      cars: [],
      skip: 0,
      take: 2,
      total: 0,
    };
  },

  async fetch() {
    const res = await this.$axios.get(
      this.marqueId === "-1"
        ? `/cars/search?skip=${this.skip}&take=${this.take}`
        : `/cars/search?skip=${this.skip}&take=${this.take}&marqueId=${this.marqueId}`
    );
    const { data } = res;
    const { cars, total } = data;
    if (cars)
      this.cars = cars.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
    if (total) this.total = total;
  },

  methods: {
    getCoverImge(cars) {
      const images = [];
      if (cars.colors.length > 0)
        cars.colors.forEach((element) => {
          if (element.images.length > 0) {
            element.images.forEach((item) => images.push(item.url));
          }
        });
      return images.length > 0 ? images[0] : "";
    },

    getTipsOfRowsNumber() {
      if (this.total === 0) return "";
      return (
        "Affichage de " +
        " " +
        (this.skip + 1) +
        " " +
        "à" +
        " " +
        (this.skip + Number.parseInt(this.take) <= this.total
          ? this.skip + Number.parseInt(this.take)
          : this.total) +
        " " +
        "de" +
        " " +
        this.total.toString() +
        " " +
        "entrées"
      );
    },
    getRowNumbers() {
      if (Number.parseInt(this.take) > this.total) return 1;
      const numbers = (this.total / Number.parseInt(this.take))
        .toFixed(2)
        .toString();

      return parseInt(
        numbers.substring(
          numbers.lastIndexOf(".") + 1,
          numbers.lastIndexOf(".") + 2
        ),
        10
      ) > 5
        ? parseInt(numbers, 10) + 1
        : parseInt(numbers, 10);
    },
    async resetSearch() {
      this.query = null;
      await this.$fetch();
    },
    paginate(index) {
      if (index !== this.activeNumber) {
        this.skip =
          index > 2
            ? parseInt(this.take, 10) * (index - 1) + 1
            : parseInt(this.take, 10) * (index - 1);
        this.activeNumber = index;
        this.$fetch();
      }
    },
    init() {
      this.skip = 0;
      this.$fetch();
    },
    produitSelected(value) {
      this.marqueId = value.value;
    },
  },
};
</script>
