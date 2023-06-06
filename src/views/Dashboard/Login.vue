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
                    <v-btn @click="postApi" block class="mt-2">Login</v-btn>
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
      methods: {
          postApi: async function(){
            const data = getDataByType();
            localStorage.setItem("token", "1111");
            const host = window.location.origin;
           
            const isMobileDevice = this.isMobileDevice();

            if (isMobileDevice()) {
              window.location.assign(host + "/");
            } else {
              window.location.assign(host + "/");
            }
            // const result = await fetchPost(url, data);
            // if (result) {
              
            // } else {
              
            // }
            
          },
          isMobileDevice: function () { 
            let mobileDevices = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
            for (var i = 0; i < mobileDevices.length; i++) {
                if (navigator.userAgent.match(mobileDevices[i])) {
                  //console.log("isMobileDevice: match " + mobileDevices[i]);
                  return true;
                }
            }
            return false
          }
      },
      watch: {
        
      }
    }
  </script>
