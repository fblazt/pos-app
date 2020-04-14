<template>
  <div id="app">
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
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
