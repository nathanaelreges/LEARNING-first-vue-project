<template>
<div>
   <div class="card text-center">
    <ul class="list-group list-group-flush">
      <li v-for="item in list" :key="item.id" class="list-group-item">
        {{ item.name }}
      </li>
    </ul>  
   </div>
</div>
</template>

<script>
export default {
   name: "CyclesList",
   data() {
      return {
         list: [
         { name: "Janeiro" },
         { name: "Fevereiro" },
         { name: "Março" },
         { name: "Abril" }
         ],
         name: "arroz"
      }
   }
}
</script>

<style scoped>
</style>  
