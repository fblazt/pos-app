<template>
  <div class="h-full w-full flex flex-col">
    <Navbar/>
    <div class="h-full flex flex-row">
      <Sidebar/>
      <main class="h-full w-full m-6 flex flex-col">
        <section class="h-full w-full flex flex-row flex-wrap justify-evenly">
          <HistoryCard v-for="item in 3" :key="item.id"/>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/modules/Navbar.vue';
import Sidebar from '@/components/modules/Sidebar.vue';
import HistoryCard from '@/components/modules/HistoryCard.vue';

export default {
  name: 'History',
  components: {
    Navbar,
    Sidebar,
    HistoryCard,
  },
};
</script>

<style>

</style>
