<template>
  <div class="flex-none w-240 h-full mx-auto my-8 items-center">
    <div class="flex flex-row p-4 items-start space-x-8">
      <Nuxtlink
        to="/board/:id"
        class="text-2xl text-military underline font-bold"
        >오늘의 글</Nuxtlink
      >
      <Nuxtlink to="/board/:id" class="text-2xl text-gray-400 font-bold"
        >자유 게시판</Nuxtlink
      >
      <Nuxtlink to="/board:/id" class="text-2xl text-gray-400 font-bold"
        >장병 게시판</Nuxtlink
      >
    </div>
    <ul
      class="
        w-full
        h-full
        p-6
        pr-8
        rounded-lg
        shadow-lg
        items-center
        divide-y divide-0.5 divide-gray-200
      "
    >
      <li v-for="(article, index) in articles" :key="index">
        <ArticleBlock
          class="flex-none"
          :board-id="boards[currentBoard]['id']"
          :article-id="article['id']"
          :article-data="article"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boards: [
        {
          id: 1,
          name: '오늘의 글'
        },
        {
          id: 2,
          name: '자유 게시판'
        },
        {
          id: 3,
          name: '장병 게시판'
        }
      ],
      currentBoard: 0,
      articles: [
        {
          id: 1,
          title: `군대에서 근무서면서 달을 보는데 정말 환하더군요`,
          comments: 10,
          content: `언제 어디서 보나 달은 똑같은 달이에요. 다른건 달을 보는 사람의 마음이겠죠.\n
            제가 여기서 조금 힘듦으로 다른 사람들이 조금 더 편한 마음을 가지고 달을 볼 수 있겠죠.`,
          vote: 45,
          reportDate: new Date(2021, 9, 20, 22, 37)
        },
        {
          id: 2,
          title: `군대에서 투폰`,
          comments: 43,
          content: ``,
          vote: 32,
          reportDate: new Date(2021, 9, 20, 22, 30)
        },
        {
          id: 3,
          title: `아쉬움`,
          comments: 8,
          content: `군 입대 전에 만난 대학 동기 선후배들과 보낸 많은 시간들에 감사하고 소중한 인연이라 생각했습니다. 한 번쯤은 한다지만 두 번은 하고 싶지 않은 훈련소 때 그들이 보내주는 인편을 몇번씩 읽으며 웃음 짓고 입대 전 추억으로 버텨냈네요. 자대...`,
          vote: 9,
          reportDate: new Date(2021, 9, 20, 22, 12)
        },
        {
          id: 4,
          title: '23살 친구들아.. 뭐하고 사니',
          comments: 22,
          content:
            '나 18학번 남잔데 20년 초에 군대가서 올해 7월에 전역하고 여행 좀 다니려했더니 코로나때매 암것도 못하네… 뭐라도 안 하면 정신병걸릴 것 같아서 한국사랑 컴활따고 지금 토익공부중인데 군대에서 원했던 전역 후 내 모습은 이게 아니라서...',
          vote: 4,
          reportDate: new Date(2021, 9, 20, 22, 0)
        }
      ]
    }
  }
}
</script>
