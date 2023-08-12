<template>
    <div>
        
        <v-row no-gutters  
               v-for="(item) in cards" 
               :key="item"
        >
            <v-col>
                <v-card
                    class="mx-auto"
                >
                    <v-img
                        class="align-end text-white"
                        :src="item.imgUrl"
                        cover
                        >
                    <!-- <v-card-title>Top 10 Australian beaches</v-card-title> -->
                    </v-img>

                    <!-- <v-card-subtitle class="pt-4">
                    Number 10
                    </v-card-subtitle> -->

                    <v-card-text>
                        <div>{{ item.title }}</div>
                        <div>{{ item.content }}</div>
                    </v-card-text>

                    <v-card-actions>
                    <v-btn v-on:click="openMoreInfo" color="orange">
                        {{ item.btnText }}
                    </v-btn>
                    
                    </v-card-actions>
                    <br>

                </v-card>
            </v-col>
        </v-row>
        <!-- <Dialog :dialogShow="Dialog.show" ></Dialog> -->
    </div>
    
    
</template>

<script>
import { defineComponent } from 'vue';
import Dialog from '@/components/Dialog.vue'

export default defineComponent({
    components:{
        Dialog,
    },
    data() {
        return {
            TESTD: false,
            Dialog: {
                show:false,
            },
            cards:[],
        }
    },
    async mounted() {
        await this.setCards();
    },
    watch: {
        
    },
    methods:{
        async setCards() {
            const cards = [
                {
                    imgUrl: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
                    title: "Title",
                    content: "content content content content content content content content",
                    btnText:"moreInfo"
                },
                {
                    imgUrl: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
                    title: "Title",
                    content: "content content content content content content content content",
                    btnText:"moreInfo"
                },
            ]
            this.cards = cards;
        },
        async openMoreInfo() {
            this.Dialog.show = true;
            this.TESTD = true;;
            console.log( this.Dialog.show)
        },
        dialogClose() {
            this.Dialog.show = false;
        }
    },
})
    
</script>
