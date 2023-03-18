<template>
  <div
    v-for="folder in $store.state.folders"
    :key="folder.id"
    class="about"
  >
    <SingleProject :name="folder.attributes.relationships"></SingleProject>
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
    await this.$store.dispatch('getFolderProjects')
    console.log(this.$store.state.folderProjects)

  },
};
</script>
