<template>
   <card v-if="cycle">
      <template slot="header">
         <h4>{{cycle.name}}</h4>
      </template>
      
   
      <template slot="footer">
         
      </template>
   </card>
</template>

<script>
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex';

import card from './card.vue'
import editConfirmBtn from './editConfirmBtn.vue'
import spanOrInput from './spanOrInput.vue'

export default {
   name: "CyclesList",
   components : {
      card,
      editConfirmBtn,
      spanOrInput
   },
   data() {
      return {
      }
   },
   computed: {
      cycle: mapState('cycles', ['selectedCycle']).selectedCycle,
   },
   methods: {
   },
}
</script>

<style scoped>


</style>  
