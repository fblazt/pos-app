<template>
  <div class="h-full w-full flex flex-col">
    <Navbar navTitle="Food Items" />
    <div class="h-full flex flex-row">
      <Sidebar/>
      <main class="h-full w-full mt-16 ml-12 flex flex-row">
        <section class="h-full w-9/12 flex flex-col bg-gray-300">
          <MenuItem/>
          <div class="w-1/4 self-center">
            <t-pagination
              prev-label="Previous"
              next-label="Next"
              first-label="First"
              last-label="Last"
              :total-items="100"
              :per-page="4"
              :limit="5"
              :value="3"
              :hide-ellipsis="true"
              :hide-first-last-controls="true"
              wrapper-class="flex w-full justify-between"
              item-class="h-12"
              page-class="w-12"
              control-class=""
              disabled-control-class="opacity-50"
              ellipsis-class=""
              button-class="p-2 text-blue-500 hover:text-blue-700 w-full"
              control-button-class="text-blue-500 hover:text-blue-700"
              ellipsis-button-class="text-gray-600"
              active-button-class="font-bold underline"
            />
          </div>
        </section>
        <section class="h-screen -mt-16 flex flex-col">
          <div class="fixed h-full w-3/12 flex flex-col justify-between">
            <EmptyCart class="hidden"/>
            <div class="mt-20 overflow-y-scroll">
              <CartItem/>
            </div>
            <CartFooter class=""/>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TPagination from 'vue-tailwind/src/components/TPagination.vue';


import Navbar from '@/components/modules/Navbar.vue';
import Sidebar from '@/components/modules/Sidebar.vue';
import MenuItem from '@/components/modules/MenuItem.vue';
// import EmptyCart from '@/components/modules/EmptyCart.vue';
import CartItem from '@/components/modules/CartItem.vue';
import CartFooter from '@/components/modules/CartFooter.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
    MenuItem,
    // EmptyCart,
    CartItem,
    CartFooter,
    TPagination,
  },
};
</script>
