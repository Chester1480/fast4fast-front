<template>
  <v-app-bar flat>

    <v-app-bar-title>
      <v-icon :icon="icon"/>
      {{ iconText }}
    </v-app-bar-title>

    <v-col cols="12" sm="3">
      <v-select
        :label="label"
        :items="selectItems"
      ></v-select>
    </v-col>

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
  const label = "地區";
  const selectItems = [
    'Us', 'Tw'
  ];
</script>
