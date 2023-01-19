<template>
    <div>
        <div class="sliderDor"></diV>  
        <div class="sponsor w-[100%] h-[100vh] flex" style="min-width:100%;">
            <div class="sponsor_left" style="flex:1;">
            <div class="flex justify-between items-center">
            <label for="release" class="pl-2 uppercase font-bold">Choose a Release:</label>
            <select name="release" id="release" v-model="activeRelease" class="m-2 border h-[45px]" @change="handleRelease" style="outline:none;">
                <option value="bet365">Release bet365</option>
                <option value="goldbet">Release Goldbet</option>
                <option value="chicago">Release Chigago Bulls</option>
                <option value="retro">Release stile Retrò</option>
            </select>
            </div>

                <Sidebar :handleRelease="handleRelease" />
            </div>
            <div class="sponsor_right flex" style="flex:8;">
                <Carousel :activeRelease="activeRelease" />
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import Carousel from '../Carousel.vue'

export default {
    name:'SponsorView',
    data() {
        return {
            activeRelease: 'bet365'
        }
    },
    components: {
        Sidebar,
        Carousel
    },
    props: {

    },
    mounted() {

    },
    methods: {
        changeScreenRelease(release) {
            console.log(release)
        },

        handleRelease() {
            console.log('check Active Release ==> ', this.activeRelease)
        }

    }
    
}
</script>

<style lang="scss" scoped>

@import '../../style.scss';

.sponsor {
    @include mobile {
        display: flex;
        flex-direction: column;
    }
    .sponsor_left {
        @include mobile {
            flex:none!important;
        }
    }
    .sponsor_right {
        @include mobile {
            flex:none!important;
        }
    }
}
</style>
