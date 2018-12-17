<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <!-- <index/>
    <My/> -->
    <!-- <Layout/> -->
    <!-- <Container/> -->
    <Button/>
  </div>
</template>
<script>
import index from './components/index'
import My from './components/My'
import Layout from './components/Layout'
import Container from './components/Container'
import Button from './components/Button'
export default {
  name: 'App',
  components: {
    index,
    My,
    Layout,
    Container,
    Button
  }
}
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
