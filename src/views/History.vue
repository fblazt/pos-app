<template>
  <div class="h-full w-full flex flex-col">
    <Navbar navTitle="History"/>
    <div class="h-full flex flex-row">
      <Sidebar/>
      <main class="h-full w-full ml-16 my-32 flex flex-col justify-center items-center">
        <section class="h-full w-full flex flex-row flex-wrap justify-evenly">
          <HistoryCard v-for="item in 3" :key="item.id"/>
        </section>
        <section class="container mt-5 w-full p-5 flex flex-col rounded-lg shadow-lg">
          <header class="flex flex-row justify-between items-center">
            <h1 class="text-4xl font-normal">Revenue</h1>
            <button class="px-3 flex justify-center items-center bg-gray-300 rounded-full">
              Month <i class="fas fa-sort-down"></i>
            </button>
          </header>
          <main>
            <!-- <HistoryChart/> -->
          </main>
        </section>
        <HistoryTable class="mt-5"/>
      </main>
    </div>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs';

import Navbar from '@/components/modules/Navbar.vue';
import Sidebar from '@/components/modules/Sidebar.vue';
import HistoryCard from '@/components/modules/HistoryCard.vue';
// import HistoryChart from '@/components/modules/HistoryChart.vue';
import HistoryTable from '@/components/modules/HistoryTable.vue';

export default {
  name: 'History',
  components: {
    Navbar,
    Sidebar,
    HistoryCard,
    // HistoryChart,
    HistoryTable,
  },
  extends: Line,
  props: ['chartdata', 'options'],
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>

<style>

</style>
