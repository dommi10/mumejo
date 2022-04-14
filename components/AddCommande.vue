<template>
  <transition name="modal">
    <div
      v-if="modal.isAddRole"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      <div
        class="flex flex-col items-start w-full max-w-md px-4 pt-4 pb-2 mx-4 space-y-2 bg-white rounded-lg shadow-md xs:mx-0 text-black/75"
      >
        <div class="flex flex-col w-full space-y-6">
          <div class="flex items-center justify-between p-4 border-b">
            <div></div>
            <span class="capitalize text-[#299DDF] text-sm font-semibold"
              >Ajout d'une commande</span
            >
            <button
              class="focus:outline-none focus:ring-white"
              @click="closeModal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex flex-col px-6 space-y-2">
            <div
              class="flex items-start justify-start w-full space-y-1 max-w-[800px] flex-col"
            >
              <div
                class="flex flex-col w-full max-w-[300px] mt-2 space-y-2"
                :class="{ error: errorMessage.noms }"
              >
                <label
                  for="noms"
                  class="text-xs leading-[0.875rem] font-medium tracking-[-0.015em]"
                >
                  Noms
                </label>
                <input
                  id="noms"
                  v-model="role.noms"
                  :disabled="modal.loading"
                  autocomplete="off"
                  required
                  type="text"
                  class="text-xs w-full rounded-md focus:ring-[#006494] border-[#006494] text-[#006494]"
                />
              </div>
              <div
                class="flex flex-col w-full max-w-[300px] mt-2 space-y-2"
                :class="{ error: errorMessage.email }"
              >
                <label
                  for="email"
                  class="text-xs leading-[0.875rem] font-medium tracking-[-0.015em]"
                >
                  Email
                </label>
                <input
                  id="email"
                  v-model="role.email"
                  :disabled="modal.loading"
                  autocomplete="off"
                  type="email"
                  class="text-xs w-full rounded-md focus:ring-[#006494] border-[#006494] text-[#006494]"
                />
              </div>
              <div
                class="flex flex-col w-full max-w-[300px] mt-2 space-y-2"
                :class="{ error: errorMessage.tel }"
              >
                <label
                  for="tel"
                  class="text-xs leading-[0.875rem] font-medium tracking-[-0.015em]"
                >
                  Telephone*
                </label>
                <div
                  class="flex w-full space-x-2"
                  :class="{ error: errorMessage.telephone }"
                >
                  <div class="flex w-auto space-x-">
                    <vue-country-code
                      id="country"
                      name="country"
                      :preferred-countries="['UG']"
                      enabled-country-code
                      class="dark:bg-white"
                      @onSelect="onSelect"
                    >
                    </vue-country-code>
                  </div>
                  <input
                    id="tel"
                    v-model="role.tel"
                    :disabled="modal.loading"
                    autocomplete="off"
                    type="text"
                    required
                    class="text-xs w-full rounded-md focus:ring-[#006494] border-[#006494] text-[#006494]"
                  />
                </div>
              </div>
            </div>

            <span
              v-if="errorDelete"
              class="text-xs tracking-[-0.02em] leading-[1.125rem] font-medium text-red-600"
              >{{ errorDelete }}</span
            >
          </div>
          <div class="flex items-start justify-end w-full space-x-2">
            <button
              :disabled="modal.loading"
              class="duration-300 w-full max-w-[100px] font-semibold rounded-md flex px-2 py-2 justify-center items-center capitalize text-[0.875rem] shadow-md tracking-[-0.015em] leading-[1.375rem] bg-[#299DDF] text-white first-letter:uppercase transition duration-600"
              :class="{
                'bg-opacity-60 cursor-not-allowed': modal.loading,
              }"
              @click="validateAndSave"
            >
              <svg
                v-if="modal.loading"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
              <span v-if="modal.loading">{{ status }}</span>
              <span v-else>Appliquer</span></button
            ><button
              :class="{ 'bg-opacity-60 cursor-not-allowed': modal.loading }"
              :disabled="modal.loading"
              class="duration-300 w-full max-w-[100px] font-semibold rounded-md border flex px-2 py-2 justify-center items-center capitalize text-[0.875rem] shadow-sm tracking-[-0.015em] leading-[1.375rem] bg-white transition text-[#299DDF] hover:bg-red-600 hover:text-white duration-600"
              @click="closeModal"
            >
              <span v-if="modal.loading">{{ status }}...</span>
              <span v-else>Annuler</span>
            </button>
          </div>
        </div>
      </div>
    </div></transition
  >
