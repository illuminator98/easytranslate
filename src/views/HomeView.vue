<template>
  <div class="home">
    <div class="container d-flex flex-wrap">
      
      <div v-for="folder ,index in $store.state.folders" @click="getFolderId(folder.id)" :key="folder.id">
        <!-- <router-link @click="getFolderId(folder.id)" to="/about"> -->
        <FolderComp @click="$router.push({ name: 'folder', params: { id: folder.id,index } })" :name="folder.attributes.name"></FolderComp>
      <!-- </router-link> -->
      </div>
      <div v-for="project in $store.state.singleProjects" :key="project.id">
        <SingleProject :name="project.attributes.name"></SingleProject>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import FolderComp from "@/components/FolderComp.vue";
import SingleProject from "@/components/SingleProject.vue";
export default {
  name: "HomeView",
  components: {
    FolderComp,
    SingleProject,
  },
  
  methods: {
    getFolderId(id) {
      this.$store.dispatch('setfolderId',{id:id})
      console.log(this.$store.state.folderId)
    },
   

  },
  data() {
    return {
     
      
    };
  },
  
  async created() {
    await this.$store.dispatch("getSingleProjects");
    await this.$store.dispatch("getFolders");

    console.log(`${localStorage.getItem("token")}`);
    console.log();
    console.log(this.$store.state.singleProjects);
  },
};
</script>
