<template>
  <div class="flex items-center justify-between">
    <transition name="slide"
      ><ScheduleSidebar :is-show="showSideBar" :is-group="isGroup"
    /></transition>
    <div class="w-160 h-160"></div>
    <ScheduleBlock />
    <Button shadow @click="showSideBar = !showSideBar"></Button>
    <Button shadow @click="showModal = true"></Button>
    <ScheduleModal v-if="showModal" @close="showModal = false" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isGroup: false,
      showSideBar: false,
      showModal: false
    }
  }
}
</script>
<style>
.slide-enter-active {
  transition: all 0.3s ease;
}
.slide-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-70px);
}
.slide-leave-to {
  transform: translateX(10);
}
</style>
