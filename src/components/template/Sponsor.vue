<template>
    <div>
        <div class="sliderDor"></diV>  
        <div class="sponsor w-[100%] h-[100vh] flex">
            <div class="sponsor_left" style="flex:1;">
                <Sidebar />
            </div>
            <div class="sponsor_right flex" style="flex:8;">
                <img src="../../assets/release/bet365.png" />
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue'

/*

# duplicare header senza menu release demo ed inserie quello senza link nella home === fatto

# per accedere alla showcase dove ci sono link demo bisogna fare prima login === fatto

# creare nuove route per utente non loggato === fatto

# creare homepage di presentazione e pagina contatti

# inserire carousel dor

# inserire icone pagine sport live casino casino_live virtuali poker === fatto

*/

export default {
    name:'SponsorView',
    data() {
        return {
        skins: [
            {
                name: 'bet365',
                sport: '',
                live: '', 
                casino: '',
                casino_live: '',
                virtuali: ''
            }
        ]
        }
    },
    components: {
        Sidebar
    },
    props: {

    },
    mounted() {

    }
    
}
</script>
