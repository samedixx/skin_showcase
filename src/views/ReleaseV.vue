<template>
    <div class="release5 flex w-[100%]">
        <BackToHome />
        <Iframe :url="link1" />
    </div>
</template>

<script>
import Iframe from '../components/Iframe.vue'
import BackToHome from '../components/template/BackToHome.vue'

export default {
    name:'Release5View',
    data() {
        return {
        link1: 'https://betall360.me'
        }
    },
    components: {
        Iframe,
        BackToHome
    },
    props: {

    },
    mounted() {
    }
    
}
</script>
