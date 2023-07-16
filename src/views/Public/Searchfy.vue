<template>
    <!-- {{ $t("test") }} -->
    <v-row no-gutters>
        
        <!-- <v-col cols="12" sm="12">
            <br>
            <div class="d-flex justify-center mb-6 ">
                <v-autocomplete
                    :items="searchProperty.historyItems"
                    :placeholder="searchProperty.placeholder"
                    auto-select-first
                    class="flex-full-width"
                    density="comfortable"
                    item-props
                    menu-icon=""
                    prepend-inner-icon="mdi-magnify"
                    rounded
                    theme="light"
                    variant="solo"
                ></v-autocomplete>
            </div>
        </v-col> -->
        <v-col cols="12" sm="12">
            <br>
            <v-carousel>
                <v-carousel-item v-for="{ src , id } in slideShows" :key="id"
                :src="src">
                </v-carousel-item>
            </v-carousel>
            <br>
        </v-col>

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
            return {
                // searchProperty: {
                //     historyItems:new Set(),
                //     placeholder:"輸入"
                // },
                cotents: [],
                slideShows:[],
            }
        },
        async mounted() {
            await this.getSpotifyData();
        },
        watch: {
            
        },
        methods:{
            async getSpotifyData() {
                const url = getApiUrl("");
                const parameters = {
                    q:"11",
                    type:"album", 
                    market:"TW",
                    limit:"1", 
                    offset:"1",
                };
                const result = await fetchGet(getApiUrl("SPOTIFY_NEWRELEASE"), parameters);
                console.log(result)
                await this.settingCotents();
                await this.settingSlideShow();
            },
            async settingSlideShow(data) { 
                
                this.slideShows = [
                    {
                        id:0,
                        src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg",
                    },
                    {
                        id:1,
                        src:"https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
                    },
                    {
                        id:2,
                        src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                    },
                ];
            },
            async settingCotents(data) {
                // const url = getApiUrl("");
                // const result = await fetchGet(getApiUrl, {});
                for (let index = 1; index < 49; index++) {
                    this.cotents.push({
                        title: index,
                        content: {
                        }
                    })
                }
            }
        },
    })
    
</script>

