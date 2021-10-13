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
      space-y-1
    "
  >
    <div class="flex flex-row items-center w-72 mb-3 justify-between">
      <span class="text-base text-gray-600 mx-4 font-bold">자유게시판</span>
      <NuxtLink to="/board/:id" class="text-xs text-gray-400 mx-4 font-bold"
        >더보기</NuxtLink
      >
    </div>
    <div v-for="(article, index) in datas.articles" :key="index">
      <NuxtLink
        to="/board/:id/article/article-id"
        class="text-xs mx-4 text-gray-400 font-bold"
        >{{ article.title }}</NuxtLink
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    datas: {
      type: Object,
      default: () => {
        return {
          id: -1,
          name: '',
          articles: [
            {
              id: -1,
              title: '',
              reportDate: new Date()
            }
          ]
        }
      }
    }
  }
}
</script>
