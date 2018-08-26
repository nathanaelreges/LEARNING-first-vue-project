<template>
   <card>
      <template slot="header">
         <h4>Cycles</h4>
      </template>
      
      <ul class="list-group list-group-flush">
         <li v-for="item in list" :key="item.id" class="list-group-item list__item">
            <div ref="editContainers" class="list__content">
               <span-or-input :value="item.name" :isEditMode="editingId === item.id"
                  inputClassName="list__edit-content" @onInput="updateEditCycle"
               >
               </span-or-input>
            </div>
            <div class="list__buttons">
               <editConfirmBtn :isEditMode="editingId === item.id"
                  @onEdit="initEditCycle(item)" @onSave="confirmEditCycle(item)">
               </editConfirmBtn>
               <button class="btn btn-outline-secondary btn-sm ml-2"
                  @click="removeCycle(item)">
                  <i class="fa fa-trash-o "></i>
               </button>
            </div>
         </li>
      </ul>  
      
      <template slot="footer">
         <div class="input-group">
            <input v-model="newCycleName" type="text" class="form-control" @keydown.enter="_addCycle"
               placeholder="Enter a new Cycle" aria-label="Enter a new Cycle" aria-describedby="basic-addon2">
            <div class="input-group-append">
               <button class="btn btn-primary" type="button" @click="_addCycle">Add</button>
            </div>
         </div>
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
         newCycleName: '',
         editCycleName: '',
         editingId: undefined,
         focusOnEdit: false,
      }
   },
   computed: {
      ...mapState('cycles', ['list']),
   },
   methods: {
      _addCycle () {
         const newName = this.newCycleName.trim()
         if(!newName){return}
         
         this.addCycle(newName)
         this.newCycleName = ''
      },
      initEditCycle (item) {
         this.editingId = item.id
         this.editCycleName = item.name   
         this.focusOnEdit = true
      },
      updateEditCycle (value) {
         this.editCycleName = value
      },
      confirmEditCycle (item) {
         const newName = this.editCycleName.trim()
         
         if(newName){
            this.updateCycle({item, newName})   
         }

         this.editCycleName = ''
         this.editingId = undefined
      },
      ...mapMutations('cycles', ['addCycle', 'removeCycle', 'updateCycle']),
   },
   updated () {
      /*if(this.focusOnEdit) {
         this.$refs.editName[0].focus()
         this.focusOnEdit = false
      }*/
   }
}
</script>

<style scoped>

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



</style>  
