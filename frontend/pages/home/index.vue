<template>
  <div
    class="flex items-start justify-center justfify-between my-12 space-x-12"
  >
    <div class="flex-none w-160 items-center justify-center space-y-8">
      <BoardSearch />
      <BoardBlock1 v-if="boards.length > 0" :datas="boards[0]" />
      <BoardBlock1 v-if="boards.length > 1" :datas="boards[1]" />
      <div
        v-if="boards.length > 2"
        class="flex flex-row items-stretch justify-between"
      >
        <BoardBlock2 v-if="boards.length > 2" :datas="boards[2]" />
        <BoardBlock2 v-if="boards.length > 3" :datas="boards[3]" />
      </div>
      <div
        v-if="boards.length > 4"
        class="flex flex-row items-stretch justify-between"
      >
        <BoardBlock2 v-if="boards.length > 4" :datas="boards[4]" />
        <BoardBlock2 v-if="boards.length > 5" :datas="boards[5]" />
      </div>
    </div>
    <div class="flex flex-col items-center justify-center space-y-4">
      <div class="w-48 h-36 text-center shadow-lg">top</div>
      <div class="w-48 h-36 text-center shadow-lg">center</div>
      <div class="w-48 h-36 text-center shadow-lg">bottom</div>
    </div>
  </div>
</template>
<script>
import BoardSearch from '~/components/BoardSearch.vue'
import BoardBlock1 from '~/components/BoardBlock1.vue'
import BoardBlock2 from '~/components/BoardBlock2.vue'
export default {
  components: {
    BoardSearch,
    BoardBlock1,
    BoardBlock2
  },
  data() {
    return {
      boards: [
        {
          id: -1,
          name: '',
          articles: [
            {
              id: -1,
              title: '',
              reportDate: new Date()
            }
          ]
        }
      ],
      imgs: [
        {
          id: -1,
          src: ''
        }
      ]
    }
  },
  async fetch() {
    this.boards = await new Promise((resolve) => resolve())
    this.imgs = await new Promise((resolve) => resolve())

    this.boards = [
      {
        id: 1,
        name: '자유게시판',
        articles: [
          {
            id: 1,
            title: '10.16(토) 브런치데이 안내',
            reportDate: new Date(2021, 9, 27, 15, 20)
          },
          {
            id: 2,
            title: '10월 역할표(식기, 당직, 시설관리병) 공지',
            reportDate: new Date(2021, 9, 27, 15, 20)
          },
          {
            id: 3,
            title: '국통사 1단 군in 커뮤니티 개설 및 이용 안내',
            reportDate: new Date(2021, 9, 27, 15, 20)
          }
        ]
      },
      {
        id: 1,
        name: '자유게시판',
        articles: [
          {
            id: 1,
            title: '10.16(토) 브런치데이 안내',
            reportDate: new Date(2021, 9, 27, 15, 20)
          },
          {
            id: 2,
            title: '10월 역할표(식기, 당직, 시설관리병) 공지',
            reportDate: new Date(2021, 9, 27, 15, 20)
          },
          {
            id: 3,
            title: '국통사 1단 군in 커뮤니티 개설 및 이용 안내',
            reportDate: new Date(2021, 9, 27, 15, 20)
          }
        ]
      },
      {
        id: 1,
        name: '자유게시판',
        articles: [
          {
            id: 1,
            title: '10.16(토) 브런치데이 안내',
            reportDate: new Date(2021, 9, 27, 15, 20)
          },
          {
            id: 2,
            title: '10월 역할표(식기, 당직, 시설관리병) 공지',
            reportDate: new Date(2021, 9, 27, 15, 20)
          },
          {
            id: 3,
            title: '국통사 1단 군in 커뮤니티 개설 및 이용 안내',
            reportDate: new Date(2021, 9, 27, 15, 20)
          },
          {
            id: 4,
            title: '52대대 혹시 에어팟 보신 분 있습니까?',
            reportDate: new Date(2021, 9, 27, 15, 20)
          },
          {
            id: 5,
            title: '[50대대] 9/30 축구 같이 할 인원 구합니다',
            reportDate: new Date(2021, 9, 27, 15, 20)
          }
        ]
      },
      {
        id: 1,
        name: '자유게시판',
        articles: [
          {
            id: 1,
            title: '10.16(토) 브런치데이 안내',
            reportDate: new Date(2021, 9, 27, 15, 20)
          },
          {
            id: 2,
            title: '10월 역할표(식기, 당직, 시설관리병) 공지',
            reportDate: new Date(2021, 9, 27, 15, 20)
          },
          {
            id: 3,
            title: '국통사 1단 군in 커뮤니티 개설 및 이용 안내',
            reportDate: new Date(2021, 9, 27, 15, 20)
          },
          {
            id: 4,
            title: '52대대 혹시 에어팟 보신 분 있습니까?',
            reportDate: new Date(2021, 9, 27, 15, 20)
          },
          {
            id: 5,
            title: '[50대대] 9/30 축구 같이 할 인원 구합니다',
            reportDate: new Date(2021, 9, 27, 15, 20)
          }
        ]
      },
      {
        id: 1,
        name: '자유게시판',
        articles: [
          {
            id: 1,
            title: '10.16(토) 브런치데이 안내',
            reportDate: new Date(2021, 9, 27, 15, 20)
          },
          {
            id: 2,
            title: '10월 역할표(식기, 당직, 시설관리병) 공지',
            reportDate: new Date(2021, 9, 27, 15, 20)
          },
          {
            id: 3,
            title: '국통사 1단 군in 커뮤니티 개설 및 이용 안내',
            reportDate: new Date(2021, 9, 27, 15, 20)
          },
          {
            id: 4,
            title: '52대대 혹시 에어팟 보신 분 있습니까?',
            reportDate: new Date(2021, 9, 27, 15, 20)
          },
          {
            id: 5,
            title: '[50대대] 9/30 축구 같이 할 인원 구합니다',
            reportDate: new Date(2021, 9, 27, 15, 20)
          }
        ]
      },
      {
        id: 1,
        name: '자유게시판',
        articles: [
          {
            id: 1,
            title: '10.16(토) 브런치데이 안내',
            reportDate: new Date(2021, 9, 27, 15, 20)
          },
          {
            id: 2,
            title: '10월 역할표(식기, 당직, 시설관리병) 공지',
            reportDate: new Date(2021, 9, 27, 15, 20)
          },
          {
            id: 3,
            title: '국통사 1단 군in 커뮤니티 개설 및 이용 안내',
            reportDate: new Date(2021, 9, 27, 15, 20)
          },
          {
            id: 4,
            title: '52대대 혹시 에어팟 보신 분 있습니까?',
            reportDate: new Date(2021, 9, 27, 15, 20)
          },
          {
            id: 5,
            title: '[50대대] 9/30 축구 같이 할 인원 구합니다',
            reportDate: new Date(2021, 9, 27, 15, 20)
          }
        ]
      }
    ]
  }
}
</script>
