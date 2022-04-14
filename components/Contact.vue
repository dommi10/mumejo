<template>
  <div class="w-full max-w-screen-lg py-12 mx-auto">
    <div class="h-[40vh] w-full lg:h-[60vh]">
      <client-only>
        <l-map style="z-index: 20" :zoom="zoom" :center="center">
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
          <l-marker :lat-lng="markerLatLng"></l-marker>
        </l-map>
      </client-only>
    </div>
    <form
      class="grid w-full grid-cols-1 gap-1 px-4 pt-20 md:px-0 lg:grid-cols-3 md:grid-cols-2 lg:gap-x-6"
      :action="mailto"
      method="GET"
    >
      <div class="flex flex-col w-full space-y-6 lg:col-span-2">
        <div class="grid grid-cols-2 gap-x-1 md:gap-x-0">
          <label for="name" class="flex items-start space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-orange-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <p
              class="text-[#777777] text-sm md:text-normal tracking-tight text-normal text-left lowercase first-letter:uppercase"
            >
              {{ address }}
            </p>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            class="h-10 md:h-12 w-full text-sm tracking-tight py-1 px-3 forcus:outline-none active:outline-none border-[#e6e2e2]"
            placeholder="Enter your name"
          />
        </div>
        <div class="grid grid-cols-2 gap-x-1 md:gap-x-0">
          <label for="email" class="flex items-center justify-start space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-orange-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <p
              class="text-[#777777] text-sm md:text-normal tracking-tight text-normal text-left lowercase first-letter:uppercase"
            >
              {{ number }}
            </p>
          </label>
          <input
            id="email"
            name="cc"
            type="email"
            required
            class="h-10 md:h-12 w-full text-[#777777] text-sm tracking-tight py-1 px-3 forcus:outline-none active:outline-none border-[#e6e2e2]"
            placeholder="Enter your mail"
          />
        </div>
        <div class="grid grid-cols-2 gap-x-1 md:gap-x-0">
          <label
            for="subject"
            class="flex items-center justify-start space-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-orange-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <p
              class="text-[#777777] text-sm md:text-normal tracking-tight text-normal text-left lowercase first-letter:uppercase"
            >
              {{ email }}
            </p>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            maxlength="120"
            required
            class="h-10 md:h-12 w-full text-[#777777] text-sm tracking-tight py-1 px-3 forcus:outline-none active:outline-none border-[#e6e2e2]"
            placeholder="Enter your subject"
          />
        </div>
      </div>
      <div class="flex flex-col w-full space-y-3">
        <textarea
          name="body"
          placeholder="Message"
          maxlength="1000"
          cols="30"
          rows="5"
          class="w-full h-full text-sm tracking-tight py-2 px-3 forcus:outline-none active:outline-none border-[#e6e2e2]"
        />
        <button
          type="submit"
          class="flex items-center self-end justify-center h-10 px-3 py-4 text-white uppercase bg-orange-400 min-w-max"
        >
          {{ $t("send") }}
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import emailjs from "emailjs-com";
export default {
  props: {
    address: {
      type: String,
      default:
        "Rdr-Butembo, Boulevard Joseph Kabila, Immeuble Dr. Kisonia Kidubai, No.121, 3ième niveau",
    },
    number: {
      type: String,
      default: "00 (243) 973 941 900 | 00 (256) 753 190295",
    },
    email: {
      type: String,
      default: "mumejolog@gmail.com",
    },
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 13,
      center: [0.1071124, 29.3253537],
      markerLatLng: [0.1071124, 29.3253537],
      mailto: "mailto:mumejolog@gmail.com",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          e.target,
          "YOUR_USER_ID",
          {
            name: this.name,
            email: this.email,
            message: this.message,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>
