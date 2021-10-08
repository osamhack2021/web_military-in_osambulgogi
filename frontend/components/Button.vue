<template>
  <button
    class="
      px-3.5
      py-1.5
      text-white text-lg
      font-bold
      bg-military
      rounded-lg
      filter
    "
    :class="shadow && 'drop-shadow'"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    shadow: {
      type: Boolean,
      default: false
    }
  }
}
</script>
