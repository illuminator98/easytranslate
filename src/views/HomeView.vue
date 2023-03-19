<template>
  <div class="home">
    <div class="container d-flex flex-wrap">
      <div v-for="folder in $store.state.folders" :key="folder.id">
        <FolderComp
          @click="$router.push({ name: 'folder', params: { id: folder.id ,user:$route.params.user} })"
          :name="folder.attributes.name"
        ></FolderComp>
      </div>
      <div v-for="project in $store.state.singleProjects" :key="project.id">
        <SingleProject :name="project.attributes.name"></SingleProject>
      </div>
    </div>
  </div>
</template>

<script>


import FolderComp from "@/components/FolderComp.vue";
import SingleProject from "@/components/SingleProject.vue";
export default {
  name: "HomeView",
  components: {
    FolderComp,
    SingleProject,
  },

  methods: {},
  data() {
    return {
      user:''
    };
  },

  async created() {
    
       console.log(this.$route.params.user)
    await this.$store.dispatch("getSingleProjects",this.$route.params.user);
    await this.$store.dispatch("getFolders",this.$route.params.user);
  
      
  },
aftercreated () {
}
};
</script>
