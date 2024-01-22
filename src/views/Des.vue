<template>
  <div class="mx-5 mt-5 xl:flex">
    <div v-if="error">hhehe</div>
    <div class="xl:w-[70%]">
      <div
        class="flex items-center justify-center mt-[200px]"
        v-if="isLoadingDetail"
      >
        <LoadingDetail size="50px" />
      </div>
      <div v-if="!isLoadingDetail">
        <img class="w-[100%] object-cover" :src="apiData.image" alt="" />
        <Infomation :data="apiData"></Infomation>
      </div>
    </div>
    <div class="w-[30%] mx-7 flex side-bar">
      <div v-if="isLoading">
        <LoadingSidebar />
      </div>
      <div v-if="!isLoading" class="flex flex-col gap-3">
        <Sidebar :data="apiDatas"></Sidebar>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingDetail from "../components/Loading/LoadingDetail.vue";
import LoadingSidebar from "../components/Loading/LoadingSidebar.vue";
import Sidebar from "../components/Details/sidebar.vue";
import Infomation from "../components/Details/infomation.vue";
export default {
  data() {
    return {
      id: null,
    };
  },
  components: {
    LoadingDetail,
    Sidebar,
    LoadingSidebar,
    Infomation,
  },
  computed: {
    apiData() {
      return this.$store.getters.film;
    },
    apiDatas() {
      return this.$store.getters.films;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
    isLoadingDetail() {
      return this.$store.getters.isLoading;
    },
    error() {
      return this.$store.getters.errorDetail;
    },
  },
  methods: {
    fetchDataFilms() {
      this.$store.dispatch("fetchDataDetail", this.id);
      this.$store.dispatch("fetchData");
    },
  },
  watch: {
    "$route.params.id"(newId, oldId) {
      this.id = newId;
      this.fetchDataFilms();
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.fetchDataFilms();
  },
};
</script>

<style scoped>
.side-bar {
  height: 850px;
  overflow-y: scroll;
}
.side-bar::-webkit-scrollbar {
  display: none;
}
</style>
