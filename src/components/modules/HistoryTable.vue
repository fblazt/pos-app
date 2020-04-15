<template>
  <section class="container w-full p-5 flex flex-col rounded-lg shadow-2xl">
    <header class="flex flex-row justify-between items-center">
      <h1 class="text-4xl font-normal">Recent Order</h1>
      <button class="px-3 flex justify-center items-center bg-gray-300 rounded-full">
        Today <i class="fas fa-sort-down"></i>
      </button>
    </header>
    <table class="text-center mt-3">
      <thead>
        <tr>
          <th class="uppercase text-md font-medium">Invoices</th>
          <th class="uppercase text-md font-medium">Cashier</th>
          <th class="uppercase text-md font-medium">Date</th>
          <th class="uppercase text-md font-medium">Orders</th>
          <th class="uppercase text-md font-medium">Amount</th>
        </tr>
      </thead>
      <tbody class="text-gray-500">
        <tr v-for="item in 10" :key="item.id" class="border-t border-b">
          <td class="py-2">#10928</td>
          <td class="py-2">Cashier 1</td>
          <td class="py-2">06 October 2019</td>
          <td class="py-2">Ice Tea, Salad with Peanut Sauce</td>
          <td class="py-2">Rp. 120.000</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: 'HistoryTable',
};
</script>

<style>

</style>
