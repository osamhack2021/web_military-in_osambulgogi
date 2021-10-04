<template>
  <div class="px-6 py-4 w-full flex justify-between items-center bg-white">
    <div class="ml-20 flex">
      <div class="flex items-center">
        <Logo width="40" height="40" class="inline-block" />
        <span class="ml-3 text-gray-800 text-3xl font-bold">군in</span>
      </div>
      <div class="ml-12 flex items-center">
        <NuxtLink to="/about" class="">서비스 소개</NuxtLink>
        <NuxtLink to="/help" class="ml-10">도움말</NuxtLink>
        <!-- TODO: 드롭다운으로 바꾸기 -->
        <NuxtLink to="/help" class="ml-10">커뮤니티</NuxtLink>
      </div>
    </div>
    <div class="mr-20">
      <button class="text-gray-800">회원가입</button>
      <button
        class="
          ml-8
          px-6
          py-1
          text-gray-800 text-sm
          border-2 border-gray-800
          rounded-lg
        "
      >
        로그인
      </button>
    </div>
  </div>
</template>
