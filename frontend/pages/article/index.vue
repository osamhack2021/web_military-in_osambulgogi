<template>
  <div
    class="
      flex flex-col
      w-240
      mx-auto
      my-auto
      px-12
      divide-y-2 divide-gray-200
      items-center
    "
  >
    <div class="py-4 w-full">
      <NuxtLink
        :to="{ path: '/board', query: { id: $route.query.id, cursor: 1 } }"
        class="
          flex flex-row
          w-full
          text-sm text-military
          font-bold
          items-center
          gap-x-0.5
          group
        "
      >
        <fa
          :icon="['fas', 'chevron-left']"
          class="group-hover:text-militaryDark group-hover:drop-shadow"
        />
        <div class="group-hover:text-militaryDark group-hover:drop-shadow">
          {{ boardName }}
        </div>
      </NuxtLink>
      <div class="flex flex-row w-full items-center justify-between">
        <span class="text-3xl text-gray-500 font-bold">{{ title }}</span>
        <div class="flex flex-col items-center space-y-1">
          <div class="flex flex-row items-center justify-between space-x-3">
            <button class="flex items-center" @click="increaseUpVote()">
              <fa
                :icon="['fas', 'caret-up']"
                class="
                  text-2xl text-gray-400
                  font-bold
                  hover:drop-shadow hover:text-gray-600
                "
              />
            </button>
            <span class="text-2xl text-gray-500">
              <template v-if="vote > 0"> +{{ vote }} </template>
              <template v-else>{{ vote }}</template>
            </span>
            <button class="flex items-center" @click="increaseDownVote()">
              <fa
                :icon="['fas', 'caret-down']"
                class="
                  text-2xl text-gray-400
                  font-bold
                  hover:drop-shadow hover:text-gray-600
                "
              />
            </button>
          </div>
          <span class="text-xs text-gray-300"
            >{{ ((upVote / (upVote + downVote)) * 100).toFixed(2) }}%가
            추천했습니다.</span
          >
        </div>
      </div>

      <div class="flex flex-row items-center gap-x-0.5">
        <div class="flex w-8 h-8 mr-2 rounded-md bg-gray-300">
          <fa
            :icon="['fas', 'user']"
            class="flex text-2xl m-auto text-white bg-gray-300"
          />
        </div>
        <div class="flex flex-col mr-8">
          <span class="text-sm text-gray-500 font-bold">{{
            isAnonymous ? '익명' : userName
          }}</span>
          <span class="text-xs text-gray-400 font-semibold"
            >{{ reportDate.getFullYear() }}.{{
              ('00' + reportDate.getMonth()).slice(-2)
            }}.{{ ('00' + reportDate.getDate()).slice(-2) }}
            {{ week[reportDate.getDay()] }}
            {{ ('00' + reportDate.getHours()).slice(-2) }}:{{
              ('00' + reportDate.getMinutes()).slice(-2)
            }}</span
          >
        </div>
        <template v-if="curUser === userId">
          <div class="flex flex-row divide-x divide-gray-400 items-center">
            <div class="flex-none items-center">
              <NuxtLink
                :to="{
                  path: '/article/add',
                  query: {
                    id: $route.query.id,
                    boardId: $route.query.boardId,
                    title: title,
                    content: content,
                    isAnonymous: isAnonymous,
                    isModifyingMode: true
                  }
                }"
                class="
                  flex-none
                  p-1
                  text-sm
                  rounded-md
                  mr-4
                  text-gray-400
                  font-bold
                  hover:bg-gray-200
                "
              >
                수정{{ $route.query.boardId }}
              </NuxtLink>
            </div>
            <div class="flex-none items-center">
              <button
                class="
                  flex-none
                  p-1
                  text-sm
                  font-bold
                  rounded-md
                  text-gray-400
                  hover:bg-gray-200
                  ml-4
                "
                @click="deleteArticle"
              >
                삭제
              </button>
            </div>
          </div>
        </template>
      </div>
      <span class="flex flex-none text-base w-full my-8 text-gray-600">
        <pre class="font-sans"> {{ content }} </pre>
      </span>
    </div>
    <div class="w-full">
      <div class="flex flex-row pt-4 gap-x-4 items-center">
        <span class="flex text-2xl items-start text-gray-500 font-bold"
          >댓글 {{ commentIds.length }}</span
        >
        <button
          class="
            flex flex-row
            text-lg text-gray-400
            px-2
            py-1
            rounded-md
            items-center
            group
            hover:bg-gray-200
          "
          @click="toggle()"
        >
          <fa
            :icon="['fas', 'plus-square']"
            class="text-lg text-gray-400 mr-2 group-hover:bg-gray-200"
          />
          <template v-if="!isCommentMode"> 댓글 추가 </template>
          <template v-else> 댓글 취소 </template>
        </button>
      </div>
      <template v-if="isCommentMode">
        <AddComment
          :datas="{
            userId: 3,
            userName: '익명 (글쓴이)',
            isWriter: true,
            parentCommentId: -1
          }"
        />
      </template>
      <ul class="flex flex-col w-240 items-start">
        <li v-for="(commentId, index) in commentIds" :key="index">
          <Comment
            :id="commentId"
            :datas="commentDatas[index]"
            :is-even="index % 2 != 0"
            class="my-1"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      week: ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'],
      curUser: 3,
      boardId: -1,
      boardName: '',
      title: '',
      userId: -1,
      userName: '',
      reportDate: new Date(),
      upVote: 0,
      downVote: 0,
      vote: 0,
      content: ``,
      commentIds: [1, 2, 3],
      commentDatas: [
        {
          userId: 1,
          userName: `익명1`,
          content: `나라 지킨다고 고생 많으세요:)
감사합니다!`,
          upVote: 5,
          downVote: 2,
          parentCommentId: -1
        },
        {
          userId: 2,
          userName: `익명2`,
          content: `빨리 전역해라 힘내고`,
          upVote: 4,
          downVote: 3,
          parentCommentId: -1
        },
        {
          userId: 3,
          userName: `익명 (글쓴이)`,
          content: `감사합니다ㅠ`,
          upVote: 1,
          downVote: 0,
          parentCommentId: 2
        }
      ],
      isCommentMode: false,
      isWriter: false,
      isAnonymous: true
    }
  },
  async fetch() {
    this.boardId = await new Promise((resolve) => resolve())
    this.boardName = await new Promise((resolve) => resolve())
    this.title = await new Promise((resolve) => resolve())
    this.userId = await new Promise((resolve) => resolve())
    this.userName = await new Promise((resolve) => resolve())
    this.content = await new Promise((resolve) => resolve())
    this.vote = await new Promise((resolve) => resolve())
    this.upVote = await new Promise((resolve) => resolve())
    this.downVote = await new Promise((resolve) => resolve())

    this.boardName = '자유 게시판'
    this.title = '군대에서 근무서면서 달을 보는데 정말 환하더군요'
    this.userId = 3
    this.userName = '익명'
    this.content = `언제 어디서 보나 달은 똑같은 달이에요. 다른건 달을 보는 사람의 마음이겠죠.
제가 여기서 조금 힘듦으로 다른 사람들이 조금 더 편한 마음을 가지고 달을 볼 수 있겠죠.
그렇게 생각하니 마음이 조금은 따뜻해지고 저의 군대에서의 시간이 조금 더 값지게 느껴지네요.
이 간단한 걸 상꺾이 돼서야 깨닫네요. 간단한 걸 몰라서 그동안 혼자 그렇게 괴로워하고 이 시간들을 의심한 제가 미워지네요.

모두 좋은 추석되세요!`
    this.upVote = 95
    this.downVote = 40
    this.vote = this.upVote - this.downVote
    this.isWriter = true
    this.reportDate = new Date(2021, 9, 20, 16, 33, 20)
  },
  methods: {
    increaseUpVote() {
      this.vote++
      this.upVote++
    },
    increaseDownVote() {
      this.vote--
      this.downVote++
    },
    toggle() {
      this.isCommentMode = !this.isCommentMode
    },
    deleteArticle() {}
  }
}
</script>
