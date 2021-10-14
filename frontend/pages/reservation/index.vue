<template>
  <div class="lg:w-3/4 m-auto">
    <div class="flex justify-between">
      <Dropdown
        :options="facilities.map((x) => x.name)"
        :values="facilities.map((x) => x.id)"
        :on-select="onDropdownSelect"
      />
      <Button shadow @click="showModal = true">
        <fa :icon="['fas', 'plus']" class="mr-1" />
        예약 추가
      </Button>
      <ReservationModal v-if="showModal" @close="showModal = false" />
    </div>
    <div class="mx-6 mt-14">
      <Table :columns="columns" :values="values" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      facilities: [],
      selectedFacility: '',
      columns: [],
      values: [],
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
        { name: '사이버지식정보방1', id: 1 },
        { name: '사이버지식정보방2', id: 2 },
        { name: '사이버지식정보방3', id: 3 }
      ]
      this.columns = ['일자', '예약자', '좌석번호', '예약 시간', '비고']
    },
    async fetchTable(facilityId) {
      // this.values = await $axios.get(`/facility/${facilityId}`)
      // Response: date, (User)name, seat_number, start_time, end_time, note

      this.values = await new Promise((resolve) => resolve())

      this.values = [
        {
          date: '2021-09-01',
          name: '일병 서강민',
          seat_number: '14번',
          start_time: '17:30',
          end_time: '19:00',
          note: '군 e-러닝 중간고사'
        },
        {
          date: '2021-09-01',
          name: '일병 서강민',
          seat_number: '14번',
          start_time: '17:30',
          end_time: '19:00',
          note: '군 e-러닝 중간고사'
        },
        {
          date: '2021-09-01',
          name: '일병 서강민',
          seat_number: '14번',
          start_time: '17:30',
          end_time: '19:00',
          note: '군 e-러닝 중간고사'
        },
        {
          date: '2021-09-01',
          name: '일병 서강민',
          seat_number: '14번',
          start_time: '17:30',
          end_time: '19:00',
          note: '군 e-러닝 중간고사'
        }
      ]
    },
    onDropdownSelect(option, value) {
      this.fetchTable(value)
    }
  }
}
</script>
