<template>
  <div
    class="w-60 p-1 rounded-lg bg-gray-200 ring-2 ring-gray-400 items-center"
  >
    <div class="flex flex-row mx-1 justify-between items-center">
      <div class="text-sm text-gray-600 font-bold">
        <fa
          :icon="['fas', 'thumbtack']"
          class="text-xs mr-1 transform rotate-45"
        />
        {{ month }}월
      </div>
      <button v-if="!isCollapsed" class="flex" @click="isCollapsed = true">
        <fa :icon="['fas', 'plus']" class="text-xs text-gray-600" />
      </button>
      <div v-else class="flex flex-row text-sm text-gray-600 items-center">
        <button
          class="flex w-4 h-4 mr-2 border-dashed border-2 border-gray-400"
          @click="isSelectAll = !isSelectAll"
        >
          <fa v-if="isSelectAll" :icon="['fas', 'check']" class="text-xs" />
        </button>
        <button @click="insert">
          <fa :icon="['fas', 'plus-square']" class="text-gray-600 mr-2" />
        </button>
        <button @click="isCollapsed = false">
          <fa :icon="['fas', 'minus']" class="text-gray-600" />
        </button>
      </div>
    </div>
    <div v-if="isCollapsed" class="flex flex-col mt-2 mx-2 gap-2">
      <div v-for="(schedule, index) in schedules" :key="index">
        <div
          v-if="schedule.startTime.getMonth() === month - 1"
          class="
            flex
            p-1
            rounded-lg
            bg-white
            ring-2 ring-gray-400
            text-sm
            font-bold
          "
        >
          <div class="mr-2">
            {{ month }}/{{ schedule.startTime.getDate()
            }}{{
              schedule.endTime !== null &&
              schedule.startTime.getDate() !== schedule.endTime.getDate()
                ? ' ~ ' + month + '/' + schedule.endTime.getDate()
                : ''
            }}
          </div>
          <div
            v-if="
              schedule.startTime.getHours() !== 0 ||
              schedule.startTime.getMinutes()
            "
          >
            {{
              schedule.startTime.getHours() +
              ':' +
              schedule.startTime.getMinutes()
            }}{{
              schedule.endTime
                ? ' ~ ' +
                  schedule.endTime.getHours() +
                  ':' +
                  schedule.endTime.getMinutes()
                : ''
            }}
          </div>
          <p v-if="schedule.place.length !== 0" class="mr-2">
            {{ schedule.place }}
          </p>
          <p v-if="schedule.memo.length !== 0">{{ schedule.memo }}</p>
        </div>
        <div class="items-start"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    month: {
      type: Number,
      default: 0
    },
    schedules: {
      type: Array,
      default: () => []
    },
    insert: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      isCollapsed: false,
      isSelectAll: false,
      objSchedules: []
    }
  },
  methods: {}
}
</script>
