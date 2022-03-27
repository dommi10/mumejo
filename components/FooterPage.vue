<template>
  <footer class="w-full bg-[#04091E]">
    <div
      class="min-h-[50vh] justify-center items-center max-w-screen-lg mx-auto flex flex-col pb-6"
    >
      <div class="flex items-center flex-1 w-full">
        <div
          class="grid w-full grid-cols-1 gap-4 text-white md:gap-2 lg:gap-1 md:grid-cols-3 lg:grid-cols-5"
        >
          <div class="flex flex-col items-start space-y-3">
            <span
              class="pb-4 text-lg font-semibold tracking-tight text-left lowercase first-letter:uppercase"
              >{{ $t("link1Title") }}</span
            >
            <NuxtLink
              :to="'#'"
              class="text-[#777777] tracking-tight text-sm text-left lowercase first-letter:uppercase"
              >{{ $t("jobs") }}</NuxtLink
            >
            <NuxtLink
              :to="'#'"
              class="text-[#777777] tracking-tight text-sm text-left lowercase first-letter:uppercase"
              >{{ $t("brand") }}
            </NuxtLink>
            <NuxtLink
              :to="'#'"
              class="text-[#777777] tracking-tight text-sm text-left font-normal lowercase first-letter:uppercase"
              >{{ $t("inverstisor") }}
            </NuxtLink>
            <NuxtLink
              :to="'#'"
              class="text-[#777777] tracking-tight text-sm text-left font-normal lowercase first-letter:uppercase"
              >{{ $t("terms") }}
            </NuxtLink>
          </div>
          <div class="flex flex-col items-start space-y-3">
            <span
              class="pb-4 text-lg font-semibold tracking-tight text-left lowercase first-letter:uppercase"
              >{{ $t("link2Title") }}</span
            >
            <NuxtLink
              :to="'#'"
              class="text-[#777777] tracking-tight text-sm text-left lowercase first-letter:uppercase"
              >{{ $t("jobs") }}</NuxtLink
            >
            <NuxtLink
              :to="'#'"
              class="text-[#777777] tracking-tight text-sm text-left lowercase first-letter:uppercase"
              >{{ $t("brand") }}
            </NuxtLink>
            <NuxtLink
              :to="'#'"
              class="text-[#777777] tracking-tight text-sm text-left font-normal lowercase first-letter:uppercase"
              >{{ $t("inverstisor") }}
            </NuxtLink>
            <NuxtLink
              :to="'#'"
              class="text-[#777777] tracking-tight text-sm text-left font-normal lowercase first-letter:uppercase"
              >{{ $t("terms") }}
            </NuxtLink>
          </div>
          <div class="flex flex-col items-start space-y-3">
            <span
              class="pb-4 text-lg font-semibold tracking-tight text-left lowercase first-letter:uppercase"
              >{{ $t("link3Title") }}</span
            >
            <NuxtLink
              :to="'#'"
              class="text-[#777777] tracking-tight text-sm text-left lowercase first-letter:uppercase"
              >{{ $t("jobs") }}</NuxtLink
            >
            <NuxtLink
              :to="'#'"
              class="text-[#777777] tracking-tight text-sm text-left lowercase first-letter:uppercase"
              >{{ $t("brand") }}
            </NuxtLink>
            <NuxtLink
              :to="'#'"
              class="text-[#777777] tracking-tight text-sm text-left font-normal lowercase first-letter:uppercase"
              >{{ $t("inverstisor") }}
            </NuxtLink>
            <NuxtLink
              :to="'#'"
              class="text-[#777777] tracking-tight text-sm text-left font-normal lowercase first-letter:uppercase"
              >{{ $t("terms") }}
            </NuxtLink>
          </div>
          <div class="flex flex-col items-start space-y-3">
            <span
              class="pb-4 text-lg font-semibold tracking-tight text-left lowercase first-letter:uppercase"
              >{{ $t("link4Title") }}</span
            >
            <p
              class="text-[#777777] tracking-tight text-sm text-left lowercase first-letter:uppercase"
            >
              {{ $t("social") }}
            </p>
            <div class="flex items-center w-full space-x-4">
              <NuxtLink
                :to="'#'"
                class="hover:text-orange-400 text-[#777777] tracking-tight text-sm text-left lowercase first-letter:uppercase"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-facebook"
                >
                  <path
                    d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                  ></path>
                </svg>
              </NuxtLink>
              <NuxtLink
                :to="'#'"
                class="hover:text-orange-400 text-[#777777] tracking-tight text-sm text-left lowercase first-letter:uppercase"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-twitter"
                >
                  <path
                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                  ></path>
                </svg>
              </NuxtLink>
              <NuxtLink
                :to="'#'"
                class="hover:text-orange-400 text-[#777777] tracking-tight text-sm text-left lowercase first-letter:uppercase"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path
                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                  ></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </NuxtLink>
              <NuxtLink
                :to="'#'"
                class="hover:text-orange-400 text-[#777777] tracking-tight text-sm text-left lowercase first-letter:uppercase"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-linkedin"
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                  ></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </NuxtLink>
            </div>
          </div>
          <div class="flex flex-col items-start space-y-3">
            <span
              class="pb-4 text-lg font-semibold tracking-tight text-left lowercase first-letter:uppercase"
              >{{ $t("link5Title") }}</span
            >
            <NuxtLink
              :to="'#'"
              class="text-[#777777] tracking-tight text-sm text-left lowercase first-letter:uppercase"
              >{{ $t("info") }}</NuxtLink
            >
            <form class="w-full" action="#">
              <div class="relative w-full h-12">
                <input
                  class="p-2 pr-10 w-full h-full text-xs placeholder:text-xs text-[#777777] focus:outline-none ring-blue-50"
                  :placeholder="email"
                />
                <button
                  type="submit"
                  class="absolute top-0 right-0 flex items-center justify-center w-10 h-12 text-white bg-orange-400 focus:outline-none"
                >
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
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center space-x-1">
        <p
          class="text-[#777777] tracking-tight text-sm text-left lowercase first-letter:uppercase"
        >
          {{ $t("copyright") }}
        </p>
        <p
          class="text-[#777777] tracking-tight text-sm text-left lowercase first-letter:uppercase"
        >
          &copy; {{ new Date().getFullYear() }}
        </p>
        <p
          class="text-[#777777] tracking-tight text-sm text-left lowercase first-letter:uppercase"
        >
          {{ $t("rights") }}
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      email: this.$t("email"),
    };
  },
};
</script>
