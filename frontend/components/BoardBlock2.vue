<template>
  <div
    class="
      flex-none
      w-72
      h-48
      items-center
      justify-center
      bg-white
      rounded-xl
      shadow-lg
      pt-3
      space-y-4
    "
  >
    <div class="flex flex-row items-center w-72 mb-4 justify-between">
      <span class="text-base text-gray-600 mx-4 font-bold">자유게시판</span>
      <Nuxtlink to="/board/:id" class="text-xs text-gray-400 mx-4 font-bold"
        >더보기</Nuxtlink
      >
    </div>
    <Nuxtlink
      to="/board/:id/article/article-id"
      class="text-xs mx-4 text-gray-400 font-bold"
      >10.16(토) 브런치데이 안내</Nuxtlink
    >
    <br />
    <Nuxtlink
      to="/board/:id/article/article-i"
      class="text-xs mx-4 text-gray-400 font-bold"
      >10월 역할표(식기, 당직, 시설관리병) 공지</Nuxtlink
    >
    <br />
    <Nuxtlink
      to="/board/:id/article/article-id"
      class="text-xs mx-4 text-gray-400 font-bold"
      >국통사 1단 군in 커뮤니티 개설 및 이용 안내</Nuxtlink
    >
    <br />
    <Nuxtlink
      to="/board/:id/article/article-id"
      class="text-xs mx-4 text-gray-400 font-bold"
      >52대대 혹시 에어팟 보신 분 있습니까?</Nuxtlink
    >
    <br />
    <Nuxtlink
      to="/board/:id/article/article-id"
      class="text-xs mx-4 text-gray-400 font-bold"
      >[50대대] 9/30 축구 같이 할 인원 구합니다</Nuxtlink
    >
  </div>
</template>
