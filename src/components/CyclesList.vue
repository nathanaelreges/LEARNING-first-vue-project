<template>
<div>
   <div class="card shadow-sm">
      <div class="card-header text-center">
         <h4>Cycles</h4> 
      </div>
      <div class="card-body">
         <ul class="list-group list-group-flush">
            <li v-for="item in list" :key="item.id" class="list-group-item">
               {{ item.name }}
               <button class="btn btn-outline-secondary float-right btn-sm"
                  @click="removeCycle(item)"
               >
                  <i class="fa fa-trash-o "></i>
               </button>
            </li>
         </ul>  
      </div>
      <div class="card-footer">
         <div class="input-group">
            <input v-model="newCycleName" type="text" class="form-control" 
               placeholder="Enter a new Cycle" aria-label="Enter a new Cycle" aria-describedby="basic-addon2">
            <div class="input-group-append">
               <button class="btn btn-primary" type="button" @click="addCycle">Add</button>
            </div>
         </div>
      </div>
   </div>
</div>
</template>

<script>
export default {
   name: "CyclesList",
   data() {
      return {
         newCycleName: '',
         list: [
            { name: "Janeiro", id: 1},
            { name: "Fevereiro", id: 2},
            { name: "Março", id: 3},
            { name: "Abril", id: 4}
         ],
         lastId: 10 
      }
   },
   methods: {
      addCycle () {
         this.list.push({name: this.newCycleName, id: ++this.lastId})
         this.newCycleName = ''
      },
      removeCycle (item) {
         this.list.splice(this.list.indexOf(item), 1)
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

</style>  
