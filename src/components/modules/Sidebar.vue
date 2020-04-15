<template>
  <aside class="h-full w-20 bg-white flex flex-col items-center">
    <router-link class="my-5 hover:text-green-400" to="/history">
      <i class="fas fa-utensils fa-2x"></i>
    </router-link>
    <router-link class="my-5 hover:text-green-400" to="/history">
      <i class="fas fa-clipboard-list fa-2x"></i>
    </router-link>
    <button @click="$refs.modal.show()" class="my-5 hover:text-green-400">
      <i class="fas fa-plus fa-2x"></i>
    </button>
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
        <button @click="$refs.modal.hide()"
        class="w-24 py-1 bg-pink-500 text-white text-xl rounded-lg mr-3">
          Cancel</button>
        <button class="w-24 py-1 bg-teal-400 text-white text-xl rounded-lg">Add</button>
      </div>
    </t-modal>
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
