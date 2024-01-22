<script setup>
import Content from "../components/Short/Content.vue";
import Headshort from "../components/Short/Headshort.vue";
import NavMenu from "../components/Short/Navmenu.vue";
import LoadingDetails from "../components/Loading/LoadingDetail.vue";
</script>
<template>
  <div class="flex justify-center items-center mt-36" v-if="isLoadingDetail">
    <LoadingDetails size="100px" />
  </div>
  <div class="container-short" v-if="!isLoadingDetail">
    <Headshort :data="apiData" />
    <NavMenu></NavMenu>
    <Content :datas="apiDatas" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
    };
  },
  components: {
    Headshort,
    Content,
    NavMenu,
    LoadingDetails,
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

<style>
.container-short {
  height: 700px;
  overflow-y: scroll;
}
.container-short::-webkit-scrollbar {
  display: none;
}
</style>
