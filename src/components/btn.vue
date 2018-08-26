<template>
   <button class="btn btn-outline-secondary btn-sm ml-2"
      @click="$emit('onClick')">
      <i :class="'fa fa-' + icon"></i>
   </button>
</template>

<script>
export default {
   name: "card",
   props: ['icon']
}
</script>

<style scoped>

</style>  