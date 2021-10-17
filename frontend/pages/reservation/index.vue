<template>
  <div class="lg:w-3/4 m-auto">
    <div class="flex justify-between">
      <Dropdown
        :options="facilities.map((x) => x.name)"
        :values="facilities"
        :on-select="onDropdownSelect"
      />
      <Button shadow @click="showModal = true">
        <fa :icon="['fas', 'plus']" class="mr-1" />
        예약 추가
      </Button>
      <ReservationModal
        v-if="showModal"
        @close="showModal = false"
        @submit="onModalSubmit"
      />
    </div>
    <div class="mx-6 mt-14">
      <Timetable
        v-if="selectedFacility.use_timetable"
        :start="selectedFacility.weekend_open_start"
        :end="selectedFacility.weekend_open_end"
        :schedules="reservations"
      />
      <Table v-else :columns="columns" :values="reservations" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      facilities: [],
      selectedFacility: {
        name: '',
        id: -1,
        use_timetable: false
      },
      columns: [],
      reservations: [],
      showModal: false
    }
  },
  async fetch() {
    await this.fetchFacility()
    await this.fetchTable(this.facilities[0].id)
  },
  methods: {
    async fetchFacility() {
      // this.facilities = await $axios.get('/facility')
      // Response: name, id
      this.facilities = await new Promise((resolve) => resolve())

      this.facilities = [
        {
          name: '사이버지식정보방1',
          id: 1,
          use_timetable: false,
          open_start: '09:00',
          open_end: '20:30',
          weekend_open_start: '09:00',
          weekend_open_end: '20:30'
        },
        {
          name: '사이버지식정보방2',
          id: 2,
          use_timetable: false,
          open_start: '09:00',
          open_end: '20:30',
          weekend_open_start: '09:00',
          weekend_open_end: '20:30'
        },
        {
          name: '노래방',
          id: 3,
          use_timetable: true,
          open_start: '09:00',
          open_end: '20:30',
          weekend_open_start: '09:00',
          weekend_open_end: '20:30'
        },
        {
          name: '휴게실',
          id: 4,
          use_timetable: true,
          open_start: '07:00',
          open_end: '23:00',
          weekend_open_start: '07:00',
          weekend_open_end: '23:00'
        }
      ]
      this.facilities.map((x) => {
        x.open_start = this.parseTime(x.open_start)
        x.open_end = this.parseTime(x.open_end)
        x.weekend_open_start = this.parseTime(x.weekend_open_start)
        x.weekend_open_end = this.parseTime(x.weekend_open_end)
        return x
      })
      this.selectedFacility = this.facilities[0]
      this.columns = ['일자', '예약자', '좌석번호', '예약 시간', '비고']
    },
    async fetchTable(facilityId) {
      // this.reservations = await $axios.get(`/facility/${facilityId}`)
      // Response: date, (User)name, seat_number, start_time, end_time, note
      this.reservations = await new Promise((resolve) => resolve())
      this.reservations = []

      if (facilityId === 1) {
        for (let i = 0; i < 7; i++) {
          this.reservations.push({
            date: '2021-09-01',
            name: '일병 서강민',
            seat_number: '14번',
            start_time: '17:30',
            end_time: '19:00',
            note: '군 e-러닝 중간고사'
          })
        }
      } else if (facilityId === 2) {
        for (let i = 0; i < 20; i++) {
          this.reservations.push({
            date: '2021-09-01',
            name: '일병 서강민',
            seat_number: '14번',
            start_time: '17:30',
            end_time: '19:00',
            note: '군 e-러닝 중간고사'
          })
        }
      } else if (facilityId === 3) {
        this.reservations = [
          {
            date: '2021-10-16',
            name: '일병 서강민',
            seat_number: '',
            start_time: '15:00',
            end_time: '16:30',
            note: ''
          },
          {
            date: '2021-10-17',
            name: '상병 김주현',
            seat_number: '',
            start_time: '17:00',
            end_time: '19:30',
            note: ''
          },
          {
            date: '2021-10-18',
            name: '일병 최재민',
            seat_number: '',
            start_time: '17:00',
            end_time: '19:00',
            note: ''
          },
          {
            date: '2021-10-18',
            name: '일병 서강민',
            seat_number: '',
            start_time: '20:00',
            end_time: '21:00',
            note: ''
          },
          {
            date: '2021-10-20',
            name: '',
            seat_number: '',
            start_time: '13:00',
            end_time: '24:00',
            note: '장비 교체작업'
          },
          {
            date: '2021-10-21',
            name: '',
            seat_number: '',
            start_time: '6:00',
            end_time: '16:00',
            note: '장비 교체작업'
          },
          {
            date: '2021-10-21',
            name: '상병 김주현',
            seat_number: '',
            start_time: '18:00',
            end_time: '22:00',
            note: ''
          }
        ]
      } else if (facilityId === 4) {
        this.reservations = []
      }
      if(!this.selectedFacility.use_timetable) {
        this.reservations = this.reservations.map((x) => {
          return {
            date: x.date,
            name: x.name,
            seat_number: x.seat_number,
            time: x.start_time + ' ~ ' + x.end_time,
            note: x.note
          }
        })
      }
      else {
        this.reservations = this.reservations.map((x) => {
          x.start_time = this.parseTime(x.start_time)
          x.end_time = this.parseTime(x.end_time)
          return x
        })
      }
    },
    onDropdownSelect(option, value) {
      this.selectedFacility = value
      this.fetchTable(value.id)
    },
    async onModalSubmit(form) {
      // const result = await this.$axios.post(`/reservation/facility/${this.selectedFacility.id}`, {
      //   data: form
      // })
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
