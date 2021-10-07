<template>
  <div
    class="flex items-start justify-center justfify-between my-12 space-x-12"
  >
    <div class="flex-none w-160 items-center justify-center space-y-8">
      <BoardSearch />
      <BoardBlock1 />
      <BoardBlock1 />
      <div class="flex flex-row items-stretch justify-between">
        <BoardBlock2 />
        <BoardBlock2 />
      </div>
      <div class="flex flex-row items-stretch justify-between">
        <BoardBlock2 />
        <BoardBlock2 />
      </div>
    </div>
    <div class="flex flex-col items-center justify-center space-y-4">
      <div class="w-48 h-36 text-center shadow-lg">top</div>
      <div class="w-48 h-36 text-center shadow-lg">center</div>
      <div class="w-48 h-36 text-center shadow-lg">bottom</div>
    </div>
  </div>
</template>
