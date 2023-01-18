<template>
  <div class="home">
    <Header />
    <Main />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/template/Header.vue'
import Main from '@/components/template/Main.vue'



export default {
  name: 'HomeView',
  components: {
    Header,
    Main
  },
  data() {
    return {
      test: 1
      }
  },
  methods: {
    
  },
  mounted() {
    
  }
}
</script>
