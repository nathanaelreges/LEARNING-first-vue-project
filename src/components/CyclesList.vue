<template>
<div>
   <div class="card shadow-sm">
      <div class="card-header text-center">
         <h4>Cycles</h4>
      </div>
      <div class="card-body">
         <ul class="list-group list-group-flush">
            <li v-for="item in list" :key="item.id" class="list-group-item list__item">
               <div ref="editContainers" class="list__content">
                  <input type="text" v-model="editCycleName" v-if="editingId === item.id" rows="1"
                     @keydown.enter="confirmEditCycle(item)" class="list__edit-content" ref="editName">
                  <span v-else >
                     {{ item.name }}   
                  </span>
               </div>
               <div class="list__buttons">
                  <button v-if="editingId === item.id" class="btn btn-outline-secondary btn-sm ml-2"
                     @click="confirmEditCycle(item)"
                  >
                     <i class="fa fa-check "></i>
                  </button>
                  <button v-else class="btn btn-outline-secondary btn-sm ml-2"
                     @click="editCycle(item)"
                  >
                     <i class="fa fa-edit"></i>
                  </button>
                  <button class="btn btn-outline-secondary btn-sm ml-2"
                     @click="removeCycle(item)"
                  >
                     <i class="fa fa-trash-o "></i>
                  </button>
               </div>
            </li>
         </ul>  
      </div>
      <div class="card-footer">
         <div class="input-group">
            <input v-model="newCycleName" type="text" class="form-control" @keydown.enter="_addCycle"
               placeholder="Enter a new Cycle" aria-label="Enter a new Cycle" aria-describedby="basic-addon2">
            <div class="input-group-append">
               <button class="btn btn-primary" type="button" @click="_addCycle">Add</button>
            </div>
         </div>
      </div>
   </div>
</div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex';

export default {
   name: "CyclesList",
   data() {
      return {
         newCycleName: '',
         editCycleName: '',
         editingId: undefined,
         lastId: 10 ,
         focusOnEdit: false,
      }
   },
   computed: {
      ...mapState('cycles', ['list']),
   },
   methods: {
      _addCycle () {
         this.addCycle(this.newCycleName)
         this.newCycleName = ''
      },
      editCycle (item) {
         this.editingId = item.id
         this.editCycleName = item.name   
         this.focusOnEdit = true
      },
      confirmEditCycle (item) {
         this.updateCycle({item, newName: this.editCycleName})
         this.editCycleName = ''
         this.editingId = undefined
      },
      ...mapMutations('cycles', ['addCycle', 'removeCycle', 'updateCycle']),
   },
   updated () {
      if(this.focusOnEdit) {
         this.$refs.editName[0].focus()
         this.focusOnEdit = false
      }
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
