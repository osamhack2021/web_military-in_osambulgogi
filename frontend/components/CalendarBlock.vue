<template>
  <div
    class="w-full h-20"
    :class="cmpFocused() && 'rounded-lg border-dashed border-2 border-blue-400'"
  >
    <p
      class="text-sm ml-1 text-left font-bold"
      :class="
        date.getMonth() !== curMonth
          ? 'text-gray-400'
          : isHoliday || date.getDay() == 0
          ? 'text-red-400'
          : date.getDay() == 6
          ? 'text-blue-600'
          : 'text-gray-900'
      "
    >
      {{ date.getDate() }}
    </p>
    <ul>
      <li
        v-for="(schedule, index) in schedules"
        :key="index"
        class="list-disc ml-2 p-1 text-xs text-center font-bold"
        :class="[
          schedule.isHoliday ? 'text-red-400' : 'text-gray-900',
          cmpFocused(index) &&
            'rounded-lg border-dashed border-2 border-blue-400'
        ]"
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
  </div>
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
      default: () => {
        return new Date()
      }
    },
    curMonth: {
      type: Number,
      default: 0
    },
    schedules: {
      type: Array,
      default: () => [{ title: 'holy', isHoliday: false }]
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
