<template>
  <div class="flex justify-center">
    <div class="w-14 pr-4">
      <div class="mt-12">
        <div
          v-for="(n, hourIdx) in durationHours + 1"
          :key="hourIdx"
          class="h-14 text-right text-gray-500 text-lg font-bold"
        >
          {{ parseTime(start).getHours() + hourIdx }}시
        </div>
      </div>
    </div>
    <div v-for="(date, dateIdx) in dates" :key="dateIdx" class="w-40">
      <span
        class="block text-lg text-center font-bold"
        :class="
          date.getDay() == 0
            ? 'text-red-500'
            : date.getDay() == 6
            ? 'text-blue-500'
            : 'text-gray-500'
        "
      >
        {{
          `${date.getMonth() + 1}/${date.getDate()} (${korDays[date.getDay()]})`
        }}
      </span>
      <div
        class="mt-8 relative"
        :class="dateIdx != 0 && 'border-l-2 border-gray-500'"
      >
        <div v-for="schedule in schedules" :key="schedule.id">
          <div
            v-if="date.getDate() === new Date(schedule.date).getDate()"
            class="
              absolute
              w-full
              bg-green-400
              rounded-xl
              text-white text-lg text-center
              font-bold
              flex justify-center items-center
            "
            :style="`top: ${parseInt(
              getHourDifference(
                parseTime(schedule.start_time),
                parseTime(start)
              ) * 56
            )}px; height:${parseInt(
              getHourDifference(
                parseTime(schedule.end_time),
                parseTime(schedule.start_time)
              ) * 56
            )}px;`"
          >
            <p class="text-center">
              {{ schedule.name }}
              <br v-if="schedule.name && schedule.note" />
              {{ schedule.note }}
            </p>
          </div>
        </div>
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
    start: {
      type: String,
      default: '09:00'
    },
    end: {
      type: String,
      default: '24:00'
    },
    schedules: {
      type: Array,
      default: () => {
        return [
          {
            date: '',
            name: '',
            start_time: new Date(),
            end_time: new Date(),
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
        this.parseTime(this.end).getHours() +
        (this.parseTime(this.end).getMinutes() > 0 && 1) -
        this.parseTime(this.start).getHours()
      )
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
  methods: {
    getHourDifference(t1, t2) {
      return (
        t1.getHours() +
        t1.getMinutes() / 60 -
        (t2.getHours() + t2.getMinutes() / 60)
      )
    },
    parseTime(time) {
      const temp = time.split(':')
      const date = new Date()
      date.setHours(temp[0])
      date.setMinutes(temp[1])
      return date
    }
  }
}
</script>
