<template>

        <v-container fluid>
            <v-sheet width="500" class="mx-auto">
                <v-form fast-fail @submit.prevent>
                  
                    <v-text-field
                    v-model="account"
                    label="account"
                    :rules="accountRules"
                    variant="outlined"
                    clearable
                    ></v-text-field>
            
                    <v-text-field
                    v-model="password"
                    label="password"
                    type="password"
                    variant="outlined"
                    clearable
                    ></v-text-field>
                    <v-btn @click="login" block class="mt-2">Login</v-btn>
                </v-form>
            </v-sheet>
        </v-container>

  </template>
  
  <script>
    import { fetchPost } from '../../utils/url';
    export default {
      data: () => ({
        account: '',
        accountRules: [
          value => {
            if (value?.length > 6) return true
            return 'account must be at least 6 characters.'
          },
        ],
        password: '',
        passwordRules: [
          value => {
            // if (/[^0-9]/.test(value)) return true
            // return 'Last name can not contain digits.'
          },
        ],
      }),
      mounted() {
        document.title = 'login';
      },
      methods: {
          login: async function(){

            const parameters = {
                account: this.account,
                password: this.password,
            }
            let hasParametersEmpty = false;
            Object.keys(parameters).forEach(item => {
                if (!parameters[item]) {
                  hasParametersEmpty = true;
                }
            })

            if (!hasParametersEmpty) {
                const result = await fetchPost("LOGIN", parameters);
                if (result.statusCode == 400) {
                  
                }
            }

            // const result = await fetchPost("LOGIN", parameters);
            // if (result.statusCode == 400) {
              
            // }
            // const isMobileDevice = this.isMobileDevice();

            // if (isMobileDevice()) {
            //   window.location.assign(host + "/");
            // } else {
            //   window.location.assign(host + "/");
            // }
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
