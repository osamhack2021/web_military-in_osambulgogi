<template>
  <div class="container w-full flex justify-center item-center">
    <div class="m-auto text-center">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
      <NuxtLink to="/">Home page</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => { return {} }
    }
  }
  // layout: ''
}
</script>
