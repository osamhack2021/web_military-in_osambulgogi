<template>
  <div class="lg:w-3/4 m-auto">
    <div class="flex justify-between">
      <Dropdown :options="facilities" :on-select="onDropdownSelect" />
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
    await this.fetchTable(this.facilities[0])
  },
  methods: {
    async fetchFacility() {
      // this.facilities = await $axios.get('')
      this.facilities = await new Promise((resolve) => resolve())

      this.facilities = [
        '사이버지식정보방1',
        '사이버지식정보방2',
        '사이버지식정보방3'
      ]
      this.columns = ['일자', '예약자', '좌석번호', '예약 시간', '비고']
    },
    async fetchTable(facility) {
      // this.values = await $axios.get('')
      this.values = await new Promise((resolve) => resolve())

      this.values = [
        [
          '9/1 수',
          '일병 서강민',
          '14번',
          '17:30 ~ 19:00',
          '군 e-러닝 중간고사'
        ],
        [
          '9/1 수',
          '일병 서강민',
          '14번',
          '17:30 ~ 19:00',
          '군 e-러닝 중간고사'
        ],
        [
          '9/1 수',
          '일병 서강민',
          '14번',
          '17:30 ~ 19:00',
          '군 e-러닝 중간고사'
        ],
        ['9/1 수', '일병 서강민', '14번', '17:30 ~ 19:00', '군 e-러닝 중간고사']
      ]
    },
    onDropdownSelect(selectedOption) {
      this.fetchTable(selectedOption)
    }
  }
}
</script>
