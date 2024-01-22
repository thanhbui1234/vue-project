<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="flex gap-5 mt-10 justify-center items-center">
    <p class="button text-gray-400">
      <Icon class="mt-1" icon="material-symbols:home-outline" /> Home
    </p>
    <p class="button text-gray-400">
      <Icon class="mt-1" icon="ph:video" /> Video
    </p>
    <p class="button text-gray-400">
      <Icon class="mt-1" icon="ph:video" />
      Short
    </p>
    <p class="button text-gray-400">
      <Icon class="mt-1" icon="ph:video" />
      Live
    </p>
    <p class="button text-gray-400">
      <Icon class="mt-1" icon="ph:playlist" />
      Playlist
    </p>
    <p class="button text-gray-400">
      <Icon class="mt-1" icon="iconoir:community" />
      Community
    </p>
    <p class="button text-gray-400">
      <Icon class="mt-1" icon="ri:wechat-channels-line" />
      Channels
    </p>
    <p class="button text-gray-400">
      <Icon class="mt-1" icon="mdi:about" />
      About
    </p>
  </div>
  <div className="border-t border-[#4b347c] "></div>
</template>

<script>
export default {
  name: "nav-menu",
  components: {
    Icon,
  },
};
</script>

<style scoped>
.button {
  cursor: pointer;
  width: 130px;
  display: flex;
  gap: 10px;
  font-style: 20px;
  padding: 10px 25px;
}
.button:hover {
  color: white;
  background: #681f8f;
}
</style>
