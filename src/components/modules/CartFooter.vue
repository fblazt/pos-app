<template>
  <div class="mx-5">
    <div class="w-full">
      <div class="w-full flex flex-row justify-between">
        <p class="text-xl font-bold">Total:</p>
        <p class="text-xl font-bold">Rp. 30.000*</p>
      </div>
      <p>*Belum termasuk ppn</p>
    </div>
    <button @click="$refs.modal.show()"
    class="w-full mt-3 py-1 bg-teal-400 text-2xl text-white">Checkout</button>
    <t-modal ref="modal" class="flex flex-col justify-center items-center">
      <header class="mt-5 flex flex-row justify-between">
        <div>
          <h1 class="text-xl font-semibold">Checkout</h1>
          <p class="text-md">Cashier: Pevita Pearce</p>
        </div>
        <div>
          <p class="font-semibold">Receipt no: #010410919</p>
        </div>
      </header>
      <main class="mt-10">
        <table class="w-full">
          <tr v-for="item in 4" :key="item.id"
          class="my-3 flex flex-row justify-between font-semibold">
            <td>Dalgona Coffee</td>
            <td>Rp. 10.000</td>
          </tr>
          <tr class="flex justify-end font-semibold">
            <td>Total: Rp. 40.000</td>
          </tr>
        </table>
      </main>
      <footer class="mt-5">
        <p class="font-semibold">Payment: Cash</p>
        <div>
          <button class="w-full mt-3 py-1 bg-pink-500 text-2xl text-white rounded-md">
            Print
          </button>
          <p class="text-center font-semibold">Or</p>
          <button class="w-full mt-3 py-1 bg-teal-400 text-2xl text-white rounded-md">
            Sent Email
          </button>
        </div>
      </footer>
    </t-modal>
    <button class="w-full mt-3 mb-3 py-1 bg-pink-500 text-2xl text-white">Cancel</button>
  </div>
</template>

<script>
export default {
  name: 'CartFooter',
};
</script>

<style>

</style>
