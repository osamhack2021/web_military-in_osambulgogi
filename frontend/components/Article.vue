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
      <div
        class="
          flex flex-row
          w-full
          text-sm text-military
          font-bold
          items-center
          gap-x-0.5
        "
      >
        <fa :icon="['fas', 'chevron-left']" class="mr-1" />
        <Nuxtlink to="/board/:id">자유 게시판</Nuxtlink>
      </div>
      <div class="flex flex-row w-full items-center justify-between">
        <span class="text-3xl text-gray-500 font-bold"
          >군대에서 근무서면서 달을 보는데 정말 환하더군요</span
        >
        <div class="flex flex-col items-center space-y-1">
          <div class="flex flex-row items-center justify-between space-x-3">
            <fa
              :icon="['fas', 'caret-up']"
              class="text-2xl text-gray-400 font-bold"
            />
            <span class="text-2xl text-gray-500">+45</span>
            <fa
              :icon="['fas', 'caret-down']"
              class="text-2xl text-gray-400 font-bold"
            />
          </div>
          <span class="text-xs text-gray-300">96%가 추천했습니다.</span>
        </div>
      </div>
      <div class="flex flex-row w-full items-center gap-x-0.5">
        <div class="flex w-8 h-8 mr-2 rounded-md bg-gray-300">
          <fa
            :icon="['fas', 'user']"
            class="flex text-2xl m-auto w-full text-white bg-gray-300"
          />
        </div>
        <div class="flex flex-col w-full">
          <span class="text-sm text-gray-500 font-bold">익명</span>
          <span class="text-xs text-gray-400 font-semibold">09/20 22:37</span>
        </div>
      </div>
      <span class="flex flex-none text-base w-full my-8 text-gray-600">
        언제 어디서 보나 달은 똑같은 달이에요. 다른건 달을 보는 사람의
        마음이겠죠.<br />
        제가 여기서 조금 힘듦으로 다른 사람들이 조금 더 편한 마음을 가지고 달을
        볼 수 있겠죠. <br />
        그렇게 생각하니 마음이 조금은 따뜻해지고 저의 군대에서의 시간이 조금 더
        값지게 느껴지네요. <br />
        이 간단한 걸 상꺾이 돼서야 깨닫네요. 간단한 걸 몰라서 그동안 혼자 그렇게
        괴로워하고 이 시간들을 의심한 제가 미워지네요.<br /><br />
        모두 좋은 추석되세요!
      </span>
    </div>
    <div class="w-full">
      <span
        class="
          py-4
          flex flex-none
          w-full
          text-2xl
          items-start
          text-gray-500
          font-bold
        "
        >댓글 {{ commentIds.length }}</span
      >
      <ul class="flex flex-col w-240 items-start">
        <li v-for="(commentId, index) in commentIds" :key="index">
          <Comment
            :comment-id="commentId"
            :test-data="testDatas[index]"
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
      commentIds: [1, 2, 3],
      testDatas: [
        {
          userId: 1,
          userName: `익명1`,
          content: `나라 지킨다고 고생 많으세요:) 감사합니다!`,
          vote: 3,
          isCcc: false
        },
        {
          userId: 2,
          userName: `익명2`,
          content: `빨리 전역해라 힘내고`,
          vote: 1,
          isCcc: false
        },
        {
          userId: 3,
          userName: `익명 (글쓴이)`,
          content: `감사합니다ㅠ`,
          vote: 1,
          isCcc: true
        }
      ]
    }
  },
  methods: {
    upVote() {
      this.vote++
    },
    downVote() {
      this.vote--
    }
  }
}
</script>
