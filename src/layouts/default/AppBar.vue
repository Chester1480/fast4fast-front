<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <v-icon :icon="icon"/>
      {{ iconText }}
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup>
  const icon = "mdi-spotify";
  const iconText = "Searchfy";
</script>
