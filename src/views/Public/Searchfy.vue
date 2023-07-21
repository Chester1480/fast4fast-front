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
        <v-col cols="12" sm="12" v-if="carousel.show" >
            <br>
            <v-carousel v-model="carousel.index"
                hide-delimiters
                progress="primary"
            >
                <v-carousel-item 
                    v-for="{ images1 , id } in slideShows" 
                    :key="id"
                    :src="images1"
                >
                </v-carousel-item>
            </v-carousel>
            <br>
        </v-col>

        <!-- <v-col cols="12" sm="12" class="d-flex justify-center" >
            <v-btn elevation="2" v-model="carousel.show" @click="carouselShow()" x-small :icon="carousel.showButtonIcon"  color="green"></v-btn>
        </v-col> -->

        <v-col cols="12" sm="12" class="d-flex justify-center mb-6" >
            <br>
            <iframe style="border-radius:12px" 
                :src="play.src" 
                width="100%" 
                height="152" 
                frameBorder="0" 
                allowfullscreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
            </iframe>
        </v-col>

        <v-col v-for="(item) in cotents"
            :key="item.title"
            cols="12"
            sm="3"
        >
            <v-sheet class="ma-2 pa-2">
                <!-- <v-col cols="16" md="12">
                    <h1>{{ item.name }}</h1> 
                </v-col> -->
                <v-img 
                    :width="300"
                    aspect-ratio="16/9"
                    cover
                    :src="item.images1"
                >
                    <v-btn
                        class="ma-5"
                        color="green"
                        icon="mdi-play"
                        @click="play(item.track[0].id)"
                    ></v-btn>
                </v-img>
               

                <!-- <v-col v-for="(track) in item.track"  
                    :key="track.id"
                    cols="16"
                    md="12"  
                >
                    <iframe style="border-radius:12px" 
                        :src="`https://open.spotify.com/embed/track/`+track.id" width="100%" height="152" 
                        frameBorder="0" allowfullscreen="" 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy">
                    </iframe>
                </v-col> -->
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
                carousel: {
                    index: 0,
                    show: false,
                    showButtonIcon:"mdi-arrow-up-bold"
                },
                player: {
                    id: "",
                    show: false,
                    status: false,
                    srcOriginUrl: `https://open.spotify.com/embed/track/`,
                    src:"https://open.spotify.com/embed/track/"
                },
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
                const parameters = {
                    country:"US",
                    limit:"20", 
                    offset:"1",
                };
                const result = await fetchGet(getApiUrl("SPOTIFY_NEWRELEASE"), parameters);
                const { href , items , next  , previous , total } = result.data.data.albums;
                await this.settingCotents(items);
                await this.settingSlideShow(items);
            },
            async settingSlideShow(data) { 
                let slideShowsArray = [];
                for (let index = 0; index < 5; index++) {
                    slideShowsArray.push({
                            album_type: data[index].album_type,
                            href: data[index].href,
                            name: data[index].name,
                            id: data[index].id,
                            uri: data[index].uri,
                            images1: data[index].images[0].url,
                            release_date:data[index].release_date,
                            total_tracks: data[index].total_tracks,
                            external_urls: data[index].external_urls,
                    })
                }
                this.slideShows = slideShowsArray;
            },
            async settingCotents(data) {
                let CotentsArray = [];
                for (let index = 0; index < 20; index++) {
                    CotentsArray.push({
                            album_type: data[index].album_type,
                            href: data[index].href,
                            name: data[index].name,
                            id: data[index].id,
                            uri: data[index].uri,
                            images1: data[index].images[0].url,
                            images3: data[index].images[2].url,
                            release_date:data[index].release_date,
                            total_tracks: data[index].total_tracks,
                            external_urls: data[index].external_urls,
                            content: data[index].external_urls,
                            track:data[index].tracks
                    })
                }
                console.log(CotentsArray)
                this.cotents = CotentsArray;
            },
            play(id) {
                this.player.src = this.player.srcOriginUrl + id;
                this.player.show = true;
            },
            carouselShow () {
                if (this.carousel.show == true) {
                    this.carousel.showButtonIcon = "mdi-arrow-down-bold";
                    this.carousel.show = false
                } else {
                    this.carousel.showButtonIcon = "mdi-arrow-up-bold";
                    this.carousel.show = true
                }
                
            },
        },
    })
    
</script>

