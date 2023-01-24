<template>
    <div>
        <div class="sliderDor"></diV>  
        <div class="sponsor w-[100%] h-[100vh] flex" style="min-width:100%;">
            <div class="sponsor_left px-2 py-2 flex flex-col gap-3 bg-white relative" style="flex:1; border-right:0.5px solid #cecece; z-index:999;">
                
                <div class="">
                    <label for="release" class="uppercase font-bold flex text-xs items-center pb-2"><i class="fa fa-cubes mr-2" aria-hidden="true"></i> Choose a Release:</label>
                    <select name="release" id="release" v-model="activeRelease" class="w-[100%] border h-[45px] flex" @change="handleRelease" style="outline:none;flex:1;">
                        <option value="select" disabled>Skin</option>
                        <option value="365">Release 365</option>
                        <option value="goldbet">Release Gold</option>
                        <option value="chicago">Release Chigago</option>
                        <option value="retro">Release stile Retrò</option>
                        <option value="69">Release stile 69</option>
                    </select>
                </div>

                <div class="">
                    <label for="device" class="uppercase font-bold flex text-xs items-center pb-2"><i class="fa fa-eye mr-2" aria-hidden="true"></i> Choose a view:</label>
                    <select name="device" id="device" v-model="activeDevice" class="w-[100%] border h-[45px] flex" style="outline:none;flex:1;">
                        <option value="device" disabled>Device</option>
                        <option value="bet365">Desktop View</option>
                        <option value="goldbet">Mobile View</option>
                    </select>
                </div>

                <div class="frame_sec">
                    <div class="">
                        <label for="demo" class="uppercase font-bold flex items-center text-xs pb-2"><i class="fa fa-laptop pr-2" aria-hidden="true"></i> Try our Demo:</label>
                        <select name="demo" id="demo" v-model="activeDemo" class="w-[100%] border h-[45px] flex" style="outline:none;flex:1;">
                            <option value="demo" disabled>Demo</option>
                            <option value="demo_bet365">Demo 365</option>
                            <option value="demo_goldbet">Demo Gold</option>
                        </select>
                    </div>
                </div>

                <div class="open_demo_wrapper">
                    <div class="open_demo bg-green-600 text-white rounded flex items-center w-[100%] h-[35px] justify-center">OPEN DEMO</div>
                </div>

                <Sidebar :handleRelease="handleRelease" />
            </div>
            <div class="sponsor_right flex" style="flex:8;">
                
                <div class="homepage" v-if="activeRelease === 'select'">
                    <swiper
                        v-if="activeRelease === 'select'"
                        :spaceBetween="30"
                        :centeredSlides="true"
                        :autoplay="{
                        delay: 2500,
                        disableOnInteraction: false,
                        }"
                        :pagination="{
                        clickable: true,
                        }"
                        :navigation="true"
                        :modules="modules"
                        class="mySwiper"
                    >

                        <swiper-slide><img src="https://mediatest.playbet24.xyz/site/commons_sportbet25/img/new_images/rabona/center/banners/bg/center_banner.jpg" /></swiper-slide>
                        <swiper-slide><img src="https://test.mbet717.com/site/commons/img/banner-static/casino_it.jpg?vers=1212023.0.25.378116" style="object-fit:fill;" /></swiper-slide>
                        <swiper-slide><img src="https://mediatest.playbet24.xyz/site/commons_sportbet25/img/new_images/mitobet44/center/banners/bg/top_banner_mito.jpg" /></swiper-slide>
                        
                    </swiper>

                    <div  v-if="activeRelease === 'Skin'" class="service-title">Our Services</div>
                    <div  v-if="activeRelease === 'Skin'" class="services flex items-center gap-2">
                        <div class="service-item flex items-center hover:bg-gray-200 duration-300">
                            <div class="img_parent">
                                <img src="https://mediatest.playbet24.xyz/site/commons_sportbet25/img/new_images/mbet717/extra/icons/sport.png" />
                            </div>
                            <div class="text_parent">
                                <div class="service-name">Sport Prematch</div>
                                <div class="desc">
                                    <div class="desc-text">Lorem Ipsum cale male rex mares on cui teanda</div>
                                </div>
                            </div>
                        </div>
                        <div class="service-item flex items-center hover:bg-gray-200 duration-300">
                            <div class="img_parent flex items-center">
                            <img src="https://mediatest.playbet24.xyz/site/commons_sportbet25/img/new_images/mbet717/extra/icons/live.png" />
                            </div>
                            <div class="text_parent">
                                <div class="service-name">Live Betting</div>
                                <div class="desc">
                                    <div class="desc-text">Lorem Ipsum cale male rex mares on cui teanda</div>
                                </div>
                            </div>

                        </div>
                        <div class="service-item flex items-center hover:bg-gray-200 duration-300">
                            <div class="img_parent flex items-center">
                                <img src="https://mediatest.playbet24.xyz/site/commons_sportbet25/img/new_images/mbet717/extra/icons/casino.png" />
                            </div>
                            <div class="text_parent">
                                <div class="service-name">Casino Games</div>
                                <div class="desc">
                                    <div class="desc-text">Lorem Ipsum cale male rex mares on cui teanda</div>
                                </div>
                            </div>
                        </div>
                        <div class="service-item flex items-center hover:bg-gray-200 duration-300">
                            <div class="img_parent flex items-center" style="flex:1;">
                                <img src="https://mediatest.playbet24.xyz/site/commons_sportbet25/img/new_images/mbet717/extra/icons/live_casino.png" />
                            </div>
                            <div class="text_parent">
                                <div class="service-name">Casino Live Games</div>
                                <div class="desc">
                                    <div class="desc-text">Lorem Ipsum cale male rex mares on cui teanda</div>
                                </div>
                            </div>
                        </div>
                        <div class="service-item flex items-center hover:bg-gray-200 duration-300">
                            <div class="img_parent flex items-center" style="flex:1;">
                                <img src="https://mediatest.playbet24.xyz/site/commons_sportbet25/img/new_images/mbet717/extra/icons/virtual.png" />
                            </div>
                            <div class="text_parent flex" style="flex:2;">
                                <div class="service-name">Virtual Games</div>
                                <div class="desc">
                                    <div class="desc-text">Lorem Ipsum cale male rex mares on cui teanda</div>
                                </div>
                            </div>
                        </div>
                        <div class="service-item flex items-center hover:bg-gray-200 duration-300">
                            <div class="img_parent flex" style="flex:1;">
                                <img src="https://mediatest.playbet24.xyz/site/commons_sportbet25/img/new_images/mbet717/extra/icons/poker.png" />
                            </div>
                            <div class="text_parent flex" style="flex:2">
                                <div class="service-name">Poker</div>
                                <div class="desc">
                                    <div class="desc-text">Lorem Ipsum cale male rex mares on cui teanda</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Carousel v-if="activeRelease !== 'select'" :activeRelease="activeRelease" />

               

            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import Carousel from '../Carousel.vue'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
    name:'SponsorView',
    data() {
        return {
            activeRelease: 'select',
            activeDevice: 'device',
            activeDemo: 'demo'
        }
    },
    components: {
        Sidebar,
        Carousel,
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
        modules: [Autoplay, Pagination, Navigation],
        };
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



