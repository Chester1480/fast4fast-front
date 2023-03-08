<template>
  <v-app>
    <default-bar />
    <br><br><br><br>
    <default-view />
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  const token = localStorage.getItem('token');
</script>
