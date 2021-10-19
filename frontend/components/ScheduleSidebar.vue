<template>
  <div class="flex h-full flex-row filter drop-shadow-lg items-start">
    <div
      v-if="isShow"
      class="
        flex flex-col
        w-72
        h-160
        z-40
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
            일정 확인
          </button>
        </div>
        <div v-if="!isGroup">
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
                @click="selectAllToggle"
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
                전체 선택 <span v-if="isSelectAll"> 해제</span>
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
      v-if="isShow"
      class="absolute flex ml-72 w-1 h-40 z-50 bg-white"
      :class="!isGroup ? 'mt-28' : 'mt-12'"
    />
    <div class="flex flex-col z-0" :class="!isShow && '-mt-80'">
      <button
        class="flex w-16 h-40 mt-12 rounded-r-lg ring-2 bg-white ring-gray-400"
        :class="isGroup && 'z-40 shadow-lg'"
        @click="selectGroupTab(true)"
      >
        <fa
          :icon="['fas', 'exclamation']"
          class="text-lg m-auto text-red-600"
          :class="!isGroup && 'mt-6 ml-7'"
        />
      </button>
      <button
        class="flex w-16 h-40 -mt-24 rounded-r-lg ring-2 bg-white ring-gray-400"
        :class="!isGroup && 'z-40 shadow-lg '"
        @click="selectGroupTab(false)"
      >
        <fa
          :icon="['fas', 'user-alt']"
          class="text-lg m-auto text-gray-400"
          :class="isGroup && 'mb-6 ml-6'"
        />
      </button>
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
    selectGroupTab: {
      type: Function,
      default: (isGroup) => {}
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
