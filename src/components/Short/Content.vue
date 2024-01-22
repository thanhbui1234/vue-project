<script setup>
import { ChangeNumber } from "../../helper/number";
</script>

<template>
  <div class="flex justify-between m-10">
    <div>
      <h2 class="text-white text-xl">Our member</h2>
      <p class="text-gray-400">Thank you channel members</p>
    </div>
    <div class="avatarMenu">
      <div class="avatar">
        <div v-for="avt in datas" v-bind:key="avt.id">
          <img :width="200" :src="avt.avt" :alt="avt.title" />
        </div>
      </div>
    </div>
  </div>
  <div className="border-t border-[#4b347c] "></div>

  <div>
    <div class="flex gap-3 text-white text-2xl m-10">
      <h2>Video</h2>
      <Icon class="mt-1" icon="ph:play" />
      <p>Play all</p>
    </div>

    <div class="m-10 content">
      <div v-for="item in datas" :key="item.id">
        <router-link :to="{ name: 'detail', params: { id: item.id } }">
          <img class="rounded-lg" :src="item.image" alt="" />
          <div class="text-content text-white">
            <h2>{{ item.title }}</h2>
            <p class="text-gray-400">{{ ChangeNumber(item.view) }} Views</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  naem: "Content",
  props: {
    datas: [Object],
  },
};
</script>

<style>
.avatarMenu {
  overflow-x: auto;
  white-space: nowrap;
  width: 300px;
  overflow-y: hidden;
}
.avatarMenu::-webkit-scrollbar {
  display: none;
}
.avatar {
  display: flex;
  gap: 10px;
}
.content {
  height: 200px;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
}
.content::-webkit-scrollbar {
  display: none;
}
.text-content {
  padding: 10px;
  border-radius: 0px 0px 16px 16px;
  background: linear-gradient(
    180deg,
    rgba(72, 49, 157, 0.2) 18.75%,
    rgba(72, 49, 157, 0) 100%
  );
}
</style>
