export default {
   namespaced: true,
   state: {
      list: [
         { name: "Janeiro", id: 1},
         { name: "Fevereiro", id: 2},
         { name: "Março", id: 3},
         { name: "Abril", id: 4}
      ],
      lastId: 10
   },
   actions: {
      saveTask({ commit }, payload) {
         alert()
      }
   },
   getters: {
   },
   mutations: {
      addCycle (state, payload) {
         state.list.push({name: payload, id: ++state.lastId})
      },
   },
};
