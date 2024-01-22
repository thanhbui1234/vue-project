<script setup>
import { ChangeNumber } from "../../helper/number";
</script>

<template>
  <div v-for="item in data" v-bind:key="item.id">
    <router-link class="flex" :to="{ name: 'detail', params: { id: item.id } }">
      <img
        class="w-[200px] h-[110px] rounded-md"
        :src="item.image"
        :alt="item.title"
      />
      <div class="pl-2 flex flex-col gap-3 text">
        <p class="title text-white">{{ item.title }}</p>
        <p class="text-gray-400">{{ item.username }}</p>
        <span class="flex text-gray-400">
          <p>{{ ChangeNumber(item.view) }} views -</p>
          <p>One mone ago</p>
        </span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "sidebar-details",
  props: {
    data: [Object],
  },
};
</script>

<style scoped>
.title {
  height: 20px; /* You may adjust the height accordingly */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.text {
  cursor: pointer;
  border-top-right-radius: 5px;
  max-width: 13rem /* 208px */;
  background: rgb(56, 40, 140);
  background: linear-gradient(
    205deg,
    rgba(56, 40, 140, 1) -33%,
    rgba(47, 46, 88, 0.9024859943977591) 61%
  );
}
.text:hover {
  background: rgb(56, 40, 140);
  background: linear-gradient(
    135deg,
    rgba(56, 40, 140, 1) -33%,
    rgba(54, 51, 161, 0.4431022408963585) 100%
  );
}
</style>
