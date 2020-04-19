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
    <t-modal ref="modal" id="printThis" class="flex flex-col justify-center items-center">
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
        <div class="h-56 w-full overflow-y-auto">
          <div v-for="item in 4" :key="item.id"
          class="my-3 flex flex-row justify-between font-semibold">
            <div>Dalgona Coffee</div>
            <div>Rp. 10.000</div>
          </div>
        </div>
        <p class="w-full flex flex-row justify-end font-semibold">Total: Rp. 40.000</p>
      </main>
      <footer class="mt-5">
        <p class="font-semibold">Payment: Cash</p>
        <div>
          <button @click="print"
          class="w-full mt-3 py-1 bg-pink-500 text-2xl text-white rounded-md">
            Print
          </button>
          <p class="text-center font-semibold">Or</p>
          <button @click="emailInput = !emailInput"
          :class="!emailInput ? 'w-full mt-3 py-1 bg-teal-400 text-2xl text-white rounded-md'
          : 'hidden'">
            Sent Email
          </button>
          <div :class="emailInput ? 'w-full flex flex-row' : 'hidden'">
            <input type="email" name="email" id="email" placeholder="Input e-mail here"
            class="w-full h-12 px-5 border border-gray-500
              hover:bg-gray-300 focus:outline-none rounded-l-md hover:placeholder-white">
            <button class="w-20 bg-green-500 hover:bg-green-600 fill-current text-white">
              <i class="fas fa-upload fa-2x"></i>
            </button>
            <button @click="emailInput = !emailInput"
            class="w-20 bg-red-500 hover:bg-red-600 fill-current text-white rounded-r-md">
              <i class="fas fa-times-circle fa-2x"></i>
            </button>
          </div>
        </div>
      </footer>
    </t-modal>
    <button class="w-full mt-3 mb-3 py-1 bg-pink-500 text-2xl text-white">Cancel</button>
  </div>
</template>

<script>
export default {
  name: 'CartFooter',
  data() {
    return {
      emailInput: false,
    };
  },
  methods: {
    print() {
      this.$htmlToPaper('printThis');
    },
  },
};
</script>

<style>

</style>
