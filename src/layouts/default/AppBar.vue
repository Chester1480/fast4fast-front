<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <v-icon :icon="icon"/>
      {{ iconText }}
    </v-app-bar-title>

    <!-- <v-select
      label="Select"
      :items="lang"
      variant="solo-inverted"
    ></v-select> -->

  </v-app-bar>
</template>

<script setup>
  // const lang = ['us','zhHant'];
  const icon = "mdi-spotify";
  const iconText = "Searchfy";
</script>
