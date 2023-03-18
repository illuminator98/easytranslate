<template>
  <div
    v-for="project in $store.state.folderProjects"
    :key="project.id"
    class="about"
  >
    <SingleProject :name="project.attributes.name"></SingleProject>
  </div>
</template>

<script>
import SingleProject from "@/components/SingleProject.vue";

export default {
  name: "FolderView",
  components: {
    SingleProject,
  },
  data() {
    return {};
  },
 async created() {
    await this.$store.dispatch('getFolderProjects', this.$route.params.id)
    
  },
};
</script>
