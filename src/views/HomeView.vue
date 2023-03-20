<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg bg-body-white">
      <div class="container-fluid">
        <a class="navbar-brand text-primary" href="#">MY WORKSPACE</a>
        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-6 mx-auto">
                      <input
                        type="text"
                        class="form-control rounded-pill"
                        placeholder="Folder Name"
                        aria-label="Folder Name"
                        v-model="folderNameInput"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 mx-auto">
                      <button
                        type="button"
                        @click="createFolder"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Create folder
                      </button>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 mx-auto">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- //MODAL END  -->

        <button
          type="button"
          class="rounded-pill nav-item btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          + Create New Folder
        </button>
      </div>
    </nav>
  </div>
  <div class="home container-fluid bg-body-tertiary">
    <div class="d-flex">
      <h3 class="me-auto ms-3 my-3">My Folders</h3>
    </div>
    <div class="container-fluid d-flex flex-wrap">
      <div v-for="folder in $store.state.folders" :key="folder.id">
        <FolderComp
          @click="
            $router.push({
              name: 'folder',
              params: { id: folder.id, user: $route.params.user },
            })
          "
          :name="folder.attributes.name"
          :projectNum ="folder.attributes.total_projects"
          :date="folder.attributes.created_at"
        ></FolderComp>
      </div>
    </div>
    <!-- //Projects section -->
      <div class="project-wrapper">
        <div class="home container-fluid bg-body-tertiary">
          <div class="d-flex">
            <h3 class="me-auto ms-3 my-3">My Projects</h3>
          </div>
          <div class="container-fluid d-flex flex-wrap">
            <div
              v-for="project in $store.state.singleProjects"
              :key="project.id"
              :name="project.attributes.name"
            >
              <SingleProject> </SingleProject>
            </div>
            <div class="project-wrapper">
              <div class="d-flex"></div>
            </div>
          </div>
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
  data() {
    return {
      user: "",
      folderNameInput: "",
    };
  },

  methods: {
    async createFolder() {
      if (!this.folderNameInput) {
        alert(" folder name is required");
        return;
      }

      let requestData = {
        user: this.$route.params.user,
        name: this.folderNameInput,
      };

      await this.$store.dispatch("createFolder", requestData);

      this.$router.go(1);
    },
  },
  async created() {
    console.log(this.$route.params.user);
    await this.$store.dispatch("getSingleProjects", this.$route.params.user);
    await this.$store.dispatch("getFolders", this.$route.params.user);
  },
};
</script>

<style></style>
