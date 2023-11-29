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
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="Test Avatar"
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

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
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
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
        rail: true,
      }
    },
  }
</script>


<!-- <script>
  // import { ref } from "vue";
  // import { useTheme } from "vuetify";
  // const theme = useTheme();
  // const myThemes = ["customDarkTheme", "light", "customLightTheme", "customDarkTheme"];
  // const selectedTheme = ref(myThemes[0]);

  // const setTheme = () => {
  //   theme.global.name.value = selectedTheme.value;
  //   console.log(selectedTheme.value);
  // };
  
  const userInfo = localStorage.getItem('userInfo');
  
  const hostname = window.location.origin;
  //左側功能清單
  const links = [
        // ['mdi-home', 'Home',hostname+'/'],
        ['mdi-comment-outline', 'Demo_about','/about'],
        ['mdi-table', 'demo_table','/table'],
        // ['mdi- ', 'Demo_Trash',''],
        // ['mdi-alert-octagon', 'Demo_Spam',''],
  ];
  // //頭像圖片
   const avatar = 'https://static.vecteezy.com/system/resources/previews/010/054/157/original/chat-bot-robot-avatar-in-circle-round-shape-isolated-on-white-background-stock-illustration-ai-technology-futuristic-helper-communication-conversation-concept-in-flat-style-vector.jpg';
  // //顯示帳號資料
   const account = 'robot_demo';
   const drawer = null;
  export default {
    data: () => ({
      avatar,
      account,
      cards: ['Today', 'Yesterday'],
      drawer: null,
      links,
    }),
  }

</script> -->
