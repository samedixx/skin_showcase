<template>
    <div class="iframe flex w-[100%]">
        <iframe :src="url" class="iframe_real w-[100%] h-[100vh]"></iframe>
    </div>
</template>

<script>


export default {
    name:'IframeView',
    components: {

    },
    props: {
        url: String
    },
    mounted() {
        //console.log('check from main : ', this.openedChamp)
    }
    
}
</script>
