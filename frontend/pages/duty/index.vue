<template>
  <div class="lg:w-3/4 m-auto">
    <div class="flex justify-between">
      <Dropdown :options="months" :on-select="onDropdownSelect" />
      <Button shadow>
        <fa :icon="['fas', 'pen']" class="mr-1" />
        당직표 수정
      </Button>
    </div>
    <div class="mx-6 mt-14">
      <Table :columns="table.columns" :values="table.values" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      months: [],
      selectedMonth: '',
      table: {
        columns: [],
        values: []
      }
    }
  },
  async fetch() {
    this.table = await new Promise((resolve) => resolve())
    this.table = {}

    this.months = ['2021년 8월', '2021년 9월', '2021년 10월']
    this.table.columns = [
      '일자',
      '당직병',
      '채송',
      '식기세척',
      '시설관리',
      '격리자 밥당번'
    ]
    this.table.values = []
    for (let i = 0; i < 30; i++) {
      this.table.values[i] = [
        '9월 '+(i+1)+'일',
        '일병 서강민',
        '일병 서강민',
        '일병 서강민',
        '일병 서강민',
        '일병 서강민'
      ]
    }
  },
  methods: {
    onDropdownSelect(option, value) {
      // fetch table data of selected month
    }
  }
}
</script>
