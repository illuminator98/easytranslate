<template>
  <div class="home">
    <button
      type="button "
      class="mb-3 btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Launch demo modal
    </button>
    <div class="container d-flex flex-wrap">
      <div v-for="folder in $store.state.folders" :key="folder.id">
        <FolderComp
          @click="
            $router.push({
              name: 'folder',
              params: { id: folder.id, user: $route.params.user },
            })
          "
          :name="folder.attributes.name"
        ></FolderComp>
      </div>
      <div v-for="project in $store.state.singleProjects" :key="project.id">
        <SingleProject :name="project.attributes.name"></SingleProject>
      </div>
    </div>

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
