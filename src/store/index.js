import { getFilm, getFilmById } from "../service/service";
import { createStore } from "vuex";
const store = createStore({
  state: {
    films: [],
    film: {},
    loading: false,
    loadingDetail: false,
    error: null,
    errorDetail: null,
  },
  mutations: {
    setData(state, data) {
      state.films = data;
    },
    setDataDetail(state, data) {
      state.film = data;
    },
    setLoading(state, status) {
      state.loading = status;
    },
    setLoadingDetail(state, status) {
      state.loadingDetail = status;
    },
    setError(state, err) {
      state.error = err;
    },
    setErrorDetail(state, status) {
      state.errorDetail = status;
    },
  },
  actions: {
    async fetchData({ commit }) {
      try {
        commit("setLoading", true);
        const response = await getFilm();
        commit("setData", response);
      } catch (error) {
        commit("setError", error);
      } finally {
        commit("setLoading", false);
      }
    },
    async fetchDataDetail({ commit }, id) {
      try {
        commit("setLoadingDetail", true);
        const response = await getFilmById(id);
        commit("setDataDetail", response);
      } catch (error) {
        commit("setErrorDetail", error);
      } finally {
        commit("setLoadingDetail", false);
      }
    },
  },
  getters: {
    isLoading: (state) => state.loading,
    isLoadingDetail: (state) => state.loadingDetail,
    error: (state) => state.error,
    errorDetail: (state) => state.errorDetail,
    films: (state) => state.films,
    film: (state) => state.film,
  },
});

export default store;
