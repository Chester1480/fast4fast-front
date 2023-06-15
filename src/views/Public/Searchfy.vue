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
    import {  getApiUrl , fetchGet } from '@/utils/url'
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

                const data = [
                    {
                        title: "1",
                        content: {}
                    },
                    {
                        title: "2",
                        content: {}
                    },
                    {
                        title: "3",
                        content: {}
                    },
                    {
                        title: "4",
                        content: {}
                    },
                    {
                        title: "5",
                        content: {}
                    },
                ]
                this.cotents = data;
            }
        },
    })
    
</script>

