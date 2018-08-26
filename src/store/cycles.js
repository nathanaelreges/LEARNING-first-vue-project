import Vue from 'vue'

export default {
   namespaced: true,
   state: {
      list: [
         { name: "Janeiro", id: 1,
            list: [
               {value: 10, name: 'Caroninha', id: 5},
               {value: -10, name: 'Pão de Sal', id: 6},
               {value: 140, name: 'Site do João', id: 7},
               {value: -290, name: 'Carro zero', id: 8},
            ]
         },
         { name: "Fevereiro", id: 2},
         { name: "Março", id: 3},
         { name: "Abril", id: 4}
      ],
      lastId: 10,
      selectedCycle: undefined,
   },
   actions: {
      saveTask({ commit }, payload) {
         alert()
      }
   },
   getters: {
   },
   mutations: {
      selectCycle(state, payload) {
         state.selectedCycle = payload
      },
      addCycle (state, payload) {
         state.list.push({name: payload, id: ++state.lastId})
      },
      removeCycle (state, item) {
         state.list.splice(state.list.indexOf(item), 1)
      },
      updateCycle (state, {item, newName}) {
         Vue.set(item, 'name', newName)
      },
   },
};
