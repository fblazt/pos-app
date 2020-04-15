<template>
  <div class="flex flex-row m-5">
    <div class="">
      <img class="h-20 w-20 object-cover rounded-md" src="https://media3.s-nbcnews.com/j/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p_67dfb6820f7d3898b5486975903c2e51.fit-760w.jpg" alt="Ordered items">
    </div>
    <div class="w-48 flex flex-col justify-between ml-5">
      <div class="font-bold">Dalgona Coffee</div>
      <div class="w-full flex flex-row justify-between">
        <div class="flex flex-row">
          <button class="h-8 w-8 bg-green-200 border-2
          border-green-400 text-xl text-green-400 font-bold">-</button>
          <!-- <input type="number" class="h-8 w-8 border-2
          border-green-400 text-xl text-green-400 font-bold"> -->
          <p class="h-8 w-8 border-2 border-green-400
          text-center text-xl text-green-400 font-bold">1</p>
          <button class="h-8 w-8 bg-green-200 border-2
          border-green-400 text-xl text-green-400 font-bold">+</button>
        </div>
        <div class="font-semibold self-center">Rp. 10.000</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
};
</script>

<style>

</style>
