<script setup>
import { Icon } from "@iconify/vue";
import Menu from "../components/Nav/Menu.vue";
</script>
<template>
  <div class="containerMain">
    <div class="containerInput">
      <form class="form">
        <input name="search" class="input" placeholder="Basic usage" />
        <button class="serach" type="submit">
          <p class="text-xl">
            <Icon icon="material-symbols-light:search" />
          </p>
        </button>
        <p class="micro">
          <Icon
            class="text-xl cursor-pointer"
            icon="material-symbols:mic-outline"
          />
        </p>
      </form>
    </div>
    <div class="absolute right-[5%] top-2 flex gap-5 text-white text-2xl">
      <a-popover title="Title">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <Icon icon="ph:camera-light" />
      </a-popover>
      <a-popover title="Title">
        <template #content>
          <p>BUi Chi Thanh</p>
          <p>Anh Hieu pro</p>
        </template>
        <Icon icon="mdi:bell-outline" />
      </a-popover>
      <a-popover title="Title">
        <template #content>
          <p>hieu pro</p>
          <p>hieu pro</p>
        </template>
        <Icon icon="arcticons:sd-maid-se" />
      </a-popover>
    </div>
    <Menu></Menu>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Layout-head",
  components: {
    Icon,
    Menu,
  },
};
</script>

<style lang="scss" scoped>
.containerMain {
  width: 100% !important;
  background: #2a2e53;
}
.form {
  position: relative;
}
.containerInput {
  display: flex;
  align-items: center;
  justify-content: center;
}
.input {
  color: white;
  border: 1px solid;
  outline: none;
  padding: 0 40px;
  margin-top: 10px;
  width: 442px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: linear-gradient(
    135deg,
    rgba(15, 85, 232, 0.1) 0%,
    rgba(157, 223, 243, 0.1) 100%
  );
}
.input::placeholder {
  color: #fff;
}

.serach {
  color: #ebebf599;
  position: absolute;
  top: 40%;

  left: 3%;
}
.micro {
  color: #ebebf599;
  position: absolute;
  top: 40%;
  right: 3%;
}
</style>
