<template>
  <div class="h-full w-full flex flex-col">
    <Navbar/>
    <div class="h-full flex flex-row">
      <Sidebar/>
      <main class="h-full w-full flex flex-row">
        <section class="w-9/12 flex flex-row flex-wrap justify-center bg-gray-300">
          <MenuCard v-for="item in 64" :key="item.id"/>
        </section>
        <section class="w-3/12">
          <EmptyCart/>
          <button @click="$refs.modal.show()">btn</button>
          <t-modal ref="modal" class="flex flex-col">
            <h1 class="text-2xl font-semibold">Add Item</h1>
            <form action="" class="mt-8">
              <div class="w-full flex flex-row justify-between my-3">
                <label for="name" class="w-1/5 text-xl font-semibold">Name</label>
                <input type="text" name="name" id="name"
                class="w-3/5 h-12 border border-solid border-2 rounded-md shadow-md">
              </div>
              <div class="w-full flex flex-row justify-between my-3">
                <label for="image" class="w-1/5 text-xl font-semibold">Image</label>
                <input type="file" name="image" id="image"
                class="w-3/5 h-12 border border-solid border-2 rounded-md shadow-md">
              </div>
              <div class="w-full flex flex-row justify-between my-3">
                <label for="price" class="w-1/5 text-xl font-semibold">Price</label>
                <input type="number" name="number" id="number"
                class="w-3/5 h-12 border border-solid border-2 rounded-md shadow-md">
              </div>
              <div class="w-full flex flex-row justify-between my-3">
                <label for="category" class="w-1/5 text-xl font-semibold">Category</label>
                <select name="category" id="category" placeholder="category"
                class="w-3/5 h-12 border border-solid border-2 rounded-md shadow-md">
                  <option value="">Maeman</option>
                  <option value="">Minuman</option>
                </select>
              </div>
            </form>
            <div class="flex flex-row justify-end mt-16">
              <button class="w-24 py-1 bg-pink-500 text-white text-xl rounded-lg mr-3">
                Cancel</button>
              <button class="w-24 py-1 bg-teal-400 text-white text-xl rounded-lg">Add</button>
            </div>
          </t-modal>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/modules/Navbar.vue';
import Sidebar from '@/components/modules/Sidebar.vue';
import MenuCard from '@/components/modules/Card.vue';
import EmptyCart from '@/components/modules/EmptyCart.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
    MenuCard,
    EmptyCart,
  },
};
</script>
