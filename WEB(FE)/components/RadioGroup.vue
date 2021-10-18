<template>
  <div class="w-full">
    <ul>
      <li
        v-for="(option, index) in options"
        v-show="!filter || option.search(filter) != -1"
        :key="option.id"
        class="
          pr-10
          px-3
          py-2
          my-3
          text-xl text-left
          font-bold
          bg-white
          border-2
          rounded-lg
        "
        :class="
          selectedIndex === index
            ? 'text-military border-military'
            : 'text-gray-300 border-gray-300'
        "
        @click="onOptionClick(index)"
      >
        <fa :icon="['fas', 'check']" class="mr-2" />
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => ['No options given']
    },
    values: {
      type: Array,
      default: () => ['No values given']
    },
    onSelect: {
      type: Function,
      default: (selectedOption, selectedValue) => {}
    },
    filter: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selectedIndex: -1
    }
  },
  methods: {
    onOptionClick(index) {
      this.selectedIndex = index
      this.onSelect(this.options[index], this.values[index])
    }
  }
}
</script>
