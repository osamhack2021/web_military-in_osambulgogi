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
            v-for="row in values"
            :key="row.id"
            class="hover:bg-gray-100 border-b border-gray-200 py-10"
          >
            <td v-for="col in row" :key="col.id" class="px-4 py-4">
              {{ col }}
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
      default: () => []
    },
    values: {
      type: Array,
      default: () => []
    }
  }
}
</script>
