<template>
  <div class="flex-none w-160 h-36 items-center justify-center space-y-1.5">
    <div class="flex flex-row items-center w-160 mb-4 justify-between">
      <span class="text-base text-gray-600 font-bold">자유게시판</span>
      <Nuxtlink to="/board" class="text-xs text-gray-400 font-bold"
        >더보기</Nuxtlink
      >
    </div>
    <div class="flex flex-row items-center justify-between">
      <Nuxtlink
        to="/board/:id/article/article-id"
        class="text-xs text-gray-400 font-bold"
        >10.16(토) 브런치데이 안내</Nuxtlink
      >
      <span class="text-xs text-gray-300 font-bold">
        2021.09.27(월) 15:20
      </span>
    </div>
    <div class="flex flex-row items-center justify-between">
      <Nuxtlink
        to="/board/:id/article/article-id"
        class="text-xs text-gray-400 font-bold"
        >10월 역할표(식기, 당직, 시설관리병) 공지</Nuxtlink
      >
      <Nuxtlink
        to="/board/:id/article/article-id"
        class="text-xs text-gray-300 font-bold"
      >
        2021.09.27(월) 15:20
      </Nuxtlink>
    </div>

    <div class="flex flex-row items-center justify-between">
      <span class="text-xs text-gray-400 font-bold"
        >국통사 1단 군in 커뮤니티 개설 및 이용 안내</span
      >
      <span class="text-xs text-gray-300 font-bold">
        2021.09.27(월) 15:20
      </span>
    </div>
  </div>
</template>
