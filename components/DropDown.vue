<template>
  <div class="relative flex flex-col w-full h-full">
    <div class="relative z-0 flex w-full h-full capitalize text-black/75">
      <input
        :id="id"
        :name="id"
        type="text"
        class="w-full py-3 pl-4 text-sm capitalize border shadow-sm my-shaddow first-letter:uppercase focus:ring-white active:ring-white"
        :class="{
          'w-full rounded-md ': !item.desc,
          'w-auto': item.desc,
          'bg-opacity-50': disabled,
          background,
        }"
        autocomplete="off"
        :value="item.text"
        :disabled="disabled"
        @focus="open = true"
        @input="debounceSearch"
      />
      <button
        v-if="item.desc"
        :disabled="loading || disabled"
        type="button"
        class="absolute right-0 z-0 flex items-center justify-between w-24 h-full pl-4 pr-4 ml-1 font-semibold rounded-r-full min-w-24 text-black/75 focus:outline-none"
        :class="{ heightIcon, background, 'bg-opacity-50': disabled }"
        @click="open = !open"
      >
        <span>{{ item.desc }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <button
        v-else
        :disabled="loading || disabled"
        type="button"
        class="absolute right-0 z-0 flex items-center justify-center w-8 h-full pr-4 font-semibold rounded-r-full text-black/75 focus:outline-none"
        :class="{ heightIcon, background, 'bg-opacity-50': disabled }"
        @click="open = !open"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>
    <ul
      v-if="open"
      class="w-full font-semibold mt-1 absolute max-h-[150px] text-sm !z-20 !list-none overflow-y-auto bg-gray-100 text-black/75 rounded-lg shadow-md"
      :class="marginTop"
      :disabled="disabled"
    >
      <li v-if="loading" class="z-20 w-full px-4 py-2 text-xs">
        <p>Fetching...</p>
      </li>
      <li
        v-for="(val, index) in results"
        v-else
        :key="val.value + index"
        class="z-20 flex flex-col items-start w-full px-4 py-2 text-xs hover:text-white hover:bg-[#299DDF]"
      >
        <button
          class="inline-flex h-full min-w-full capitalize first-letter:uppercase focus:outline-none"
          @click="selected(val)"
        >
          {{ val.text }}
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
// eslint-disable-next-line import/named
import Vue, { PropType } from "vue";

export default Vue.extend({
  props: {
    url: {
      type: String,
      required: true,
      default: "",
    },
    defaultItemText: {
      type: String,
      default: "Tout",
    },
    accesKey: {
      type: String,
      default: "",
    },
    exactUrl: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Number,
      default: -1,
    },
    id: {
      type: String,
      required: true,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    staticData: {
      type: Boolean,
      default: false,
    },
    selectedResults: {
      type: Array,
      default: () => [],
    },
    marginTop: {
      type: String,
      default: "top-11",
    },
    isFilter: {
      type: Boolean,
      default: false,
    },
    heightIcon: {
      type: String,
      default: "h-10",
    },
    background: {
      type: String,
      default: "bg-white",
    },
    refetch: {
      type: Boolean,
      default: false,
    },
    selectedItem: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      results: [],
      loading: false,
      open: false,
      accesValue: "",
      filtred: false,
      search: false,
      debounce: null,
      message: null,
      item: {},
      chooseItem: {},
    };
  },
  watch: {
    async accesKey(val) {
      if (val && val.length > 1) {
        this.item.text = "";
        this.item.desc = "";
        this.accesValue = val;
        await this.fetchData();
      }
    },
    async message(val) {
      if (val && val.length > 1) {
        this.filtred = false;
        this.search = true;
        await this.fetchData(val);
      }
    },
    async refetch() {
      this.item.text = "";
      this.item.desc = "";
      this.open = false;
      await this.fetchData();
    },
    // selectedItem(val) {
    //   if (val && val.id !== '') {
    //     this.item = val
    //     this.chooseItem = val
    //     this.results.unshift(val)
    //   }
    // },
    selectedResults(val) {
      if (val && val.length > 0) {
        if (this.staticData) this.results = val;
        if (this.staticData && val.length > 0) {
          this.item = {
            text: val[0].text,
            value: val[0].value,
            desc: val[0].desc,
            taux: val[0].taux,
          };
          this.$emit("selected", this.item);
        }
      }
    },
  },
  async created() {
    this.filtred = this.isFilter;
    this.staticData
      ? (this.results = this.selectedResults)
      : await this.fetchData();
    if (this.staticData && this.results.length > 0) {
      this.item = {
        text: this.results[0].text,
        value: this.results[0].value,
        desc: this.results[0].desc,
        taux: this.results[0].taux,
      };
      this.$emit("selected", this.item);
    }
  },
  methods: {
    async resetSearch() {
      this.item.text = "";
      await this.fetchData();
    },
    async initRefetch() {
      await this.fetchData();
    },
    async fetchData(val) {
      try {
        this.loading = true;
        this.$emit("selected", { value: "" });
        const url = this.exactUrl
          ? this.url
          : `${this.url}/search?take=20&skip=0&query=${val ?? ""}`;
        const res = await this.$axios.get(url);
        if (res.data) {
          const { marques } = res.data;
          this.results = [];
          if (marques && marques.length > 0) {
            this.results = marques
              .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
              .map((item) => {
                return {
                  value: item.id,
                  text: item.name,
                };
              });
          }
        }
        if (this.results.length > 0) {
          const designation = this.defaultItemText.toString();
          if (this.filtred === true) {
            this.results.splice(0, 0, {
              value: "-1",
              desc: "",
              text: designation,
            });
          }
        }
        if (this.selectedItem.text !== "") {
          const element = this.results.find(
            (element) => element.text === this.selectedItem.text + " - Défaut"
          );
          if (!element)
            this.results.splice(0, 0, {
              ...this.selectedItem,
              text: this.selectedItem.text + " - Défaut",
            });
        }
        if (!this.search || this.selectedItem.text !== "") {
          this.item = {
            text: this.results[0].text,
            value: this.results[0].value,
            desc: this.results[0].desc,
            taux: this.results[0].taux,
          };
          this.$emit("selected", this.item);
        }
        this.loading = false;
      } catch (error) {
        this.loading = false;
      }
    },
    debounceSearch(event) {
      this.message = null;
      this.item.text = event.target.value;
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        if (event.target.value.length > 1) this.message = event.target.value;
        else this.resetSearch();
      }, 600);
    },
    selected(selected) {
      this.item.text = selected.text;
      this.item.value = selected.value;
      this.item.desc = selected.desc;
      this.item.taux = selected.taux;
      this.$emit("selected", selected);
      this.open = false;
    },
  },
});
</script>

<style scoped></style>
