<template>
  <div class="flex justify-center">
    <div v-for="(date, dateIdx) in dates" :key="dateIdx" class="w-40">
      <span class="block text-lg text-center font-bold">
        {{
          `${date.getMonth() + 1}/${date.getDate()} (${korDays[date.getDay()]})`
        }}
      </span>
      <div
        class="mt-4"
        :class="dateIdx !== dates.length - 1 && 'border-r border-gray-400'"
      >
        <div
          v-for="(n, hourIdx) in end.getHours() - start.getHours()"
          :key="hourIdx"
          class="h-14"
        >
          {{ start.getHours() + hourIdx }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    start: Date,
    end: Date,
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
  },
  data() {
    return {
      dates: [],
      korDays: ['일', '월', '화', '수', '목', '금', '토']
    }
  },
  mounted() {
    this.dates.push(new Date())
    for (let i = 0; i < 6; i++) {
      const nextDate = new Date(this.dates[this.dates.length - 1].getTime())
      nextDate.setDate(nextDate.getDate() + 1)
      this.dates.push(nextDate)
    }
  },
  methods: {}
}
</script>
