<template>
  <div class="h-full w-full flex flex-row justify-center items-center bg-green-600">
    <div
    class="container md:w-3/4 h-full lg:h-auto flex flex-row justify-center
    items-center bg-gray-100 rounded-lg shadow-2xl">
      <div class="hidden h-full lg:flex w-1/2">
        <img src="https://miro.medium.com/max/5188/1*yqLNlw42tsIPgGuDqIzuSw.jpeg" alt=""
        class="object-cover ml-10 h-full w-full rounded-lg opacity-75 shadow-lg">
      </div>
      <div class="w-full my-3 lg:w-1/2 mt-3 flex flex-col justify-center items-center">
        <header>
          <img src="@/assets/img/warung-onlen.png" alt=""
          class="h-32 w-32 object-cover rounded-lg shadow-lg">
        </header>
        <main class="w-full mt-3">
          <form id="form" @submit.prevent="register"
          class="w-full px-3 flex flex-col justify-center items-center">
            <div class="w-full mt-3 flex justify-center items-center">
              <input type="text" name="name" id="name" placeholder="Name"
              v-model="name" autofocus
              class="w-full md:w-2/3 h-12 px-5 border shadow-lg
              hover:bg-gray-300 focus:outline-none rounded-full"
              :class="$v.name.$error ? 'bg-red-200 placeholder-red-500' : 'bg-white'">
              <div v-if="submitted && !$v.name.required"
              class="text-red-500 font-semibold ml-1">
                Required
              </div>
            </div>
            <div class="w-full mt-3 flex justify-center items-center">
              <input type="email" name="email" id="email" placeholder="E-mail" v-model="email"
              class="w-full md:w-2/3 h-12 px-5 border shadow-lg
              hover:bg-gray-300 focus:outline-none rounded-full hover:placeholder-white"
              :class="$v.email.$error ? 'bg-red-200 placeholder-red-500' : 'bg-white'">
              <div v-if="submitted && $v.email.$error" class="text-red-500 font-semibold ml-1">
                  <span v-if="!$v.email.required">Required</span>
                  <span v-if="!$v.email.email">Invalid</span>
              </div>
            </div>
            <div class="w-full mt-3 flex justify-center items-center">
              <input type="password" name="password" id="password" placeholder="Password"
              v-model="password"
              class="w-full md:w-2/3 h-12 px-5 border shadow-lg
              hover:bg-gray-300 focus:outline-none rounded-full"
              :class="$v.password.$error ? 'bg-red-200 placeholder-red-500' : 'bg-white'">
              <div v-if="submitted && !$v.password.required"
              class="text-red-500 font-semibold ml-1">
                Required
              </div>
            </div>
            <div class="w-full mt-3 flex justify-center items-center">
              <input type="password" name="password2" id="password2" placeholder="Repeat password"
              v-model="password2"
              class="w-full md:w-2/3 h-12 px-5 border shadow-lg
              hover:bg-gray-300 focus:outline-none rounded-full"
              :class="$v.password2.$error ? 'bg-red-200 placeholder-red-500' : 'bg-white'">
              <div v-if="submitted && !$v.password2.sameAsPassword"
              class="text-red-500 font-semibold ml-1">
                Must be identical
              </div>
            </div>
            <div class="w-full my-3 flex flex-col justify-center items-center">
              <button form="form" @click.once="register"
              class="w-full md:w-2/3 h-10 bg-green-600 hover:bg-green-900
              focus:bg-green-900 hover:text-white shadow-lg
              rounded-full text-white text-xl transform hover:scale-105 focus:outline-none">
                Register
              </button>
              <!-- <a href="" class="mt-3 hover:text-green-600">Karyawan baru gan?</a> -->
            </div>
          </form>
        </main>
        <footer>
          <!-- <p>Point of Sales</p> -->
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required, email, sameAs, minLength,
} from 'vuelidate/lib/validators';

export default {
  name: 'Login',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password2: '',
      submitted: false,
    };
  },
  validations: {
    name: { required },
    email: { required, email },
    password: { required, minLength: minLength(6) },
    password2: { sameAsPassword: sameAs('password') },
  },
  methods: {
    register(e) {
      e.preventDefault();
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        // eslint-disable-next-line no-useless-return
        return;
      }
      console.log('nice');
    },
  },
};
</script>

<style>

</style>
