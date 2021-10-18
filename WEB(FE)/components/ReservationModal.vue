<template>
  <Modal @close="$emit('close')">
    <p class="text-xl text-center font-bold mb-3">예약 추가</p>
    <p>일자</p>
    <input
      v-model="reservation.date"
      class="bg-gray-200 w-full px-3 py-1 my-2 rounded placeholder-gray-400"
    />
    <p v-if="includeSeatNumber">좌석 번호</p>
    <input
      v-if="includeSeatNumber"
      v-model="reservation.seat_number"
      class="bg-gray-200 w-full px-3 py-1 my-2 rounded placeholder-gray-400"
    />
    <p>예약 시간</p>
    <div class="flex items-center">
      <div>
        <input
          v-model="reservation.startTime"
          class="bg-gray-200 w-full px-3 py-1 my-2 rounded placeholder-gray-400"
        />
      </div>
      <div>
        <span class="mx-3 inline-block align-middle">~</span>
      </div>
      <div>
        <input
          v-model="reservation.endTime"
          class="bg-gray-200 w-full px-3 py-1 my-2 rounded placeholder-gray-400"
        />
      </div>
    </div>
    <p>비고</p>
    <input
      v-model="reservation.note"
      class="bg-gray-200 w-full px-3 py-1 my-2 rounded placeholder-gray-400"
    />
    <Button class="w-full mt-4" @click="onConfirm">확인</Button>
  </Modal>
</template>

<script>
export default {
  props: {
    includeSeatNumber: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      reservation: {
        date: '',
        seat_number: '',
        startTime: '',
        endTime: '',
        note: '',
      }
    }
  },
  methods: {
    onConfirm() {
      this.$emit('submit', this.reservation)
      this.$emit('close')
    }
  }
}
</script>
