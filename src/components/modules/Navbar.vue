<template>
  <nav class="w-full z-50 fixed flex flex-row justify-between items-center bg-white shadow-md">
    <div>
      <button class="mx-6"><i class="fas fa-bars fa-2x"></i></button>
    </div>
    <div>
      <h1 class="my-2 text-4xl text-center font-semibold self-start">{{ navTitle }}</h1>
    </div>
    <div>
      <input type="text" placeholder="Search menu"
      :class="searchOpen ? 'h-6 p-1 border-b-2 focus:outline-none' : 'hidden'">
      <button @click="searchOpen = !searchOpen" class="mx-5 fill-current
      hover:text-green-500 focus:outline-none focus:text-green-500"
      :class="searchOpen ? 'focus:text-green-500' : 'focus:text-black'">
        <i class="fas fa-search fa-2x"></i>
      </button>
      <button class="mx-5">
        <i class="fas fa-shopping-cart fa-2x"></i>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      searchOpen: false,
    };
  },
  props: [
    'navTitle',
  ],
};
</script>

<style>

</style>
