<template>
  <div
    class="
      flex flex-row
      group
      w-160
      h-8
      bg-gray-200
      rounded-sm
      items-center
      justify-start
      space-x-0.5
    "
  >
    <template v-if="focused_search == 0">
      <fa :icon="['fas', 'search']" class="ml-2 text-gray-400" />
    </template>
    <input
      v-model="searchw"
      v-focus="focused_search"
      type="text"
      class="
        w-full
        mr-2
        border-transparent
        bg-transparent
        text-gray-600
        placeholder-gray-400
        items-center
        justify-stretch
        font-bold
        focus:placeholder-transparent
        mx-2
      "
      placeholder="검색"
      @focus="focused_search = true"
      @blur="focused_search = false"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchw: '',
      focused_search: false
    }
  }
}
</script>
