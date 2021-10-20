<template>
  <div class="p-4 bg-white rounded-lg filter drop-shadow-lg">
    <div class="flex flex-row justify-between">
      <div
        v-for="index in 21"
        :key="index"
        class="w-4 h-4 rounded-full ring-1 ring-gray-400"
      />
    </div>
    <div class="flex flex-row py-4 mx-10 my-2 justify-between font-bold group">
      <button class="flex items-center">
        <fa
          :icon="['fas', 'chevron-left']"
          class="text-xl mr-4 text-gray-900"
        />
        <span class="text-xl text-military font-bold">{{ curMonth }}</span>
      </button>
      <div>
        <span class="text-base text-gray-900 mr-2">{{ curYear }}</span>
        <span class="text-6xl text-military mr-2">{{ curMonth + 1 }}</span>
        <span class="text-base text-gray-900">{{ month[curMonth] }}</span>
      </div>
      <button class="flex items-center">
        <span class="text-xl text-military font-bold">{{ curMonth + 2 }}</span>
        <fa
          :icon="['fas', 'chevron-right']"
          class="text-xl ml-4 text-gray-900"
        />
      </button>
    </div>

    <div class="flex flex-row py-1 divide-x divide-gray-400 justify-between">
      <div
        v-for="(day, index) in week"
        :key="index"
        class="flex w-full text-xl font-bold px-4 place-content-center"
        :class="
          index == 0
            ? 'text-red-400'
            : index == '6'
            ? 'text-blue-600'
            : 'text-gray-900'
        "
      >
        {{ day }}
      </div>
    </div>
    <div
      class="
        grid grid-cols-7
        auto-rows-fr
        rounded-lg
        p-2
        pl-1.5
        mt-1
        ring-1 ring-gray-400
        gap-2
        divide-x divide-y divide-gray-400
      "
    >
      <div v-for="(d, index) in list" :key="index">
        <CalendarBlock
          :focused="focused"
          :date="d"
          :cur-month="curMonth"
          :schedules="[]"
          :focus-obj="focusObj"
          class="flex mt-1 ml-1"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    focused: {
      type: String,
      default: ''
    },
    focusObj: {
      type: Function,
      default: (focused) => {}
    }
  },
  data() {
    return {
      week: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      month: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'Octover',
        'November',
        'December'
      ],
      date: new Date(Date.now()),
      curYear: 2021,
      curMonth: 9,
      list: []
    }
  },
  fetch() {
    if (new Date(this.curYear, this.curMonth, 1).getDay() !== 0)
      for (
        let i = -1 * new Date(this.curYear, this.curMonth, 1).getDay();
        i < 0;
        i++
      )
        this.list.push(
          new Date(
            this.curYear,
            this.curMonth - 1,
            new Date(this.curYear, this.curMonth - 1, 0).getDate() + i
          )
        )
    for (
      let i = 1;
      i <= new Date(this.curYear, this.curMonth + 1, 0).getDate();
      i++
    )
      this.list.push(new Date(this.curYear, this.curMonth, i))

    if (new Date(this.curYear, this.curMonth + 1, 0).getDay() !== 6)
      for (
        let i = 0;
        i < 6 - new Date(this.curYear, this.curMonth + 1, 0).getDay();
        i++
      )
        this.list.push(new Date(this.curYear, this.curMonth + 1, 1 + i))
  },
  update() {},
  methods: {
    lastDay(date) {
      // return new Date(date.getFullYear(), date.getMonth(), 0).getDate()
      return 28
    }
  }
}
</script>
