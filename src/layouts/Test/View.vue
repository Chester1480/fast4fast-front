<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
          
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav v-for="(item,index) in items">
          <v-list-item :prepend-icon="item.icon" :title="item.title" :value="item.value"></v-list-item>
        </v-list>

      </v-navigation-drawer>
      <v-main style="height: 1200px">
          <router-view />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        rail: true,
        items: [],
      }
    },
    async mounted() {
      this.setItems();
    },
    methods:{
      setItems(){
        this.items = [
          { title: 'Home', icon: 'mdi-home-city' ,value:'home'},
          { title: 'Account', icon: 'mdi-account',value:'account' },
          // { title: 'Users', icon: 'mdi-account-group-outline',value:'home' },
        ];
      }
    }
  }
</script>