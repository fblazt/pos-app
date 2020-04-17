<template>
  <div id="app" class="h-full w-full m-0 p-0">
    <router-view/>
  </div>
</template>

<style>
@font-face {
    font-family: 'AirBnb';
    src: url('../font/airbnb-cereal-app-cufonfonts-webfont/AirbnbCerealBook.woff') format('woff')
  }
#app {
  font-family: AirBnb, 'Lucida Sans', 'Lucida Sans Regular',
  'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
