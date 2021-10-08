<template>
  <Modal @close="$emit('close')">
    <p class="text-xl text-center font-bold mb-3">예약 추가</p>
    <p>일자</p>
    <input
      v-model="reservation.date"
      class="bg-gray-200 w-full px-3 py-1 my-2 rounded placeholder-gray-400"
      placeholder="일자 입력"
    />
    <p>좌석 번호</p>
    <input
      v-model="reservation.seat"
      class="bg-gray-200 w-full px-3 py-1 my-2 rounded placeholder-gray-400"
      placeholder="일자 입력"
    />
    <p>예약 시간</p>
    <div class="flex items-center">
      <div>
        <input
          v-model="reservation.startTime"
          class="bg-gray-200 w-full px-3 py-1 my-2 rounded placeholder-gray-400"
          placeholder="일자 입력"
        />
      </div>
      <div>
        <span class="mx-3 inline-block align-middle">~</span>
      </div>
      <div>
        <input
          v-model="reservation.endTime"
          class="bg-gray-200 w-full px-3 py-1 my-2 rounded placeholder-gray-400"
          placeholder="일자 입력"
        />
      </div>
    </div>
    <Button class="w-full mt-4" @click="$emit('close')">확인</Button>
  </Modal>
</template>

<script>
export default {
  data() {
    return {
      reservation: {
        date: '',
        seat: '',
        startTime: '',
        endTime: ''
      }
    }
  }
}
</script>
