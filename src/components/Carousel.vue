<template>
  <div class="carousel flex justify-center h-[100%]" style="width:100%;">

  <!-- Bet365 Desktop -->
  <swiper
    :pagination="{
      type: 'fraction',
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper w-[1000px]"
    
  >
    <swiper-slide>
      <img src="../assets/release/bet365/desktop/sport_overview.png" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/release/bet365/desktop/sport_champ_openX.png" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/release/bet365/desktop/sport_event_open.png" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/release/bet365/desktop/sport_menu_open.png" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/release/bet365/desktop/live_overview.png" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/release/bet365/desktop/live_event_view.png" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/release/bet365/desktop/live_event_view_odd.png" />
    </swiper-slide>
  </swiper>

  <!-- Goldbet -->
  <swiper
    :pagination="{
      type: 'fraction',
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper w-[1000px]"
    v-if="activeRelease === 'chicago'"
  >

  <swiper-slide>
      <img src="../assets/release/bullSport.png" />
  </swiper-slide>
  <swiper-slide>
    <img src="../assets/release/chicago/chicagoLive.png" />
  </swiper-slide>
  <swiper-slide>
    <img src="../assets/release/chicago/chicagoCasino.png" />
  </swiper-slide>
  </swiper>

  <swiper
    :pagination="{
      type: 'fraction',
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper w-[1000px]"
    v-if="activeRelease === 'retro'"
  >
      <swiper-slide>
        <img src="../assets/release/retroSport.png" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/release/retrolive.png" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/release/retrò/retroCasino.png" />
      </swiper-slide>
  </swiper>

    <swiper
    :pagination="{
      type: 'fraction',
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper w-[1000px]"
    v-if="activeRelease === '69'"
  >
      <swiper-slide>
        <img src="../assets/release/69/desktop/sport_overview.png" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/release/69/desktop/sport_menu_open.png" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/release/69/desktop/sport_event_open.png" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/release/69/desktop/sport_champ_open.png" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/release/69/desktop/live_overview.png" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/release/69/desktop/live_event_view.png" />
      </swiper-slide>
        <swiper-slide>
        <img src="../assets/release/69/desktop/live_event_view_open.png" />
      </swiper-slide>
  </swiper>

  <swiper
    :pagination="{
      type: 'fraction',
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper w-[1000px]"
    v-if="activeRelease === 'goldbet'"
  >
    <swiper-slide>
      <img src="../assets/release/goldbet/desktop/sport_overview.png" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/release/goldbet/desktop/sport_menu_open.png" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/release/goldbet/desktop/sport_champ_open.png" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/release/goldbet/desktop/live_event_view.png" />
    </swiper-slide>
  
  </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";

export default {
  name:"CarouselView",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    activeRelease: String
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<style scoped lang="scss">
@import '../style.scss';


.swiper-slide[data-v-e3565ce0] {
    border-radius: 10px;
    overflow: hidden;
}

.swiper {
    width: calc(100vw - 197px);
    height: 600px;
    @include mobile {
      width: auto!important;
      height: auto!important;
    }
}

.swiper img {
  object-fit:scale-down!important;
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

}

</style>
