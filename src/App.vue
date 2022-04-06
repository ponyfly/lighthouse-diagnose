<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <div>{{ activeName }}</div>
  <router-view></router-view>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import {ref} from "vue";
let activeName = ref('')
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
