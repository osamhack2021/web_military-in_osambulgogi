<template>
  <div
    class="
      mt-2
      mb-10
      px-12
      py-3
      w-full
      flex
      justify-between
      items-center
      bg-white
      text-sm
    "
  >
    <div class="flex items-center">
      <span class="text-gray-400 font-bold">OSAMHACK2021, MIT LICENSE</span>
    </div>
    <div class="text-gray-400">
      <NuxtLink to="/about">이용약관</NuxtLink>
      <NuxtLink to="/help" class="ml-10">개인정보처리방침</NuxtLink>
      <!-- TODO: 드롭다운으로 바꾸기 -->
      <NuxtLink to="/help" class="ml-10">Github</NuxtLink>
    </div>
  </div>
</template>
