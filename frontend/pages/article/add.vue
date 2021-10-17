<template>
  <div
    class="flex flex-col w-160 m-auto items-center justify-items-center gap-y-4"
  >
    <div class="flex w-full justify-between">
      <Dropdown
        :options="boardNames"
        :value="boardIds"
        :selected="selectedIndex"
        :on-select="getSelected"
      />{{ selectedIndex }}
    </div>
    <input
      v-model="title"
      class="
        flex
        w-full
        h-8
        px-4
        rounded-lg
        mt-10
        text-gray-600
        font-bold
        ring-1 ring-gray-200
        focus:shadow-md
      "
    />

    <textarea
      v-model="content"
      class="
        flex
        w-full
        h-96
        p-4
        rounded-lg
        text-gray-500
        ring-1 ring-gray-200
        focus:shadow-md
      "
    />
    <div class="flex w-full justify-end">
      <button
        class="
          flex
          px-2
          py-1
          mr-2
          rounded-md
          justify-between
          items-center
          space-x-2
          group
          hover:bg-gray-200
        "
        @click="isAnonymousCheckbox()"
      >
        <div class="w-4 h-4 rounded ring-2 ring-gray-600">
          <fa
            v-if="!isAnonymous"
            :icon="['fas', 'check']"
            class="flex m-auto mt-0.5 text-sm text-gray-600"
          />
        </div>
        <span class="text-sm text-gray-600 font-bold">익명 사용</span>
      </button>
      <Button class="flex flex-row gap-2 items-center" @click="submit()">
        <fa :icon="['fas', 'check']" class="flex text-lg" />
        <span v-if="!isModifyingMode">작성 완료</span>
        <span v-else>수정 완료</span>
      </Button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedIndex: -1,
      boardIds: [],
      boardNames: [],
      isModifyingMode: false,
      articleId: -1,
      title: '',
      content: '',
      isAnonymous: false
    }
  },
  async fetch() {
    this.boardIds = await new Promise((resolve) => resolve())
    this.boardNames = await new Promise((resolve) => resolve())

    this.boardIds = [1, 2, 50]
    this.boardNames = ['자유 게시판', '장병 게시판', '건의 게시판']

    for (let i = 0; i < this.boardIds.length; i++) {
      if (parseInt(this.$route.query.boardId) === this.boardIds[i]) {
        this.selectedIndex = i
        break
      }
    }

    this.articleId = parseInt(this.$route.query.id) ? this.$route.query.id : -1
    this.title = this.$route.query.title
    this.content = this.$route.query.content
    this.isAnonymous = this.$route.query.isAnonymous
    this.isModifyingMode = this.$route.query.isModifyingMode

    this.title = '군대에서 근무서면서 달을 보는데 정말 환하더군요'
    this.content = `언제 어디서 보나 달은 똑같은 달이에요. 다른건 달을 보는 사람의 마음이겠죠.
제가 여기서 조금 힘듦으로 다른 사람들이 조금 더 편한 마음을 가지고 달을 볼 수 있겠죠.
그렇게 생각하니 마음이 조금은 따뜻해지고 저의 군대에서의 시간이 조금 더 값지게 느껴지네요.
이 간단한 걸 상꺾이 돼서야 깨닫네요. 간단한 걸 몰라서 그동안 혼자 그렇게 괴로워하고 이 시간들을 의심한 제가 미워지네요.

모두 좋은 추석되세요!`
  },
  methods: {
    isAnonymousCheckbox() {
      this.isAnonymous = !this.isAnonymous
    },
    getSelected(index) {
      this.selectedIndex = index
    },
    submit() {}
  }
}
</script>
