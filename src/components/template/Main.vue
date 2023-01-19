<template>
    <div class="main flex w-[100%]">
        <Sponsor class="w-[100%]"/>
    </div>
</template>

<script>
import Sponsor from './Sponsor.vue'


export default {
    name:'MainView',
    data() {
        return {
        link1: 'https://betplay365.me'
        
        }
    },
    components: {
        Sponsor
    },
    props: {

    },
    mounted() {
        //console.log('check from main : ', this.openedChamp)
    }
    
}
</script>
