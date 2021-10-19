<template>
  <button
    class="w-full h-full p-2 border-gray-400 border-2"
    :class="cmpFocused() && 'rounded-lg border-dashed border-2 border-blue-400'"
  >
    <p
      class="ml-1 p-1 text-left font-bold border-2 border-gray-600"
      :class="
        (isHoliday || date.getDay() == 0
          ? 'text-red-400'
          : date.getDay() == 6
          ? 'text-blue-600'
          : 'text-gray-600',
        date.getDate().toString().length < 2 && 'pl-1')
      "
    >
      {{ date.getDate() }}
    </p>
    <ul>
      <li
        v-for="(schedule, index) in schedules"
        :key="index"
        class="list-disc ml-2 p-1 text-sm text-center font-bold"
        :class="
          (schedule.isHoliday ? 'text-red-400' : 'text-gray-600',
          cmpFocused(index) &&
            'rounded-lg border-dashed border-2 border-blue-400')
        "
        @click="
          focusObj(
            date.getFullYear() +
              '-' +
              date.getMonth() +
              '-' +
              date.getDate() +
              '-' +
              index.toString()
          )
        "
      >
        {{ schedule.title }}
      </li>
    </ul>
  </button>
</template>
<script>
export default {
  props: {
    focused: {
      type: String,
      default: ''
    },
    date: {
      type: Date,
      default: new Date()
    },
    schedules: {
      type: Array,
      default: () => []
    },
    focusObj: {
      type: Function,
      default: (focused) => {}
    }
  },
  data() {
    return {
      isHoliday: false
    }
  },
  fetch() {
    for (let i = 0; i < this.schedules.length; i++)
      this.isHoliday |= this.schedules[i].isHoliday
  },
  methods: {
    cmpFocused(index = null) {
      const tmp = this.focused.split('-')

      if (
        this.date.getFullYear() !== parseInt(tmp[0]) ||
        this.date.getMonth() !== parseInt(tmp[1]) ||
        this.date.getDate() !== parseInt(tmp[2])
      ) {
        return false
      } else if (tmp.length === 4 && index !== parseInt(tmp[3])) {
        return false
      }
      return true
    }
  }
}
</script>
