<template>
  <div v-if="!isModifyingMode">
    <div :class="datas.parentCommentId != -1 ? 'ml-12 w-204' : 'w-216'">
      <div
        class="w-full flex-col p-4 pb-3 items-start"
        :class="isEven ? 'bg-gray-100 rounded-lg' : ''"
      >
        <div class="flex flex-row w-full justify-between space-x-2">
          <div
            class="flex flex-none w-6 h-6 rounded-md items-center bg-gray-300"
          >
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
            {{ datas.userName }}
            <template v-if="curUser === datas.userId"
              ><button
                class="
                  flex
                  p-1
                  text-sm
                  rounded-md
                  text-gray-400
                  ml-4
                  mr-2
                  hover:bg-gray-200
                "
                @click="toggleModifyingMode"
              >
                수정
              </button>
              <button
                class="
                  flex
                  p-1
                  text-sm
                  rounded-md
                  text-gray-400
                  hover:bg-gray-200
                "
                @click="deleteComment"
              >
                삭제
              </button>
            </template>
          </div>
        </div>
        <span class="flex my-2 text-sm w-full text-gray-400 items-center">
          <pre class="font-sans">{{ datas.content }}</pre>
        </span>
        <div class="flex flex-row justify-items-start items-center">
          <button class="flex items-center" @click="increaseUpVote()">
            <fa
              :icon="['fas', 'caret-up']"
              class="
                flex
                text-base text-gray-400
                hover:drop-shadow hover:text-gray-600
              "
            />
          </button>
          <span class="flex text-sm text-gray-400 ml-2">
            <template v-if="vote > 0">+{{ vote }}</template>
            <template v-else>{{ vote }}</template>
          </span>
          <button class="flex items-center" @click="increaseDownVote()">
            <fa
              :icon="['fas', 'caret-down']"
              class="
                flex
                text-base text-gray-400
                ml-2
                hover:drop-shadow hover:text-gray-600
              "
            />
          </button>
          <button
            v-if="datas.parentCommentId == -1"
            class="
              flex
              p-1
              text-sm
              rounded-md
              text-gray-400
              ml-4
              hover:bg-gray-200
            "
            @click="toggleCommentMode"
          >
            <template v-if="!isCommentMode">답글</template>
            <template v-else>답글 취소</template>
          </button>
        </div>
      </div>
    </div>
    <template v-if="isCommentMode">
      <AddComment
        :datas="{
          userId: 3,
          userName: '익명 (글쓴이)',
          isWriter: true,
          parentCommentId: 2
        }"
    /></template>
  </div>
  <div v-else>
    <AddComment
      :datas="{
        userId: datas.userId,
        userName: datas.userName,
        content: datas.content,
        isWriter: isWriter,
        isModifyingMode: isModifyingMode,
        parentCommentId: datas.parentCommentId
      }"
      :toggle="toggleModifyingMode"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: -1
    },
    isEven: {
      type: Boolean,
      default: false
    },
    datas: {
      type: Object,
      default: () => {
        return {
          userId: -1,
          userName: ``,
          content: ``,
          upVote: 0,
          downVote: 0,
          parentCommentId: -1
        }
      }
    }
  },
  data() {
    return {
      curUser: 3,
      isModifyingMode: false,
      upVote: 0,
      downVote: 0,
      vote: 0,
      isWriter: false,
      isCommentMode: false,
      commentData: {
        userId: -1,
        userName: '',
        isWriter: false,
        parentCommentId: this.id
      }
    }
  },
  async fetch() {
    await this.fetchData()
  },
  methods: {
    async fetchData() {
      this.isWriter = await new Promise((resolve) => resolve())
      this.vote = await new Promise((resolve) => resolve())
      this.upVote = await new Promise((resolve) => resolve())
      this.downVote = await new Promise((resolve) => resolve())

      this.upVote = this.datas.upVote
      this.downVote = this.datas.downVote
      this.vote = this.upVote - this.downVote
      if (this.datas.userName.includes('(글쓴이)')) this.isWriter = true

      this.commentData.userId = 3
      this.commentData.userName = '익명 (글쓴이)'
      if (this.commentData.userName.includes('(글쓴이)'))
        this.commentData.isWriter = true
    },
    toggleCommentMode() {
      this.isCommentMode = !this.isCommentMode
    },
    toggleModifyingMode() {
      this.isModifyingMode = !this.isModifyingMode
    },
    increaseUpVote() {
      this.vote++
      this.upVote++
    },
    increaseDownVote() {
      this.vote--
      this.downVote++
    },
    deleteComment() {}
  }
}
</script>
