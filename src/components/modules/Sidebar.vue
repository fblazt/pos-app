<template>
  <aside class="h-full w-20 bg-white flex flex-col items-center">
    <button class="my-5"><i class="fas fa-utensils fa-2x"></i></button>
    <button class="my-5"><i class="fas fa-clipboard-list fa-2x"></i></button>
    <button class="my-5"><i class="fas fa-plus fa-2x"></i></button>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style>

</style>
