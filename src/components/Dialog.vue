<template>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        fullscreen
        :scrim="false"
        transition="dialog-bottom-transition"
      >
        333333
        <!-- <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            dark
            v-bind="props"
          >
            Open Dialog
          </v-btn>
        </template> -->
        <!-- <v-card>
          <v-toolbar
            dark
            color="primary"
          >
            
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn
                    icon
                    dark
                    @click="dialogClose"
                >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          33333333
          <v-divider></v-divider>
          4444444
        </v-card> -->
      </v-dialog>
    </v-row>
  </template>

<script>
export default {
    props: {
      dialogShow:{
        type: Boolean,
        defaut:false
      }
    },
    mounted() {
      
    },
    data () {
      return {
            dialog: this.dialogShow,
        }
    },
    methods: {
        // dialogClose() {
        //     //this.$emit('emit 名稱', '要傳回的值');
        //     this.dialog = false;
        // }
    }
}
</script>

<style>
    .dialog-bottom-transition-enter-active,
    .dialog-bottom-transition-leave-active {
    transition: transform .2s ease-in-out;
    }
</style>
