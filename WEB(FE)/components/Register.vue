<template>
  <div
    class="
      w-80
      h-screen
      m-auto
      flex flex-col
      items-center
      justify-center
      space-y-4
      text-gray-600 text-center
      font-bold
    "
  >
    <span class="text-2xl mb-10">회원가입</span>

    <div v-show="currentStep == 1" class="w-full">
      <p class="text-lg mb-6">회원 유형을 선택해주세요.</p>
      <RadioGroup
        :options="userTypeOptions"
        :values="userTypeValues"
        :on-select="(option, value) => (form.user_type = value)"
      />
    </div>

    <div v-show="currentStep == 2" class="w-full">
      <p class="text-lg mb-6">소속 부대를 선택해주세요.</p>
      <div class="relative">
        <fa
          :icon="['fas', 'search']"
          class="absolute left-4 top-4 text-gray-600"
        />
        <input
          v-model="groupQuery"
          class="
            bg-gray-200
            w-full
            pl-10
            pr-3
            py-2
            my-1
            rounded
            placeholder-gray-400
          "
          placeholder="부대 검색"
        />
      </div>
      <hr class="bg-gray-400 my-4 h-1" />
      <RadioGroup
        :options="groupOptions"
        :values="groupValues"
        :filter="groupQuery"
        :on-select="(option, value) => (form.group_id = value)"
      />
    </div>

    <div v-show="currentStep == 3">
      <p class="text-lg mb-6">회원 정보를 입력해주세요.</p>
      <div class="text-left">
        <p class="mt-2 ml-2.5 mb-0">이름</p>
        <input
          v-model="form.username"
          class="bg-gray-200 w-full px-3 py-1 my-1 rounded placeholder-gray-400"
          placeholder=""
        />
        <p class="mt-2 ml-2.5 mb-0">비밀번호</p>
        <input
          v-model="form.password"
          type="password"
          class="bg-gray-200 w-full px-3 py-1 my-1 rounded placeholder-gray-400"
          placeholder=""
        />
        <p class="mt-2 ml-2.5 mb-0">연락처</p>
        <input
          v-model="form.phone"
          class="bg-gray-200 w-full px-3 py-1 my-1 rounded placeholder-gray-400"
          placeholder="010-XXXX-XXXX"
        />
        <p class="mt-2 ml-2.5 mb-0">계급</p>
        <input
          v-model="form.class"
          class="bg-gray-200 w-full px-3 py-1 my-1 rounded placeholder-gray-400"
          placeholder="예: 일등병"
        />
        <p class="mt-2 ml-2.5 mb-0">닉네임</p>
        <input
          v-model="form.nickname"
          class="bg-gray-200 w-full px-3 py-1 my-1 rounded placeholder-gray-400"
          placeholder="일자 입력"
        />
        <p class="mt-2 ml-2.5 mb-0">이메일</p>
        <input
          v-model="form.email"
          class="bg-gray-200 w-full px-3 py-1 my-1 rounded placeholder-gray-400"
          placeholder="일자 입력"
        />
      </div>
    </div>
    <div class="w-full">
      <button
        class="
          w-full
          h-10
          mt-4
          text-white
          rounded-md
          font-bold
          hover:opacity-80
        "
        :disabled="!isFormComplete"
        :class="isFormComplete ? 'bg-military' : 'bg-gray-400'"
        @click="currentStep != 3 ? currentStep++ : register()"
      >
        {{ currentStep != 3 ? '다음' : '완료' }}
      </button>
      <a
        v-if="currentStep != 1"
        class="block mt-12 font-normal font-sm underline text-gray-400"
        @click="currentStep--"
      >
        이전 단계로 돌아가기
      </a>
    </div>
    <RegisterModal v-if="showModal" @close="/* 메인 페이지로 리디렉션 */" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 1,
      form: {
        user_type: '',
        group_id: '',
        username: '',
        password: '',
        phone: '',
        class: '',
        nickname: '',
        email: ''
      },

      // 임시용
      userTypeOptions: ['간부', '장병', '민간인'],
      userTypeValues: ['ADMIN', 'NONE', 'NONE'],
      groupOptions: [
        '공군 정보체계관리단',
        '공군 작전정보통신단',
        '육군 지휘통신사령부'
      ],
      groupValues: [0, 1, 2],
      groupQuery: '',

      showModal: false
    }
  },
  computed: {
    isFormComplete() {
      if (this.currentStep === 1) {
        return this.form.user_type !== -1
      } else if (this.currentStep === 2) {
        return this.form.group_id !== -1
      } else {
        return (
          this.form.username &&
          this.form.password &&
          this.form.phone &&
          this.form.class &&
          this.form.nickname &&
          this.form.email
        )
      }
    }
  },
  methods: {
    async register() {
      const res = await this.$axios({
        method: 'POST',
        url: '/user/register',
        data: this.form
      })

      if (res.status === 200) {
        this.$notify('Register succeeded.')
        this.showModal = true
      } else {
        this.$notify(res.data)
      }
    }
  }
}
</script>
