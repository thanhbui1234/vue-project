<template>
  <div class="big-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.big-container {
  width: 100%;
  height: 700px;
}
</style>
