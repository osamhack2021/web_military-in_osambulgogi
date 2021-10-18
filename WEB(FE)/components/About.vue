<template>
  <div>
    <div class="flex justify-center items-center">
      <div class="ml-14">
        <h2
          class="
            mb-20
            font-bold
            text-7xl text-transparent
            tracking-wide
            bg-clip-text bg-gradient-to-br
            from-about-gradient-from
            to-about-gradient-to
          "
        >
          군부대가<br />내 손 안에.
        </h2>
        <p class="font-bold text-about-description text-xl">
          한 곳에서 확인하는 군부대,<br />
          군 내 소통 부재를 해결해줄 커뮤니티,<br />
          '군in'과 함께 선진병영에 한발짝 더 나아갑니다.
        </p>
      </div>
      <div class="ml-14 lg:ml-24 mr-14">
        <img src="../img/about_pic.jpg" width="600">
      </div>
    </div>
    <div class="mt-16 flex justify-center">
      <NuxtLink to="/register">
        <Button>
          <span class="mx-10 my-1">시작하기</span>
        </Button>
      </NuxtLink>
    </div>
  </div>
</template>
