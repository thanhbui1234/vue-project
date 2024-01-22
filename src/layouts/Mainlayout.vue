<script setup>
import { reactive, watch, h } from "vue";
import Home from "../views/Home.vue";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
  UserOutlined,
  RobotOutlined,
  AppleOutlined,
  GithubOutlined,
  LikeOutlined,
  UsbOutlined,
  StarOutlined,
  RocketOutlined,
  MehOutlined,
  IdcardOutlined,
} from "@ant-design/icons-vue";
</script>

<template>
  <div class="flex mt-6 gap-10">
    <div class="sidebar" :style="useStyle">
      <a-button
        type="primary"
        style="margin-bottom: 16px"
        @click="toggleCollapsed"
      >
        <MenuUnfoldOutlined v-if="state.collapsed" />
        <MenuFoldOutlined v-else />
      </a-button>

      <a-menu
        class="mainMenu-sidebar"
        v-model:openKeys="state.openKeys"
        v-model:selectedKeys="state.selectedKeys"
        mode="inline"
        theme="dark"
        :inline-collapsed="state.collapsed"
        :items="items"
      ></a-menu>
    </div>
    <div class="w-[100%]">
      <router-view></router-view>
      <!-- <Home /> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "main-layout",
  components: {
    Home,
  },
};
const state = reactive({
  collapsed: false,
  selectedKeys: ["1"],
  openKeys: ["sub1"],
  preOpenKeys: ["sub1"],
});
const items = reactive([
  {
    key: "1",
    icon: () => h(PieChartOutlined),
    label: "Home",
    title: "Option 1",
  },
  {
    key: "2",
    icon: () => h(DesktopOutlined),
    label: "Shorts",
    title: "Option 2",
  },
  {
    key: "3",
    icon: () => h(InboxOutlined),
    label: "Subscriptions",
    title: "Option 3",
  },
  {
    key: "sub1",
    icon: () => h(UserOutlined),
    label: "Papaya Music",
    title: "Navigation One",
    children: [
      {
        key: "5",
        label: "option 5",
        title: "Option 5",
      },
      {
        key: "6",
        label: "Option 6",
        title: "Option 6",
      },
      {
        key: "7",
        label: "Option 7",
        title: "Option 7",
      },
      {
        key: "8",
        label: "Option 8",
        title: "Option 8",
      },
    ],
  },
  {
    key: "sub2",
    icon: () => h(RobotOutlined),
    label: "Library",
    title: "Navigation Two",
    children: [
      {
        key: "9",
        label: "Option 9",
        title: "Option 9",
      },
      {
        key: "10",
        label: "Option 10",
        title: "Option 10",
      },
      {
        key: "sub3",
        label: "Submenu",
        title: "Submenu",
        children: [
          {
            key: "11",
            label: "Option 11",
            title: "Option 11",
          },
          {
            key: "12",
            label: "Option 12",
            title: "Option 12",
          },
        ],
      },
    ],
  },
  {
    key: "11",
    icon: () => h(PieChartOutlined),
    label: "History",
    title: "Option 12",
  },
  {
    key: "12",
    icon: () => h(AppleOutlined),
    label: "Your Videos",
    title: "Watch Later",
  },
  {
    key: "13",
    icon: () => h(GithubOutlined),
    label: "Downloads",
    title: "Option 13",
  },
  {
    key: "14",
    icon: () => h(LikeOutlined),
    label: "Downloads",
    title: "Option 14",
  },
  {
    key: "15",
    icon: () => h(UsbOutlined),
    label: "Show More",
    title: "Option 15",
  },
  {
    key: "16",
    icon: () => h(StarOutlined),
    label: "DesignCode",
    title: "Option 16",
  },
  {
    key: "17",
    icon: () => h(RocketOutlined),
    label: "Figma",
    title: "Option 17",
  },
  {
    key: "18",
    icon: () => h(MehOutlined),
    label: "Sketch",
    title: "Option 18",
  },
  {
    key: "19",
    icon: () => h(IdcardOutlined),
    label: "Spline",
    title: "Option 19",
  },
]);
const useStyle = () => {
  return {
    fontSize: state.collapsed ? "20px" : "200px",
    // Add more styles as needed
  };
};

watch(
  () => state.openKeys,
  (_val, oldVal) => {
    state.preOpenKeys = oldVal;
  }
);
const toggleCollapsed = () => {
  state.collapsed = !state.collapsed;
  state.openKeys = state.collapsed ? [] : state.preOpenKeys;
};
</script>
<style scoped>
.sidebar {
  overflow-y: scroll;
  height: 700px;
}
.sidebar::-webkit-scrollbar {
  display: none;
}
.mainMenu-sidebar {
  background: linear-gradient(168deg, #2e335a 1.62%, #1c1b33 95.72%);
}
.menuChild-sidebar {
  background: linear-gradient(168deg, #2e335a 1.62%, #1c1b33 95.72%);
}
</style>
