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
    "
  >
    <div class="flex items-center">
      <span class="text-gray-300 font-bold">OSAMHACK2021, MIT LICENSE</span>
    </div>
    <div class="">
      <NuxtLink to="/about" class="">서비스 소개</NuxtLink>
      <NuxtLink to="/help" class="ml-10">도움말</NuxtLink>
      <!-- TODO: 드롭다운으로 바꾸기 -->
      <NuxtLink to="/help" class="ml-10">커뮤니티</NuxtLink>
    </div>
  </div>
</template>
