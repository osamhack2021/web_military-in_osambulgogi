<template>
  <div class="bg-white pb-4 px-4 rounded-md w-full">
    <div class="overflow-x-auto mt-6">
      <table class="table-auto border-collapse w-full">
        <thead>
          <tr class="rounded-lg font-medium text-gray-600 text-left">
            <th v-for="column in columns" :key="column.id" class="px-4 py-2">
              {{ column }}
            </th>
          </tr>
        </thead>
        <tbody class="text-sm font-normal text-gray-700">
          <tr
            v-for="row in data"
            :key="row.id"
            class="hover:bg-gray-100 border-b border-gray-200 py-10"
          >
            <td v-for="val in row" :key="val.id" class="px-4 py-4">
              {{ val }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      id="pagination"
      class="
        w-full
        flex
        justify-center
        border-t border-gray-100
        pt-4
        items-center
        text-gray-600 text-sm
      "
    >
      <a><fa :icon="['fas', 'chevron-left']" class="mx-2" /></a>
      <a><p class="leading-relaxed cursor-pointer mx-2">1</p></a>
      <a><p class="leading-relaxed cursor-pointer mx-2">2</p></a>
      <a><p class="leading-relaxed cursor-pointer mx-2">3</p></a>
      <a><p class="leading-relaxed cursor-pointer mx-2">4</p></a>
      <a><fa :icon="['fas', 'chevron-right']" class="mx-2" /></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      default: () => ['일자', '예약자', '좌석번호', '예약 시간', '비고']
    },
    data: {
      type: Array,
      default: () => [
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
    }
  }
}
</script>

<style scoped>
thead tr th:first-child {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
thead tr th:last-child {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

tbody tr td:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 0px;
}
tbody tr td:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 0px;
}
</style>
