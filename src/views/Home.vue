<script setup>
import Loading from "../components/loading/loading.vue";
import Error from "../views/Error.vue";
import Card from "../components/Card/Car.vue";
</script>

<template>
  <div class="" v-if="isLoading">
    <Loading></Loading>
  </div>
  <h2 v-if="error">Lỗi rồi :D></h2>
  <div v-if="!isLoading && !error" class="card-container">
    <div v-for="item in apiData" :key="item.id">
      <Card :data="item" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Loading,
    Error,
    Card,
  },
  computed: {
    apiData() {
      return this.$store.getters.films;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
    error() {
      return this.$store.getters.error;
    },
  },
  methods: {
    fetchDataFilms() {
      this.$store.dispatch("fetchData");
    },
  },
  mounted() {
    this.fetchDataFilms();
  },
};
</script>

<style scoped>
.container {
  overflow-y: scroll;
  height: 700px;
}
.container::-webkit-scrollbar {
  display: none;
}
.card-container {
  overflow-y: scroll;
  height: 700px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-left: 20px;
}
.card-container::-webkit-scrollbar {
  display: none;
}
</style>
