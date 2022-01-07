import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    horas: { revisao: "10 min", materia: "25 min" },
    materias: [
      { text: "Português" },
      { text: "Matemática" },
      { text: "História" },
      { text: "Geografia" },
      { text: "Literatura" },
      { text: "Inglês" },
    ],
  },
  mutations: {
    UPDATE_HORAS(state, payload) {
      state.horas = payload;
    },
    UPDATE_MATERIAS(state, payload) {
      state.materias = payload;
    },
  },
  actions: {
    atualizar_horas({ commit }, horas) {
      commit("UPDATE_HORAS", horas);
    },
    atualizar_materias({ commit }, materias) {
      commit("UPDATE_MATERIAS", materias);
    },
  },
  modules: {},
});
