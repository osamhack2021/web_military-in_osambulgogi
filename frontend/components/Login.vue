<template>
  <div class="h-screen flex flex-col items-center justify-center space-y-4">
    <div class="flex flex-row items-end w-80 justify-between">
      <Logo height="60px" width="60px" />
      <span class="text-2xl text-gray-600 font-bold">군in 시작하기</span>
    </div>
    <input
      v-model="username"
      type="text"
      class="
        w-80
        h-8
        bg-gray-200
        rounded-md
        px-3
        focus:ring-2 focus:ring-red-500
      "
      placeholder="아이디"
      required
    />
    <input
      v-model="password"
      type="password"
      class="
        w-80
        h-8
        bg-gray-200
        rounded-md
        px-3
        focus:ring-2 focus:ring-red-500
      "
      placeholder="비밀번호"
      required
    />
    <button
      class="
        w-80
        h-8
        bg-military
        text-white
        rounded-md
        font-bold
        hover:opacity-80
      "
      @click="login"
    >
      로그인
    </button>
    <notifications />
  </div>
</template>

<script>
import Logo from './Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      const res = await this.$axios({
        method: 'POST',
        url: '/user/login',
        data: { username, password }
      })

      res.status === 200
        ? this.$notify('Login succeed.')
        : this.$notify(res.data)
    }
  }
}
</script>
