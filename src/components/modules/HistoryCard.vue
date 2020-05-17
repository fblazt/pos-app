<template>
  <div class="h-full w-full flex flex-row flex-wrap justify-evenly">
    <div class="h-40 w-3/12 px-6 bg-pink-300 rounded-lg shadow-lg">
      <div class="m-8 flex flex-col justify-center">
        <p class="font-semibold">Today's Income</p>
        <p class="my-1 text-2xl font-bold">Rp. 1.000.000</p>
        <p class="text-sm font-semibold">+2% Yesterday</p>
      </div>
    </div>
    <div class="h-40 w-3/12 px-6 bg-blue-300 rounded-lg shadow-lg">
      <div class="m-8 flex flex-col justify-center">
        <p class="font-semibold">Monthly Income</p>
        <p class="my-1 text-2xl font-bold">Rp. 28.000.000</p>
        <p class="text-sm font-semibold">+1.7%</p>
      </div>
    </div>
    <div class="h-40 w-3/12 px-6 bg-purple-300 rounded-lg shadow-lg">
      <div class="m-8 flex flex-col justify-center">
        <p class="font-semibold">Yearly Income</p>
        <p class="my-1 text-2xl font-bold">Rp. 59.000.000</p>
        <p class="text-sm font-semibold">+23%</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistoryCard',
};
</script>

<style>

</style>
