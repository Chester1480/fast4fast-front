<template>
    <!-- {{ $t("test") }} -->
    <v-row no-gutters>
        <v-col v-for="(item) in cotents"
            :key="item.title"
            cols="12"
            sm="3"
        >
            <v-sheet class="ma-2 pa-2">
                <v-col cols="16" md="12">
                    <h1>{{ item.title }}</h1> 
                </v-col>
                <v-col cols="16" md="12">
                    <h1>{{ item.content }}</h1> 
                </v-col>
            </v-sheet>
        </v-col>
    </v-row>
</template>

<script>
    import { getApiUrl, fetchGet } from '@/utils/url'
    import { putData , getData , getAllkeys } from '@/utils/IndexedDB';
    
    export default ({
        data() {
            return{
                cotents: [],
            }
        },
        async mounted() {

            await this.getTestData();
        },
        watch: {
            
        },
        methods:{
            async getTestData() {
                // const url = getApiUrl("");
                // const result = await fetchGet(getApiUrl, {});

                const data = [];

                for (let index = 0; index < 50; index++) {
                    data.push({
                        title: index,
                        content: {}
                    })
                }
              
                this.cotents = data;
            }
        },
    })
    
</script>

