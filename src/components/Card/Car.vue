<script setup>
import { ChangeNumber } from "../../helper/number";
</script>

<template>
  <div
    class="flex flex-col cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:w-[400pxN]"
    style="width: 376px"
  >
    <router-link :to="{ name: 'detail', params: { id: data.id } }">
      <img class="rounded-lg" :src="data.image" style="width: 100%" />
    </router-link>

    <div class="content-card">
      <img :src="data.avt" alt="" />
      <div class="">
        <router-link :to="{ name: 'detail', params: { id: data.id } }">
          <h2 class="font-bold text-white">{{ data.title }}</h2>
        </router-link>

        <span class="">
          <router-link :to="{ name: 'short', params: { id: data.id } }">
            <p class="text">{{ data.username }}</p>
          </router-link>
          <p class="text">{{ ChangeNumber(data.view) }} view</p>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: [Object],
  },
};
</script>

<style scoped>
.card-item {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.content-card {
  display: flex;
  height: 128px;
  padding: 24px 16px;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  border-radius: 0px 0px 16px 16px;
  background: linear-gradient(
    180deg,
    rgba(72, 49, 157, 0.2) 18.75%,
    rgba(72, 49, 157, 0) 100%
  );
}
.text {
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 183.333% */
  text-transform: uppercase;
}
</style>
