<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <CyclesList />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CyclesList from '@/components/CyclesList.vue'

export default {
  name: 'Cycles',
  components: {
    CyclesList
  }
}
</script>
