<template>
    <div class="sidebar">
    <div class="menu-sidebar flex flex-col justify-center">

        <div class="device_choose flex items-center h-[60px]">
            <div class="desktop flex items-center justify-center" style="flex:1;">
                <span class="fa fa-desktop" style="font-size:20px;"></span>
            </div>
            <div class="mobile flex items-center justify-center" style="flex:1;">
                <span class="fa fa-mobile" style="font-size:20px;"></span>
            </div>
        </div>

        <div class="items">

            <div class="item-group hover:bg-gray-200 duration-300 flex justify-center items-center flex-col border-t-2 gap-1 border-gray-200 h-[120px]">
                <img class="w-[40px] hover:scale-110 duration-300" src="https://img.wellgame.live/Ball.png" alt="sport" />
                <div class="item_name">Sport</div>
            </div>

            <div class="item-group hover:bg-gray-200 duration-300 flex justify-center items-center flex-col border-t-2 gap-1 border-gray-200 h-[120px]">
                <img class="w-[40px] hover:scale-110 duration-300" src="https://img.wellgame.live/Stopwatch_live.png" alt="live" />
                <div class="item_name">Live</div>
            </div>

            <div class="item-group hover:bg-gray-200 duration-300 flex justify-center items-center flex-col border-t-2 gap-1 border-gray-200 h-[120px]">
                <img class="w-[40px] hover:scale-110 duration-300" src="https://img.wellgame.live/Slot.png" alt="casino" />
                <div class="item_name">Casino</div>
            </div>

            <div class="item-group hover:bg-gray-200 duration-300 flex justify-center items-center flex-col border-t-2 gap-1 border-gray-200 h-[120px]">
                <img class="w-[40px] hover:scale-110 duration-300" src="https://img.wellgame.live/Roulette.png" alt="casino_live" />
                <div class="item_name">Casino Live</div>
            </div>

            <div class="item-group hover:bg-gray-200  duration-300 flex justify-center items-center flex-col border-t-2 gap-1 border-gray-200 h-[120px]">
                <img class="w-[40px] hover:scale-110 duration-300" src="https://img.wellgame.live/virtual_horse_nav_menu.png" alt="virtual" />
                <div class="item_name">Virtuali</div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>

export default {
    name:'SidebarView',
    data() {
        return {
        
        }
    },
    components: {
        
    },
    props: {

    },
    mounted() {

    }
    
}
</script>

<style lang="scss" scoped>
@import '../../style.scss';

.desktop{
    @include mobile {
        background: white;
        height: 100%;
        border-right: 1px solid #cecece;
    }
} 

.mobile {
    @include mobile {
        background: white;
        height: 100%;
        border-right: 1px solid #cecece;
    }
}

.item-group {
    @include mobile {
        display:flex;
        flex:1;
    }
}

.items {
    @include mobile {
        display: flex;
        align-items: center;
        .item_name {
            @include mobile {
                font-size: 10px;
            }
        }
        .item-group img {
            @include mobile {}
            width: 40px;
            height: 40px;
            object-fit: contain;
        }
    }
}

</style>
