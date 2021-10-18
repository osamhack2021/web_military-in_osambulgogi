<template>
  <Modal @close="$emit('close')">
    <p class="text-xl text-center font-bold mb-3">일정 추가</p>
    <p class="ml-4">일정</p>
    <input
      v-model="schedule.title"
      class="bg-gray-200 w-full px-3 py-1 mb-2 rounded placeholder-gray-400"
      placeholder="일정 입력"
    />
    <p class="ml-4">기간</p>

    <div class="flex items-center">
      <input
        v-model="schedule.startDate"
        class="
          bg-gray-200
          w-full
          px-3
          py-1
          mb-2
          mr-1
          rounded
          placeholder-gray-400
        "
        placeholder="시작 날짜"
      />
      <input
        v-model="schedule.startTime"
        class="bg-gray-200 w-16 px-3 py-1 mb-2 rounded placeholder-gray-400"
        placeholder="시간"
      />
      <div>
        <span class="mx-3 inline-block align-middle">~</span>
      </div>
      <input
        v-model="schedule.endDate"
        class="
          bg-gray-200
          w-full
          px-3
          py-1
          mb-2
          mr-1
          rounded
          placeholder-gray-400
        "
        placeholder="끝 날짜"
      />

      <input
        v-model="schedule.endTime"
        class="bg-gray-200 w-16 px-3 py-1 mb-2 rounded placeholder-gray-400"
        placeholder="시간"
      />
    </div>
    <p class="ml-4">장소</p>
    <input
      v-model="schedule.place"
      class="bg-gray-200 w-full px-3 py-1 mb-2 rounded placeholder-gray-400"
      placeholder="장소 입력"
    />
    <p class="ml-4">메모</p>
    <input
      v-model="schedule.memo"
      class="bg-gray-200 w-full px-3 py-1 mb-2 rounded placeholder-gray-400"
      placeholder="메모 입력"
    />
    <Button class="w-full mt-4" @click="$emit('close')">확인</Button>
  </Modal>
</template>

<script>
export default {
  data() {
    return {
      schedule: {
        title: '',
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
        place: '',
        memo: ''
      }
    }
  }
}
</script>
