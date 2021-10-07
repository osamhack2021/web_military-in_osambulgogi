<template>
  <Nuxtlink
    to="/board/id/article/article-id"
    class="flex flex-row w-full items-center justify-between space-x-20"
  >
    <div
      class="flex flex-col px-4 pt-4 pb-8 items-start justify-center space-y-2"
    >
      <div class="flex-none justify-start space-x-0.5">
        <span class="mr-4 text-lg text-gray-600 font-bold">{{ title }} </span>
        <fa :icon="['fas', 'comment']" class="text-sm text-blue-400" />
        <span class="text-sm text-blue-400">{{ comments }}</span>
      </div>
      <div class="flex-initial h-12 text-sm text-gray-300">
        {{ content }}
      </div>
      <span class="flex-none text-xs text-gray-400">{{
        reportDate.getFullYear() +
        '.' +
        reportDate.getMonth() +
        '.' +
        reportDate.getDate() +
        ' ' +
        reportDate.getHours() +
        ':' +
        reportDate.getMinutes()
      }}</span>
    </div>
    <div class="flex flex-col items-center justify-center space-y-1">
      <fa
        :icon="['fas', 'caret-up']"
        class="text-xl text-gray-300"
        @click="upvote()"
      />
      <span class="text-base text-gray-500 font-bold">{{ vote }}</span>
      <fa
        :icon="['fas', 'caret-down']"
        class="text-xl text-gray-300"
        @click="downvote()"
      />
    </div>
  </Nuxtlink>
</template>

<script>
export default {
  props: {
    boardId: {
      type: Number,
      default: -1
    },
    articleId: {
      type: Number,
      default: -1
    },
    articleData: {
      type: Object,
      default: () => {
        return {
          id: 0,
          title: '',
          comments: 0,
          content: '',
          vote: 0,
          reportDate: new Date()
        }
      }
    }
  },
  data() {
    return {
      title: '',
      comments: 0,
      content: '',
      vote: 0,
      reportDate: new Date()
    }
  },
  beforeMount() {
    this.fetchArticle(this.boardId, this.articleId)
  },
  beforeDestroy() {
    // vote 갱신
  },
  methods: {
    upvote() {
      this.vote++
    },
    downvote() {
      this.vote--
    },
    async fetchArticle(boardId, articleId) {
      this.comments = await new Promise((resolve) => resolve())

      this.title = this.articleData.title
      this.comments = this.articleData.comments
      this.content = this.articleData.content
      this.vote = this.articleData.vote
      this.reportDate = this.articleData.reportDate
    }
  }
}
// parent***은 테스트용 임시
</script>
