<template>
  <a-input placeholder="Basic usage" v-model:value="userName">
    <template #prefix>
      <user-outlined type="user" />
    </template>
    <template #suffix>
      <a-tooltip title="Extra information">
        <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
      </a-tooltip>
    </template>
  </a-input>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Input",
});
</script>
