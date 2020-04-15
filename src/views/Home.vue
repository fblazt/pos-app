<template>
  <div class="h-full w-full flex flex-col">
    <Navbar/>
    <div class="h-full flex flex-row">
      <Sidebar/>
      <main class="h-full w-full flex flex-row">
        <section class="w-9/12 flex flex-row flex-wrap justify-center bg-gray-300">
          <MenuCard v-for="item in 10" :key="item.id"/>
        </section>
        <section class="h-screen w-3/12 flex flex-col justify-between">
          <EmptyCart class="hidden"/>
          <div>
            <CartItem v-for="item in 3" :key="item.id"/>
          </div>
          <CartFooter/>
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
// import EmptyCart from '@/components/modules/EmptyCart.vue';
import CartItem from '@/components/modules/CartItem.vue';
import CartFooter from '@/components/modules/CartFooter.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
    MenuCard,
    // EmptyCart,
    CartItem,
    CartFooter,
  },
};
</script>
