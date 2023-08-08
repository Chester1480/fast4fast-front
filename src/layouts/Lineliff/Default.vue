<template>
   <v-app>
        <v-main class="overflow-hidden" style="overflow: scroll; border: 1px solid red;">
          <v-container class="fill-height" fluid>
            <v-card style="width: 100%;">
                <v-card-text>
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
              </v-card-text>
            </v-card>
          </v-container>
        </v-main>
        <v-footer color="indigo" app>
          <v-tabs
              v-model="tab"
              :bg-color="tabs.backgroundColor"
              align-tabs="center"
              class="d-flex justify-center"
              fixed-tabs 
            >
              
              <v-tab  value="tab-1" to="/Lineliff" >
                <v-icon>mdi-home</v-icon>
              </v-tab>

              <v-tab value="tab-2" to="/Lineliff/Search"   >
                <v-icon>mdi-magnify</v-icon>
              </v-tab>
              
              <v-tab value="tab-3" >
                <v-icon>mdi-home</v-icon>
              </v-tab>

              <v-tab value="tab-4" >
                <v-icon>mdi-account</v-icon>
              </v-tab>
              
            </v-tabs>
        </v-footer>
    </v-app>
  </template>
  
<script>
  export default {
    data () {
      return {
        tabs: {
          backgroundColor:"indigo",
          content:[],
        },
        tab: null,
        text: '',
      }
    },
    async mounted() {
      await this.settingTans();
    },
    methods:{
      async settingTans() {
        const tabs = [
          {
            id: "tab-1",
            icon: "mdi-home",
            name: "Home",
            url: "/Lineliff"
          },
          {
            id: "tab-2",
            icon: "",
            name: "SEARCH",
            url: "/Lineliff/Search"
          }
        ]
        this.tabs.content = tabs;
      }
    }
  }
</script>

<style>
  /* menu {
    text-align: center;
    vertical-align: bottom;
  }  */

  /* main {
    padding: 100px;
    text-align: center;
    vertical-align: top;
  } */
</style>