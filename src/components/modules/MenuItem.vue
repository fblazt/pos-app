<template>
  <div class="mx-16 flex flex-row justify-start flex-wrap">
    <div v-for="item in menu" :key="item.id" class="h-56 w-64 my-5 mx-10 rounded-t-xl">
      <div class="">
        <img
          :src="item.image"
          alt="Menu items"
          class="h-48 w-64 object-cover rounded-t-lg
          opacity-75"
        />
      </div>
      <div class="">
        <p class="font-semibold">{{ item.name }}</p>
        <p class="font-bold">Rp. {{ item.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'MenuItem',
  mounted() {
    this.$store.dispatch('allMenu');
  },
  computed: {
    ...mapState([
      'menu',
    ]),
  },
};
</script>

<style>
</style>
