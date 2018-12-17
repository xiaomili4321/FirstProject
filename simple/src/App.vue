<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <HelloWorld/>-->
    <!-- <Radio/> -->
    <!-- <checkbox/> -->
    <!-- <Input /> -->
    <Select/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Radio from "./components/Radio";
import Checkbox from "./components/Checkbox";
import Input from "./components/Input";
import Select from "./components/Select";
export default {
  name: "App",
  components: {
    HelloWorld,
    Radio,
    Checkbox,
    Input,
    Select
  }
};
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
