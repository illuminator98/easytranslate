<template v-if="$store.state.isLoggedIn">
 
    <router-link  to="/developer-account"><h3 class="me-auto">My Folders</h3></router-link>
 
  <div class="d-flex container justify-content-center flex-wrap">
    
  <div
    v-for="project in $store.state.folderProjects"
    :key="project.id"
    class="about"
  >
    <SingleProject
      :name="project.attributes.name"
      :price="project.attributes.price.amount_euro"
      :orderDate="project.attributes.created_at"
      :progress="project.attributes.progress.completed_tasks"
      :status="project.attributes.status"
    >
      ></SingleProject
    >
  </div>
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
    await this.$store.dispatch("getFolderProjects", {
      id: this.$route.params.id,
      user: this.$route.params.user,
    });

    await this.$store.commit("setUser", this.$route.params.user);
    console.log(this.$store.state.user);
  },
};
</script>
