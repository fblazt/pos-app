<template>
  <div class="h-full w-full flex flex-col">
    <Navbar/>
    <Sidebar/>
  </div>
</template>

<script>
import Navbar from '@/components/modules/Navbar.vue';
import Sidebar from '@/components/modules/Sidebar.vue';

export default {
  name: 'History',
  components: {
    Navbar,
    Sidebar,
  },
};
</script>

<style>

</style>
