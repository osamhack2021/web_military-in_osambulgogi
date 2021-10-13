<template>
  <div class="flex-none w-160 h-36 items-center justify-center space-y-1.5">
    <div class="flex flex-row items-center w-160 mb-4 justify-between">
      <span class="text-base text-gray-600 font-bold">{{ datas.name }}</span>

      <NuxtLink to="/board" class="text-xs text-gray-400 font-bold"
        >더보기</NuxtLink
      >
    </div>
    <div v-for="(article, index) in datas.articles" :key="index">
      <NuxtLink
        to="/board/'datas.boardId'/article/:article-id"
        class="
          flex flex-row
          w-full
          p-0.5
          items-center
          justify-between
          rounded-md
        "
      >
        <span class="flex text-xs text-gray-400 font-bold">{{
          article.title
        }}</span>

        <span class="flex text-xs text-gray-300 font-bold">
          {{ article.reportDate.getFullYear() }}.{{
            ('00' + article.reportDate.getMonth()).slice(-2)
          }}.{{ ('00' + article.reportDate.getDate()).slice(-2) }}
          {{ week[article.reportDate.getDay()] }}
          {{ ('00' + article.reportDate.getHours()).slice(-2) }}:{{
            ('00' + article.reportDate.getMinutes()).slice(-2)
          }}
        </span>
      </NuxtLink>
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
  },
  data() {
    return {
      week: ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)']
    }
  }
}
</script>
