<template>
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 353.23 350.17"
    :width="width"
    :height="height"
  >
    <path
      class="cls-1"
      d="M574.52,255.32s-35-146-168.29-146c-145.44,0-156.59,146.05-156.59,146.05s-14.13,9.06-14.18,23.29,8.89,20.93,28.34,21.81c18.44.83,272,.31,296.54.23,1.58,0,28.09-3.08,28.35-22C588.91,262.46,574.52,255.32,574.52,255.32Zm-244,23.76a23.77,23.77,0,1,1,23.77-23.76A23.76,23.76,0,0,1,330.51,279.08Z"
      transform="translate(-235.46 -109.27)"
    />
    <rect class="cls-1" x="73.7" y="211.34" width="42.52" height="138.83" />
    <path
      class="cls-1"
      d="M388.12,320.61V459.44h42.52V377.3s0-19.84,20.71-19.84,20.71,19.84,20.71,19.84v82.14h42.52V377.3c0-42.07-24.83-56.69-42.52-56.69-32.13,0-41.39,17.79-41.39,14.11v-14Z"
      transform="translate(-235.46 -109.27)"
    />
  </svg>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: '50px'
    },
    width: {
      type: String,
      default: '50px'
    }
  }
}
</script>

<style>
.cls-1 {
  fill: #4e784d;
}
</style>
