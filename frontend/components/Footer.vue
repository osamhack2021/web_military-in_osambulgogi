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
      text-gray-300 text-sm
      font-bold
    "
  >
    <div class="flex items-center">
      <span>OSAMHACK2021, MIT LICENSE</span>
    </div>
    <div>
      <NuxtLink to="/about">이용약관</NuxtLink>
      <NuxtLink to="/help" class="ml-10">개인정보처리방침</NuxtLink>
      <!-- TODO: 드롭다운으로 바꾸기 -->
      <NuxtLink to="/help" class="ml-10">Github</NuxtLink>
    </div>
  </div>
</template>
