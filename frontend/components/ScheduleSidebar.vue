<template>
  <div v-if="isShow" class="filter drop-shadow-lg flex-row items-start">
    <div
      class="
        flex flex-col
        w-72
        h-160
        rounded-r-lg
        ring-2
        bg-white
        ring-gray-400
      "
    >
      <div class="flex-col mx-12 mt-8 mb-20 space-y-3">
        <span class="flex text-3xl text-military font-bold justify-center">{{
          isGroup ? '부대 일정' : '개인 일정'
        }}</span>
        <div>
          <button
            class="text-xl font-bold"
            :class="selectedOption == 0 ? 'text-blue-400' : 'text-gray-600'"
            @click="selectOption(0)"
          >
            <fa :icon="['fas', 'calendar-alt']" class="mr-2" />
            캘린더
          </button>
        </div>
        <div>
          <button
            class="text-xl font-bold"
            :class="selectedOption == 1 ? 'text-blue-400' : 'text-gray-600'"
            @click="selectOption(1)"
          >
            <fa :icon="['fas', 'clipboard-list']" class="mr-2" />
            전체 일정 확인
          </button>
        </div>
        <div>
          <button
            class="text-xl font-bold"
            :class="selectedOption == 2 ? 'text-blue-400' : 'text-gray-600'"
            @click="selectOption(2)"
          >
            <fa :icon="['fas', 'calendar-plus']" class="mr-2" />
            근무 일정
          </button>
        </div>
      </div>
      <div v-if="isLinear" class="flex-col mx-12 mt-8 space-y-3">
        <span class="flex text-xl text-military font-bold justify-center">
          일정 관리
        </span>
        <div class="flex-row">
          <button class="text-xl font-bold text-gray-600" @click="insert">
            <fa :icon="['fas', 'calendar-plus']" class="mr-2" />
            일정 추가
          </button>
        </div>
        <template v-if="isSelectMode">
          <button class="text-xl font-bold text-gray-600" @click="toggle">
            <fa :icon="['fas', 'check-square']" class="mr-2 text-gray-200" />
            선택모드 해제
          </button>

          <div class="flex-col ml-2 space-y-1">
            <div>
              <button
                class="text-base font-bold text-gray-600"
                @click="is = !is"
              >
                <span
                  class="
                    text-xs
                    w-4
                    h-4
                    border-2
                    text-gray-200
                    border-gray-200 border-dashed
                    mr-1
                  "
                >
                  <fa
                    :icon="['fas', 'check']"
                    :class="!is && 'text-transparent'"
                  />
                </span>
                전체 선택 <span v-if="is"> 해제</span>
              </button>
            </div>
            <div>
              <button
                class="ml-0.5 text-base font-bold text-gray-600"
                @click="erase"
              >
                <fa :icon="['fas', 'trash-alt']" class="mr-1" />
                일괄 삭제
              </button>
            </div>
          </div>
        </template>
        <div v-else>
          <button class="text-xl font-bold text-gray-600" @click="toggle">
            <fa :icon="['fas', 'check-square']" class="mr-2" />
            선택 모드
          </button>
        </div>
      </div>
    </div>
    <div
      class="flex w-20 h-64 rounded-r-lg ring-2 bg-white ring-gray-400 ml-60"
    >
      sdfsa sfsfsfsfsfssfsf
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: true
    },
    isLinear: {
      type: Boolean,
      default: true
    },
    isGroup: {
      type: Boolean,
      default: false
    },
    insert: {
      type: Function,
      default: () => {}
    },
    erase: {
      type: Function,
      default: () => {}
    },
    selectModeToggle: {
      type: Function,
      default: () => {}
    },
    selectAllToggle: {
      type: Function,
      default: () => {}
    },
    isSelectAll: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      userId: -1,
      groupId: -1,
      isSelectMode: false,
      selectedOption: 0,
      is: false
    }
  },
  methods: {
    toggle() {
      this.isSelectMode = !this.isSelectMode
      this.selectModeToggle()
    },
    selectOption(optionNum) {
      this.selectedOption = optionNum
    }
  }
}
</script>
