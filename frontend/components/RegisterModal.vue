<template>
  <Modal @close="$emit('close')">
    <p class="text-xl text-center font-bold mb-3">
      회원가입이 완료되었습니다.<br />이제 군in을 시작해보세요!
    </p>
    <Button class="w-full mt-4" @click="$emit('close')">
      메인 페이지로 이동
    </Button>
  </Modal>
</template>
