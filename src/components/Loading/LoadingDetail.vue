<template>
  <a-spin :indicator="indicator" />
</template>
<script lang="ts">
import { LoadingOutlined } from "@ant-design/icons-vue";
import { defineComponent, h } from "vue";
export default defineComponent({
  props: {
    size: String,
  },
  setup(props) {
    const fontSize = props.size === "" ? "100px" : props.size;

    const indicator = h(LoadingOutlined, {
      style: {
        fontSize: fontSize,
      },
      spin: true,
    });
    return {
      indicator,
    };
  },
});
</script>
