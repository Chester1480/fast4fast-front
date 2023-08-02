<template>
   <v-app>

        <v-main>
            <v-window v-model="tab">
                  <v-window-item
                    v-for="i in 3"
                    :key="i"
                    :value="'tab-' + i"
                  >
                    <v-card>
                      <v-card-text>
                        <router-view />
                      </v-card-text>
                    </v-card>
                  </v-window-item>
              </v-window>
        </v-main>

        <menu>
              
            <v-card>
             
              <v-tabs
                v-model="tab"
                bg-color="deep-purple-accent-4"
                centered
                stacked
              >
               
                <v-tab value="tab-1">
                  <v-icon>mdi-home</v-icon>
                  Home
                </v-tab>

                <v-tab value="tab-2">
                  <v-icon>mdi-home</v-icon>
                  Favorites
                </v-tab>

                <v-tab value="tab-3">
                  <v-icon>mdi-home</v-icon>
                  Nearby
                </v-tab>

                
              </v-tabs>
             
            </v-card>
        </menu>

    </v-app>
  </template>
  
<script>
  export default {
    data () {
      return {
        tab: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>

<style>
  menu {
    background-color: #2b568d;
    color: #fff;
    padding: 10px;
    text-align: center;
    vertical-align: bottom;
  }

  main {
    padding: 10px;
  }
</style>