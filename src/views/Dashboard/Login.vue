<template>

        <v-container fluid>
            <v-sheet width="500" class="mx-auto">
                <v-form fast-fail @submit.prevent>
                  
                    <v-text-field
                    v-model="account"
                    label="account"
                    ></v-text-field>
            
                    <v-text-field
                    v-model="password"
                    label="password"
                    type="password"
                    ></v-text-field>
                    <!-- <button v-on:click="login" block class="mt-2">Login</button> -->
                    <v-btn  @click="postApi" block class="mt-2">Login</v-btn>
                </v-form>
            </v-sheet>
        </v-container>

  </template>
  
  <script>
    import { fetchPost } from '../../utils/url';
    import { getDataByType } from '../../utils/parameters';

    const url = window.location.origin;
    
    export default {
      data: () => ({
        account: '',
        accountRules: [
          value => {
            if (value?.length > 6) return true
            // return 'First name must be at least 6 characters.'
          },
        ],
        password: '',
        passwordRules: [
          value => {
            if (/[^0-9]/.test(value)) return true
            // return 'Last name can not contain digits.'
          },
        ],
      }),
      async method() {
          async function postApi(){
            const data = getDataByType();
            console.log(data);
            // const result = await fetchPost(url, data);
            // if (result) {
              
            // } else {
              
            // }
            
          }
      },
      watch: {
        
      }
    }
  </script>
