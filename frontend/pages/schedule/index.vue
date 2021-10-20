<template>
  <div class="flex items-center justify-items-center">
    <div class="absolute items-center">
      <ScheduleSidebar
        class="absolute z-50"
        :is-show="showSideBar"
        :is-group="isGroup"
        :insert="insertSchedule"
        :is-select-all="isSelectAll"
        :select-all-toggle="selectAllToggle"
        :select-group-tab="selectGroupTab"
      />
      <button
        v-if="showSideBar"
        class="text-2xl text-gray-400 ml-1 p-1"
        @click="showSideBar = false"
      >
        <fa :icon="['fas', 'caret-left']" />
      </button>
    </div>
    <div class="flex flex-row gap-6 m-auto items-center">
      <Calendar class="w-160" />
      <div>
        <div class="flex flex-col h-160 w-64 overflow-auto justify-between">
          <button
            class="
              flex
              w-60
              h-16
              z-50
              bg-white
              rounded-b-2xl
              filter
              drop-shadow-xl
              items-center
            "
          >
            <fa :icon="['fas', 'chevron-up']" class="flex text-2xl m-auto" />
          </button>
          <div class="absolute flex flex-col w-60 h-160 overflow-auto gap-4">
            <div v-for="index in 12" :key="index" class="filter drop-shadow-lg">
              <ScheduleBlock
                :month="index"
                :insert="insertSchedule"
                :schedules="schedules"
              />
            </div>
          </div>
          <button
            class="
              flex
              w-60
              h-16
              z-50
              bg-white
              rounded-t-2xl
              filter
              drop-shadow-2xl
              items-center
            "
          >
            <fa :icon="['fas', 'chevron-down']" class="flex text-2xl m-auto" />
          </button>
        </div>
      </div>
    </div>
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
      isSelectAll: false,
      schedules: [
        {
          id: 1,
          title: '국군의 날',
          startTime: new Date(2021, 9, 1),
          endTime: null,
          isHoliday: true,
          place: '',
          memo: ''
        },
        {
          id: 6,
          title: '쉬는 날',
          startTime: new Date(2021, 9, 3, 16, 33),
          endTime: new Date(2021, 9, 5, 6, 9),
          isHoliday: true,
          place: '',
          memo: ''
        },
        {
          id: 4,
          title: '노말',
          startTime: new Date(2021, 9, 5),
          endTime: null,
          isHoliday: false,
          place: '집',
          memo: '주의'
        },
        {
          id: 5,
          title: '더 쉬는 날',
          startTime: new Date(2021, 9, 5),
          endTime: null,
          isHoliday: false,
          place: '',
          memo: ''
        }
      ]
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
