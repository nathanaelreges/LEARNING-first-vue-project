<template>
   <input v-if="isEditMode" :value="value" type="text" rows="1" :class="inputClassName" ref="edit"
      @keydown.enter="$emit('onEnter')" @input="$emit('onInput', $event.target.value)" 
   >
   <span v-else @click="$emit('onSpanClick')" :class="spanClassName">
      {{ value }}   
   </span>
</template>

<script>
export default {
   name: 'spanOrInput',
   props: ['value', 'isEditMode', 'inputClassName', 'spanClassName'],
   updated() {
      if(this.isEditMode) {
        this.$refs.edit.focus()
      }
   }
};
</script>

<style scoped>
</style>  
