<!-- <template>
  <v-main>
    <router-view />
  </v-main>
</template> -->

<template>
  <v-app id="inspire">
    <!-- <v-system-bar>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>
      
      <v-icon>mdi-circle</v-icon>
      
      <v-icon>mdi-triangle</v-icon>
    </v-system-bar> -->

    <v-navigation-drawer v-model="drawer">
          <!-- <v-sheet
            color="grey-lighten-4"
            class="pa-4"
          >
            <v-img :src="avatar" alt = ""></v-img>
            <div>{{ account }}</div>
          </v-sheet> -->

      <v-divider></v-divider>

      <v-list>
          <v-list-item
            v-for="[icon, text,link] in links"
            :key="icon"
            :to="link"
          >
          <template v-slot:prepend>
            <v-icon>{{ icon }}</v-icon>
          </template>

          <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container
        class="py-4 px-4"
        fluid
      >
        <v-main>
          <router-view />
        </v-main>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
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

</script>
