<template>
   <card v-if="cycle">
      <template slot="header">
         <h4>{{cycle.name}}</h4>
      </template>
      
      <ul class="list-group list-group-flush">
         <li v-for="item in cycle.list" :key="item.id" class="list-group-item list__item">
            <div class="row list__content">
               <div v-bind:class="getValueClasses(item)">
                  R$
                  <span-or-input :value="item.value" :isEditMode="editingId === item.id"
                     inputClassName="list__edit-content" spanClassName="list__span"
                     @onInput=";" @onSpanClick=";">
                  </span-or-input>
               </div>
               <div class="col-sm-10">
                  <span-or-input :value="item.name" :isEditMode="editingId === item.id"
                     inputClassName="list__edit-content" spanClassName="list__span"
                     @onInput=";" @onSpanClick=";">
                  </span-or-input>
               </div>
            </div>
            <div class="list__buttons">
               <edit-confirm-btn :isEditMode="editingId === item.id"
                  @onEdit=";" @onSave=";">
               </edit-confirm-btn>
               <btn icon="trash-o" @onClick=";"></btn>
            </div>
         </li>
      </ul>
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
import btn from './btn.vue'

export default {
   name: "CyclesList",
   components : {
      card,
      editConfirmBtn,
      spanOrInput,
      btn,
   },
   data() {
      return {
         editingId: 100
      }
   },
   computed: {
      cycle: mapState('cycles', ['selectedCycle']).selectedCycle,
   },
   methods: {
      getValueClasses (item) {
         return {
            'col-sm-2': true,
            'list__value': true,
            'list__value--debit': item.value < 0
         }
      }
   },
}
</script>

<style scoped>


.list__value {
   color: green;
}

.list__value--debit {
   color:red;
}

.list-group-item {
   border: none;
   text-align: left;
   padding: 5px;
}

.list__item {
   display: flex;
   align-items: center;
}

.list__content {
   flex-grow: 1;
   display: flex;;
}

.list__edit-content {
   resize: none;
   border: none;
   flex-grow: 1;
   outline: none;
   margin-bottom: -1px;
   border-bottom: 1px solid black;
}

.list__edit-content:focus {
   margin-bottom: -2px;
   border-bottom: 2px solid skyblue;
}

.list__span {
   cursor: pointer;
}

</style>  
