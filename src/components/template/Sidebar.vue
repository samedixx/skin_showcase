<template>
    <div class="sidebar">
    <div class="menu-sidebar flex flex-col justify-center">

        <div class="item-group hover:bg-gray-200 duration-300 flex justify-center items-center flex-col border-b-2 gap-1 border-gray-400 h-[120px]">
            <img class="w-[80px] hover:scale-110 duration-300" src="https://img.wellgame.live/Ball.png" alt="sport" />
            <div class="item_name">Sport</div>
        </div>

        <div class="item-group hover:bg-gray-200 duration-300 flex justify-center items-center flex-col border-b-2 gap-1 border-gray-400 h-[120px]">
            <img class="w-[80px] hover:scale-110 duration-300" src="https://img.wellgame.live/Stopwatch_live.png" alt="live" />
            <div class="item_name">Live</div>
        </div>

        <div class="item-group hover:bg-gray-200 duration-300 flex justify-center items-center flex-col border-b-2 gap-1 border-gray-400 h-[120px]">
            <img class="w-[80px] hover:scale-110 duration-300" src="https://img.wellgame.live/Slot.png" alt="casino" />
            <div class="item_name">Casino</div>
        </div>

        <div class="item-group hover:bg-gray-200 duration-300 flex justify-center items-center flex-col border-b-2 gap-1 border-gray-400 h-[120px]">
            <img class="w-[80px] hover:scale-110 duration-300" src="https://img.wellgame.live/Roulette.png" alt="casino_live" />
            <div class="item_name">Casino Live</div>
        </div>

        <div class="item-group hover:bg-gray-200  duration-300 flex justify-center items-center flex-col border-b-2 gap-1 border-gray-400 h-[120px]">
            <img class="w-[80px] hover:scale-110 duration-300" src="https://img.wellgame.live/virtual_horse_nav_menu.png" alt="virtual" />
            <div class="item_name">Virtuali</div>
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
