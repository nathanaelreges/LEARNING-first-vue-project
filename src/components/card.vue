<template>
<div>
   <div class="card shadow-sm">
      <div class="card-header text-center">
         <slot name="header"></slot>
      </div>
      <div class="card-body">
         <slot></slot>  
      </div>
      <div class="card-footer">
         <slot name="footer"></slot>
      </div>
   </div>
</div>
</template>

<script>
export default {
   name: "card",
}
</script>

<style scoped>

</style>  
