<template>
  <aside class="h-full w-20 z-40 pt-16 fixed bg-white flex flex-col items-center shadow-lg">
    <router-link class="my-5 hover:text-green-400" to="/">
      <i class="fas fa-utensils fa-2x"></i>
    </router-link>
    <router-link class="my-5 hover:text-green-400" to="/history">
      <i class="fas fa-clipboard-list fa-2x"></i>
    </router-link>
    <button @click="$refs.addModal.show()" class="my-5 hover:text-green-400">
      <i class="fas fa-plus fa-2x"></i>
    </button>
    <t-modal ref="addModal" class="flex flex-col justify-center items-center">
      <h1 class="text-2xl font-semibold">Add Item</h1>
      <form id="form" action="" @submit.prevent="addItem" class="mt-8">
        <div class="w-full flex flex-row justify-between my-3">
          <label for="name" class="w-1/5 text-xl font-semibold">Name</label>
            <input type="text" name="name" id="name" v-model="name"
            class="w-3/5 h-12 border border-solid border-2 rounded-md shadow-md">
            <div v-if="submitted && !$v.name.required"
            class="text-red-500 font-semibold ml-1">
              Required
            </div>
        </div>
        <div class="w-full flex flex-row justify-between my-3">
          <label for="image" class="w-1/5 text-xl font-semibold">Image</label>
          <input type="file" name="image" id="file" ref="file"
          class="w-3/5 h-12 pt-3 pl-1 text-md cursor-pointer border
          border-solid border-2 rounded-md shadow-md">
          <div v-if="submitted && !$v.image.required"
          class="text-red-500 font-semibold ml-1">
            Required
          </div>
          <label for="image"
          class="hidden">
            <span>Upload your Image </span><i class="fas fa-upload"></i>
          </label>
        </div>
        <div class="w-full flex flex-row justify-between my-3">
          <label for="price" class="w-1/5 text-xl font-semibold">Price</label>
          <input type="number" name="price" id="price" min="0" v-model="price"
          class="w-3/5 h-12 border border-solid border-2 rounded-md shadow-md">
          <div v-if="submitted && !$v.price.required"
          class="text-red-500 font-semibold ml-1">
            Required
          </div>
        </div>
        <div class="w-full flex flex-row justify-between my-3">
          <label for="category" class="w-1/5 text-xl font-semibold">Category</label>
          <select name="categoryInput" id="categoryInput" v-model="categoryInput"
          class="w-3/5 h-12 border border-solid border-2 rounded-md shadow-md">
            <option value="" disabled>Pilih atu y</option>
            <option v-for="item in category" :key="item.id" :value="item.id_category">
              {{ item.name_category }}
            </option>
          </select>
          <div v-if="submitted && !$v.category.required"
          class="text-red-500 font-semibold ml-1">
            Required
          </div>
        </div>
      </form>
      <div class="flex flex-row justify-end mt-16">
        <button @click="$refs.addModal.hide()"
        class="w-24 py-1 bg-pink-500 text-white text-xl rounded-lg mr-3">
          Cancel</button>
        <button @click.once="addItem" form="form"
        class="w-24 py-1 bg-teal-400 text-white text-xl rounded-lg">Add</button>
      </div>
    </t-modal>
  </aside>
</template>

<script>
import axios from 'axios';

import { mapState } from 'vuex';
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'Sidebar',
  data() {
    return {
      name: '',
      image: '',
      price: '',
      categoryInput: '',
      submitted: false,
    };
  },
  validations: {
    name: { required },
    image: { required },
    price: { required },
    categoryInput: { required },
  },
  methods: {
    addItem(e) {
      e.preventDefault();
      this.submitted = true;

      this.$v.touch();
      if (this.$v.invalid) {
        return;
      }
      const menuData = new FormData();
      menuData.append('name', this.menu.name);
      menuData.append('image', this.$refs.file.files[0]);
      menuData.append('price', this.menu.price);
      menuData.append('id_category', this.menu.categoryInput);
      axios
        .post('http://localhost:3000/api/v1/menu', menuData)
        .then((res) => {
          console.log(res);
          this.$router.push('/');
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.$store.dispatch('allCategory');
  },
  computed: {
    ...mapState([
      'category',
    ]),
  },
};
</script>

<style>

</style>
