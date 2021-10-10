<template>
  <div
    class="
      fixed
      z-50
      top-0
      left-0
      w-full
      h-full
      bg-gray-400 bg-opacity-50
      flex
      align-middle
    "
    @click="$emit('close')"
  >
    <div
      class="sm:w-5/6 lg:w-1/4 m-auto p-8 rounded-2xl bg-white"
      @click.stop
    >
      <slot tabindex="0"/>
    </div>
  </div>
</template>
