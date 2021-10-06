<template>
  <div class="" @click="onDropdownToggle">
    <div
      class="
        absolute
        text-gray-600 text-xl
        font-bold
        bg-white
        rounded-lg
        filter
      "
      :class="isCollapsed ? 'drop-shadow-lg' : 'drop-shadow'"
    >
      <div v-if="!isCollapsed" class="px-3.5 py-1.5">
        {{ selectedOption }}
        <fa :icon="['fas', 'chevron-down']" class="ml-2" />
      </div>
      <ul v-else>
        <li
          v-for="(option, index) in options"
          :key="option.id"
          class="pr-10 hover:bg-gray-100 px-3.5 py-1.5"
          :class="
            (index == 0 && 'rounded-t-lg') ||
            (index == options.length - 1 && 'rounded-b-lg')
          "
          @click="onOptionClick(option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => ['No options given']
    },
    onSelect: {
      type: Function,
      default: (selectedOption) => {}
    }
  },
  data() {
    return {
      isCollapsed: false,
      selectedOption: this.options[0]
    }
  },
  methods: {
    onDropdownToggle() {
      this.isCollapsed = !this.isCollapsed
    },
    onOptionClick(clickedOption) {
      this.selectedOption = clickedOption
      this.onSelect(this.selectedOption)
    }
  }
}
</script>
