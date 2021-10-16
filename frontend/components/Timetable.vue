<template>
  <div>
  </div>
</template>

<script>
export default {
  props: {
    schedules: {
      type: Array,
      default: () => {
        return [
          {
            name: '',
            start_time: '',
            end_time: '',
            note: ''
          }
        ]
      }
    }
  }
}
</script>
