<template>
   <button v-if="isEditMode" class="btn btn-outline-secondary btn-sm ml-2"
      @click="$emit('onSave')">
      <i class="fa fa-check "></i>
   </button>
   <button v-else class="btn btn-outline-secondary btn-sm ml-2"
      @click="$emit('onEdit')">
      <i class="fa fa-edit"></i>
   </button>
</template>

<script>
export default {
   name: "editConfirmBtn",
   props: [
      'isEditMode'
   ]
}
</script>

<style scoped>

</style>  
