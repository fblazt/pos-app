<template>
  <div>
    <RevenueChart :chart-data="datacollection"></RevenueChart>
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
import RevenueChart from '@/assets/js/chart';

export default {
  components: {
    RevenueChart,
  },
  data() {
    return {
      datacollection: null,
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()],
          }, {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()],
          },
        ],
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (200 - 5 + 1)) + 5;
    },
  },
};
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>
