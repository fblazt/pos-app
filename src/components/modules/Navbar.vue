<template>
  <nav class="w-full z-50 fixed flex flex-row justify-between items-center bg-white shadow-md">
    <button class="mx-6"><i class="fas fa-bars fa-2x"></i></button>
    <h1 class="my-2 text-4xl text-center font-semibold">{{ navTitle }}</h1>
    <span>
    <button class="mx-5"><i class="fas fa-search fa-2x"></i></button>
    <button class="mx-5"><i class="fas fa-shopping-cart fa-2x"></i></button>
    </span>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: [
    'navTitle',
  ],
};
</script>

<style>

</style>
