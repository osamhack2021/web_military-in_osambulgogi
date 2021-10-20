<template>
  <div
    class="flex-col p-4 mt-4 bg-gray-200 rounded-lg items-start"
    :class="datas.parentCommentId == -1 ? 'w-216' : 'ml-12 w-204'"
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
        :class="datas.isWriter ? 'text-military' : 'text-gray-500'"
      >
        {{ datas.userName }}
        <template v-if="datas.isModifyingMode">
          <button
            class="
              flex
              p-1
              text-sm
              rounded-md
              text-gray-400
              ml-4
              hover:bg-gray-300
            "
            @click="toggle()"
          >
            수정 취소
          </button>
        </template>
      </div>
    </div>
    <div
      class="
        flex flex-row
        justify-between
        space-x-0.5
        my-2
        p-0.5
        w-full
        rounded-lg
        bg-white
        items-center
      "
    >
      <textarea
        v-model="content"
        class="
          flex
          text-sm
          w-full
          rounded-lg
          text-gray-400
          items-center
          focus-ring-2
        "
        @keypress.enter.ctrl:="submit()"
      />
      <button
        class="
          flex
          w-6
          h-6
          m-0.5
          p-0.5
          rounded-lg
          bg-military
          items-center
          filter
          drop-shadow
          group
          hover:bg-militaryDark hover:drop-shadow
        "
        @click="submit()"
      >
        <fa
          :icon="['fas', 'reply']"
          class="
            flex flex-none
            m-auto
            text-sm text-white
            bg-military
            group-hover:bg-militaryDark group-hover:drop-shadow
          "
        />
      </button>
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
          userId: -1,
          userName: '',
          content: '',
          isWriter: false,
          isModifyingMode: false,
          parentCommentId: -1
        }
      }
    },
    toggle: {
      type: Function,
      default: () => {
        alert('No toggle event')
      }
    }
  },
  data() {
    return {
      content: ''
    }
  },
  fetch() {
    this.content = this.datas.content
  },
  methods: {
    submit() {
      if (!this.content.length) {
        alert('댓글을 입력하세요')
      }
    }
  }
}
</script>