.sponsor_left {
    width: 240px!important;
    min-width: 240px;
}

.homepage {
    width: 100%;
    height: 100%;
    min-height: 100%;
    display: flex;
    flex-direction:column;
}

.sponsor_left {
    @include mobile {
        width:100%!important;
        min-width:100%!important;
    }
}

.swiper-slide {
        width:100%!important;
}

.text_parent {
    display: flex;
    flex-direction: column;
    font-size: 12px;
}

.desc-text {
    max-width: 103px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.service-name {
    font-weight: bold;
    font-size: 14px;
}

.service-title {
    padding-left: 10px;
    font-size: 30px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom:20px;
}

.img_parent {
    /* flex: 1; */
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.services {
    margin: 10px;
    display: flex;
}

.img_parent img {
    /* border: 1px solid red; */
    position: relative;
    top: -25px;
    left: -5px;
}

.service-item {
    border: 1px solid #ebebeb;
    height: 65px;
    border-radius: 10px;
    display: flex;
    flex: 1;
    padding-right: 10px;
}



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

.swiper {
height: 60%!important;
overflow:visible!important;
}

.swiper-slide {
text-align: center;
font-size: 18px;
background: #fff;

/* Center slide text vertically */
display: -webkit-box;
display: -ms-flexbox;
display: -webkit-flex;
display: flex;
-webkit-box-pack: center;
-ms-flex-pack: center;
-webkit-justify-content: center;
justify-content: center;
-webkit-box-align: center;
-ms-flex-align: center;
-webkit-align-items: center;
align-items: center;
}

.swiper-slide img {
display: block;
width: 100%;
height: 100%;
object-fit: cover;
}

</style>
