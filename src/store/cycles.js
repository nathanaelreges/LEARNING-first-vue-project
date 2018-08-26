import Vue from 'vue'

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
      removeCycle (state, item) {
         state.list.splice(state.list.indexOf(item), 1)
      },
      updateCycle (state, {item, newName}) {
         console.log(newName)
         Vue.set(item, 'name', newName)
      },
   },
};