</template>
<script>
import Vue from "vue";
import { mapState, mapGetters } from "vuex";
import {
  validateAsEmail,
  validateAsNumber,
  validateAsString,
  validateAsStringNumber,
} from "~/helpers";
export default Vue.extend({
  props: {
    url: {
      type: String,
      required: true,
      default: "",
    },
    selectedRole: {
      type: Object,
      required: true,
      default() {
        return {
          colorId: "",
          carId: "",
        };
      },
    },
  },
  data() {
    return {
      status: null,
      errorMessage: {
        noms: null,
        adresse: null,
        tel: null,
        email: null,
      },
      errorDelete: null,
      tel: "",
      role: {
        id: "",
        noms: "",
        adresse: "",
        email: "",
        tel: "",
        code: "",
      },
    };
  },
  computed: {
    ...mapGetters(["loggedSociety"]),
    ...mapState({
      modal: (state) => state.modal,
    }),
  },

  methods: {
    onSelect({ dialCode }) {
      this.role.code = dialCode;
    },
    async validateAndSave() {
      if (this.validation()) {
        await this.saveDataChanges();
      }
    },
    validation() {
      this.errorDelete = null;
      this.errorMessage.noms = !validateAsString(this.role.noms)
        ? "cette noms est incorrecte"
        : null;

      this.errorMessage.email =
        this.role.email && !validateAsEmail(this.role.email)
          ? "cet email est incorrect"
          : null;
      this.errorMessage.tel =
        this.role.tel && !validateAsNumber(this.role.code + this.role.tel)
          ? "ce numero de telephone est incorrect"
          : null;
      if (
        validateAsString(this.role.noms) &&
        validateAsNumber(this.role.code + this.role.tel)
      ) {
        if (this.role.email && !validateAsEmail(this.role.email)) return false;
        return true;
      }
      this.errorDelete = !validateAsString(this.role.noms)
        ? "cette noms est incorrecte"
        : this.role.email && !validateAsEmail(this.role.email)
        ? "cet email est incorrect"
        : this.role.tel && !validateAsNumber(this.role.code + this.role.tel)
        ? "ce numero de telephone est incorrect"
        : null;
      return false;
    },
    closeModal() {
      this.errorDelete = null;
      this.role = {
        id: "",
        noms: "",
        adresse: "",
        email: "",
        tel: "",
      };
      this.errorMessage = {
        noms: null,
        adresse: null,
        email: null,
        tel: null,
      };
      this.$emit("refreshData");
      this.$store.dispatch("modal/toogleModalAddRole");
    },
    async saveDataChanges() {
      try {
        this.tel = this.role.code + this.role.tel;
        this.$store.dispatch("modal/toogleModalLoading");
        this.errorDelete = null;
        this.status = this.role.id === "" ? "saving...." : "updating....";
        const res = await this.$axios.post(`${this.url}`, {
          ...this.role,
          tel: this.tel,
          carId: this.selectedRole.carId,
          colorId: this.selectedRole.colorId,
        });

        const { message } = res.data;
        this.$store.dispatch("modal/toogleModalLoading");
        if (message) {
          this.errorDelete = message;
        } else {
          this.role = { id: "", noms: "", adresse: "", email: "", tel: "" };
          this.$store.dispatch("modal/toogleModalAddRole");
          this.$emit("refetch");
        }
      } catch (error) {
        this.$store.dispatch("modal/toogleModalLoading");
        this.errorDelete = "something went wrong";
      }
    },
  },
});
</script>

<style scoped>
label::after {
  content: "*";
  color: red;
}
.not-required::after {
  content: "";
  color: inherit;
}
.red {
  @apply text-red-600;
}
.error > input {
  @apply border-red-300;
}
.error > textarea {
  @apply border-red-300;
}
.error > label,
.error > span {
  @apply text-red-400;
}
</style>
