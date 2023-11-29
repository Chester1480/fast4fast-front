<template>
  <v-app>
    <default-view />
  </v-app>
</template>

<script setup>
  import DefaultView from './View.vue'
  const token = localStorage.getItem('token');
</script>
