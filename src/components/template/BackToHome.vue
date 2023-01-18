<template>
    <div class="backToHome items-center justify-between bg-black flex p-[5px] text-white absolute bottom-0 right-0 left-0 flex">
        
        <div class="text-dor-100 text-xl flex items-center gap-1">
            <img class="w-8 logo" src="../../assets/logo/logo.png" alt="logo" />
            <span>DEMO MODE ACTIVE</span>
            </div>
        <router-link to="/">Back to Home &raquo;</router-link>
    </div>
</template>

<script>

export default {
    name:'BackToHome',
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
.backToHome {
    background:#000000b0;
    .logo {
        filter: invert(1);
    }
}
</style>
