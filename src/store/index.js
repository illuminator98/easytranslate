import { createStore } from "vuex";
// import { apiFetch } from '@/main'

export default createStore({
  state: {
    isLoggedIn: false,
    user: "",
    folders: [],
    singleProjects: [],
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

    async getFolders(context, user) {
      const response = await fetch(
        `https://api.platform.sandbox.easytranslate.com/api/v1/teams/${user}/folders`,
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

    async getSingleProjects(context, user) {
      const response = await fetch(
        `https://api.platform.sandbox.easytranslate.com/api/v1/teams/${user}/projects?filters[is_workspace]=true`,
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

    async getFolderProjects(context, payload) {
      const response = await fetch(
        `https://api.platform.sandbox.easytranslate.com/api/v1/teams/${payload.user}/folders/${payload.id}`,
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
      context.commit("SetFolderProjects", responseData.included);
    },
    async createFolder(context, payload) {
      const requestData = {
        "data": {
            "type": "project-folder",
            "attributes": {
                "name": payload.name
            }
        }
    }
      const response = await fetch(
        `https://api.platform.sandbox.easytranslate.com/api/v1/teams/${payload.user}/folders`,
        {
          method: "POST",
          headers: {
            "accept": "application/json",
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(requestData),
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      context.commit("setNewFolder", responseData.data);
    },
  },

  mutations: {
    setIsLoggedIn(state, value) {
      state.isLoggedIn = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    SetFolders(state, value) {
      state.folders = value;
    },
    setNewFolder(state, value) {
      state.folders.push(value);
    },
    SetFolderProjects(state, value) {
      state.folderProjects = value;
    },
    setProjects(state, value) {
      state.singleProjects = value;
    },
  },
});
