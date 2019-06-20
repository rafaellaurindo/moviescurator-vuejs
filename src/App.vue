<template>
  <div id="app">
    <Header />
    <Tabs />
  </div>
</template>

<script>
import Header from './components/Header';
import Tabs from './components/Tabs';

export default {
  name: 'app',
  components: {
    Header,
    Tabs
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
