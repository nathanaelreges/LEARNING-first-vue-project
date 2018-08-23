<template>
<div>
   <div class="card text-center">
      <div class="card-header">
         <h4>Cycles</h4> 
      </div>
      <div class="card-body">
         <ul class="list-group list-group-flush">
            <li v-for="item in list" :key="item.id" class="list-group-item">
               {{ item.name }}
            </li>
         </ul>  
      </div>
      <div class="card-footer">
         <div class="input-group">
            <input v-model="newCycleName" type="text" class="form-control" 
               placeholder="Type new Cycle" aria-label="Type a new Cycle" aria-describedby="basic-addon2">
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
            { name: "Janeiro" },
            { name: "Fevereiro" },
            { name: "Março" },
            { name: "Abril" }
         ]
      }
   },
   methods: {
      addCycle () {
         this.list.push({name: this.newCycleName})
      }
   }
}
</script>

<style scoped>

.list-group-item {
   border: none;
}

</style>  
