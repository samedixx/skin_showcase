<template>
    <div class="release2 flex w-[100%]">
        <BackToHome />
        <Iframe :url="link1" />
    </div>
</template>

<script>
import Iframe from '../components/Iframe.vue'
import BackToHome from '../components/template/BackToHome.vue'

export default {
    name:'Release2View',
    data() {
        return {
        link1: 'https://betgold365.me'
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
