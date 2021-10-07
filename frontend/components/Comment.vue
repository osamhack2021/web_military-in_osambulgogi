<template>
  <div :class="isCcc ? 'ml-12 w-216' : 'w-216'">
    <div
      class="w-full flex-col p-4 items-start"
      :class="isEven ? 'bg-gray-100 rounded-lg' : ''"
    >
      <div class="flex flex-row w-full justify-between space-x-2">
        <div class="flex flex-none w-6 h-6 rounded-md items-center bg-gray-300">
          <fa
            :icon="['fas', 'user']"
            class="
              flex
              text-base
              w-full
              m-auto
              items-center
              text-white
              bg-gray-300
            "
          />
        </div>
        <div
          class="flex flex-none w-full text-sm font-bold items-center"
          :class="isWriter ? 'text-military' : 'text-gray-500'"
        >
          {{ userName }}
        </div>
      </div>
      <span
        class="
          flex
          my-2
          text-sm
          w-full
          text-gray-400
          whitespace-nowrap
          items-center
        "
      >
        {{ content }}
      </span>
      <div class="flex flex-row justify-items-start items-center">
        <fa :icon="['fas', 'caret-up']" class="flex text-base text-gray-400" />
        <span class="flex text-sm text-gray-400 ml-2">+{{ vote }}</span>
        <fa
          :icon="['fas', 'caret-down']"
          class="flex text-base text-gray-400 ml-2"
        />
        <Nuxtlink
          v-if="!isCcc"
          to="/board/:id/article/:article-id/답글"
          class="flex text-sm text-gray-400 ml-4"
          >답글</Nuxtlink
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    commentId: {
      type: Number,
      default: -1
    },
    isEven: {
      type: Boolean,
      default: false
    },
    testData: {
      type: Object,
      default: () => {
        return {
          userId: -1,
          userName: ``,
          content: ``,
          vote: 0,
          isCcc: false
        }
      }
    }
  },
  data() {
    return {
      userId: -1,
      userName: ``,
      content: ``,
      vote: 0,
      isCcc: false,
      isWriter: false
    }
  },
  async fetch() {
    await this.getComment(this.commentId)
  },
  methods: {
    async getComment(commentId) {
      this.userId = await new Promise((resolve) => resolve())
      this.userName = await new Promise((resolve) => resolve())
      this.content = await new Promise((resolve) => resolve())
      this.vote = await new Promise((resolve) => resolve())
      this.isCcc = await new Promise((resolve) => resolve())
      this.isWriter = await new Promise((resolve) => resolve())

      this.userId = this.testData.userId
      this.userName = this.testData.userName
      this.content = this.testData.content
      this.vote = this.testData.vote
      this.isCcc = this.testData.isCcc
      this.isWriter = this.userName.includes('(글쓴이)')
    }
  },
  upVote() {
    this.vote++
  },
  downVote() {
    this.vote--
  }
}
</script>
