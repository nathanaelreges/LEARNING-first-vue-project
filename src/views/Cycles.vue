<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <CyclesList />
      </div>
      <div class="col-md-7">
        <Cycle />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CyclesList from '@/components/CyclesList.vue'
import Cycle from '@/components/Cycle.vue'

export default {
  name: 'Cycles',
  components: {
    CyclesList,
    Cycle
  }
}
</script>
