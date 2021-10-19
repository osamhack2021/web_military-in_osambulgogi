<template>
  <div class="flex items-center">
    <ScheduleSidebar
      class="absolute h-full"
      :is-show="showSideBar"
      :is-group="isGroup"
      :insert="insertSchedule"
      :is-select-all="isSelectAll"
      :select-all-toggle="selectAllToggle"
      :select-group-tab="selectGroupTab"
    />
    <button
      v-if="showSideBar"
      class="absolute text-2xl text-gray-400 ml-1 p-1"
      @click="showSideBar = false"
    >
      <fa :icon="['fas', 'caret-left']" />
    </button>
    <Calendar class="absolute m-auto justify-items-center" />
    <CalendarBlock
      :focused="'2021-10-19-0'"
      :date="new Date(2021, 10, 17, 16, 33)"
      :schedules="[{ title: 'holy', isHoliday: false }]"
    />
    <ScheduleBlock />
    <button>dddd</button>
    <ScheduleModal v-if="showModal" @close="showModal = false" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isGroup: true,
      showSideBar: false,
      showModal: false,
      isSelectAll: false
    }
  },
  methods: {
    insertSchedule() {
      this.showModal = true
    },
    selectAllToggle() {
      this.isSelectAll = !this.isSelectAll
    },
    selectGroupTab(isGroup) {
      this.isGroup = isGroup
      this.showSideBar = true
    }
  }
}
</script>
