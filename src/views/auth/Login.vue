<template>
  <div class="h-full w-full flex flex-row justify-center items-center bg-green-600">
    <div
    class="h-1/2 w-1/2 lg:h-2/6 lg:w-2/6 py-5 flex flex-col justify-center items-center
    bg-gray-100 rounded-lg shadow-xl">
      <header>
        <h1 class="text-4xl">Espresshop</h1>
      </header>
      <main class="w-full mt-3">
        <form action="" class="w-full px-3 flex flex-col justify-center items-center">
          <div class="w-full flex justify-center items-center">
            <input type="email" name="email" id="email" placeholder="E-mail"
            class="w-2/3 h-12 px-5 border border-gray-600 hover:bg-gray-300
            rounded-full">
          </div>
          <div class="w-full mt-3 flex justify-center items-center">
            <input type="password" name="password" id="password" placeholder="Password"
            class="w-2/3 h-12 px-5 border border-gray-600 hover:bg-gray-300
            rounded-full">
          </div>
          <div class="w-full mt-3 flex flex-col justify-center items-center">
            <button
            class="h-10 w-2/3 bg-green-600 hover:bg-green-900 hover:text-white
            rounded-full text-white text-xl transform hover:scale-105">
              Login
            </button>
            <a href="" class="mt-3 hover:text-green-600">Karyawan baru gan?</a>
          </div>
        </form>
      </main>
      <footer>
        <!-- <p>Point of Sales</p> -->
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>

<style>

</style>
