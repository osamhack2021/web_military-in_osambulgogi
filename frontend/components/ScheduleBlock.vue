<template>
  <div></div>
</template>

<script>
export default {
  props:{
    schedules:{
      type:Array,
      default:()=>['No schedule']
    }
  },
  data() {
    return {
      curUser: -1,
      groupId: -1
    }
  },
  methods:{

  }
}
</script>
