<script setup>
import { ChangeNumber } from "../../helper/number";
import { Icon } from "@iconify/vue";
</script>
<template>
  <div class="container">
    <h2 class="text-white">{{ data.title }}</h2>
    <section class="flex gap-10">
      <div class="flex gap-2">
        <router-link :to="{ name: 'short', params: { id: data.id } }">
          <img :src="data.avt" :alt="data.title" />
        </router-link>
        <div>
          <router-link :to="{ name: 'short', params: { id: data.id } }">
            <p class="text-gray-400">{{ data.username }}</p>
          </router-link>
          <p class="text-gray-400">
            {{ ChangeNumber(data.subciriber) }} subscribers
          </p>
        </div>
      </div>
      <div class="flex">
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
      <div class="flex">
        <button
          class="px-4 py-2 rounded-bl-lg button text-gray-400 hover:text-white"
        >
          <Icon icon="iconamoon:like" />
        </button>
        <button
          class="flex gap-2 px-3 justify-center items-center button text-gray-400 hover:text-white"
        >
          <p class="mt-1">
            <Icon icon="mdi:bell-outline" />
          </p>
          Like
          <p class="mt-1">
            <Icon icon="iconoir:fast-arrow-bottom" />
          </p>
        </button>
        <button
          class="flex gap-2 px-3 justify-center items-center button text-gray-400 hover:text-white"
        >
          <p class="mt-1">
            <Icon icon="mdi:bell-outline" />
          </p>
          Subscribed
          <p class="mt-1">
            <Icon icon="iconoir:fast-arrow-bottom" />
          </p>
        </button>
        <button
          class="px-4 py-2 rounded-br-lg button text-gray-400 hover:text-white"
        >
          ...
        </button>
      </div>
    </section>
    <div className="border-t border-[#4b347c] my-4"></div>

    <section class="text-gray-400">
      <p>{{ ChangeNumber(data.view) }} - {{ data.datetime }}</p>
      <p>
        {{ data.description }}
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "infomation ",
  components: {
    Icon,
  },
  props: {
    data: {},
  },
};
</script>

<style scoped>
.container {
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 20px;
  margin-top: 20px;
  background: rgb(56, 40, 140);
  background: linear-gradient(
    205deg,
    rgba(56, 40, 140, 1) -33%,
    rgba(47, 46, 88, 0.9024859943977591) 61%
  );
}
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
