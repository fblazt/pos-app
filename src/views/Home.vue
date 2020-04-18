<template>
  <div class="h-full w-full flex flex-col">
    <Navbar navTitle="Food Items" />
    <div class="h-full flex flex-row">
      <Sidebar/>
      <main class="h-full w-full mt-16 ml-12 flex flex-row">
        <section class="h-full w-9/12 bg-gray-300">
          <MenuItem/>
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
  },
};
</script>
