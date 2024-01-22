<script setup>
import { ChangeNumber } from "../../helper/number";
</script>
<template>
  <div class="relative">
    <img
      class="rounded-t-lg h-[260px] w-full object-cover"
      :src="data.image"
      :alt="data.title"
    />
    <div class="absolute left-3 top-[60%] flex gap-2">
      <img class="w-[60px] h-[55px]" :src="data.avt" :alt="data.title" />
      <div>
        <h2 class="text-2xl text-white font-bold">{{ data.username }}</h2>
        <p class="text-gray-400">{{ data.username }}</p>
        <p class="text-gray-400">
          {{ ChangeNumber(data.subciriber) }} Subcribed
        </p>
      </div>
    </div>
    <div class="absolute right-3 top-[60%] flex">
      <button
        class="px-4 py-2 rounded-bl-lg button text-gray-400 hover:text-white"
      >
        Join
      </button>
      <button
        class="flex gap-2 px-3 justify-center items-center button text-gray-400 hover:text-white rounded-br-lg"
      >
        <p class="mt-1">
          <Icon icon="mdi:bell-outline" />
        </p>
        Subscribed
        <p class="mt-1">
          <Icon icon="iconoir:fast-arrow-bottom" />
        </p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Head short",
  props: {
    data: {},
  },
};
</script>

<style scoped>
.button {
  background: rgb(56, 40, 140);
  background: linear-gradient(
    135deg,
    rgba(56, 40, 140, 1) -33%,
    rgba(54, 51, 161, 0.4431022408963585) 100%
  );
}
.button:hover {
  background: #681f8f;
}
</style>
