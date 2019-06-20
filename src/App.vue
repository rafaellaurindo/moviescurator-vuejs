<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
  html, body, #app {
    width: 100%;
    margin: 0px;
    padding: 0px;
    height: 100%;
  }

  #app {
    background-color: #b94c4c;
  }
</style>
