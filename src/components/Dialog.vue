<template>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        fullscreen
        :scrim="false"
        transition="dialog-bottom-transition"
      >
        <!-- <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            dark
            v-bind="props"
          >
            Open Dialog
          </v-btn>
        </template> -->
        <v-card>
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
          
          <v-divider></v-divider>
          
        </v-card>
      </v-dialog>
    </v-row>
  </template>

<script>
export default {
    props: {
        dialogClose: { type: Function },
    },
    data () {
        return {
            dialog: false,
        }
    },
    methods: {
        dialogClose() {
            //this.$emit('emit 名稱', '要傳回的值');
            this.dialog = false;
        }
    }
}
</script>

<style>
    .dialog-bottom-transition-enter-active,
    .dialog-bottom-transition-leave-active {
    transition: transform .2s ease-in-out;
    }
</style>
