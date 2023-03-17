<template>
  <div class="home">
    <h1 v-for="folder in folders" :key="folder.id">{{ folder.attributes.name }}</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="getData">get folders</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods: {
  
  },

  data() {
    return {
      folders:[],
    }
  },
  async created() {
  
      
      await this.$store.dispatch('getFolders')
        this.folders=this.$store.state.folders
       console.log(`${localStorage.getItem("token")}`)
       console.log(this.folders)
     
},
}
</script>
