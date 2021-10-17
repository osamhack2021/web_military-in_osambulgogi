<template>
  <div class="flex justify-center">
    <div class="w-14 pr-4">
      <div class="mt-12">
        <div
          v-for="(n, hourIdx) in durationHours+1"
          :key="hourIdx"
          class="h-14 text-right text-gray-500 text-lg font-bold"
        >
          {{ start.getHours() + hourIdx }}시
        </div>
      </div>
    </div>
    <div v-for="(date, dateIdx) in dates" :key="dateIdx" class="w-40">
      <span class="block text-lg text-center font-bold"
        :class="dateIdx == 0 ? 'text-red-500' : dateIdx == 6 ? 'text-blue-500' : 'text-gray-500'">
        {{
          `${date.getMonth() + 1}/${date.getDate()} (${korDays[date.getDay()]})`
        }}
      </span>
      <div class="mt-8" :class="dateIdx != 0 && 'border-l-2 border-gray-500'">
        <div v-for="(n, hourIdx) in durationHours" :key="hourIdx" class="h-14">
          <div
            class="mx-2 h-14 border-t border-gray-300"
            :class="n == durationHours && 'border-b'"
          ></div>
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
  computed: {
    durationHours() {
      return (
        this.end.getHours() +
        (this.end.getMinutes() > 0 && 1) -
        this.start.getHours()
      )
    }
  },
  mounted() {
    alert(this.start)
    alert(this.end)
    this.dates.push(new Date())
    for (let i = 0; i < 6; i++) {
      const nextDate = new Date(this.dates[this.dates.length - 1].getTime())
      nextDate.setDate(nextDate.getDate() + 1)
      this.dates.push(nextDate)
    }
  },
  methods: {
  }
}
</script>
