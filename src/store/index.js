import { createStore } from "vuex";
// import { apiFetch } from '@/main'

export default createStore({
  state: {
    isLoggedIn: false,
    folders: [],
    singleProjects: [],
    folderId: "",
    folderProjects: [],
  },
  getters: {},

  actions: {
    async login(context, payload) {
      const requestData = {
        username: payload.username,
        password: payload.password,
        client_id: "bfd59cd6-001c-410b-98a6-9dc5436fbb22",
        client_secret: "mLKI6WyRJ7pKOeq7jzxvt5Ad8UBkeY2ofpJzxIwA",
        grant_type: "password",
      };
      const response = await fetch(
        "https://api.platform.sandbox.easytranslate.com/oauth/token",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );
      const responseData = await response.json();
      localStorage.setItem("token", responseData.access_token);
      context.commit("setIsLoggedIn", true);
    },

    async getFolders(context) {
      const response = await fetch(
        "https://api.platform.sandbox.easytranslate.com/api/v1/teams/developer-account/folders",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "content-type": "application/json",
          },
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      context.commit("SetFolders", responseData.data);
    },

    async getSingleProjects(context) {
      const response = await fetch(
        "https://api.platform.sandbox.easytranslate.com/api/v1/teams/developer-account/projects?filters[is_workspace]=true",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "content-type": "application/json",
          },
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      context.commit("setProjects", responseData.data);
    },

 async setfolderId(context, payload) {
      context.commit("setfolderId", payload.id);
    },
    async getFolderProjects(context) {
      if(this.folderId) {
      const response = await fetch(
        `https://api.platform.sandbox.easytranslate.com/api/v1/teams/developer-account/folders/${this.folderId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "content-type": "application/json",
          },
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      context.commit("SetFolderProjects", responseData.data);}
    },
  },

  mutations: {
    setIsLoggedIn(state, value) {
      state.isLoggedIn = value;
    },
    setfolderId(state, value) {
      state.folderId = value;
    },
    SetFolders(state, value) {
      state.folders = value;
    },
    SetFolderProjects(state, value) {
      state.folderProjects = value;
    },
    setProjects(state, value) {
      state.singleProjects = value;
    },
  },
});
