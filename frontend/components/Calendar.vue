<template>
  <div class="grid grid-rows-5 grid-cols-7 divide-x divide-2 divide-gray-400">
    <ul>
      <li v-for=""
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    focused: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      date: Date.now(),
      curYear: 2021,
      curMonth: 10
    }
  }
}
</script>
