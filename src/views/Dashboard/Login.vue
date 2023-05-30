<template>

        <v-container fluid>
            <v-sheet width="500" class="mx-auto">
                <v-form fast-fail @submit.prevent>
                    <v-text-field
                    v-model="account"
                    label="account"
                    :rules="accountRules"
                    ></v-text-field>
            
                    <v-text-field
                    v-model="password"
                    label="password"
                    type="password"
                    :rules="passwordRules"
                    ></v-text-field>
            
                    <v-btn type="submit" @click="post" block class="mt-2">Submit</v-btn>
                </v-form>
            </v-sheet>
        </v-container>

  </template>
  
  <script>
    import { fetchPost } from '../../utils/url';
    // import { getApiUrl } from '../../utils/url';

    const url = window.location.origin;
    
    export default {
      data: () => ({
        account: '',
        accountRules: [
          value => {
            if (value?.length > 6) return true
            return 'First name must be at least 6 characters.'
          },
        ],
        password: '',
        passwordRules: [
          value => {
            if (/[^0-9]/.test(value)) return true
            return 'Last name can not contain digits.'
          },
        ],
      }),
      async method() {
          async function post(){
            const data = {
              
            }

            const result = await fetchPost(url, data);
            if (result) {
              
            } else {
              
            }
            
          }
      },
      watch: {
        
      }
    }
  </script>
