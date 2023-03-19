<template>
  <div class="container">
    <div class="form-floating mb-3">
      <input
        v-model="username"
        type="email"
        class="form-control"
        id="floatingInput"
        placeholder="name@example.com"
      />
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input
        v-model="password"
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
      />
      <label for="floatingPassword">Password</label>
      <button @click="login" class="btn btn-primary">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      user: "",
    };
  },

  methods: {
    async login() {
      await this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
      });

      if (this.$store.state.isLoggedIn) {
        const response = await fetch(
          "https://api.platform.sandbox.easytranslate.com/api/v1/user",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "content-type": "application/json",
            },
          }
        );
        const responseData = await response.json();
        this.user = responseData.included[0].attributes.team_identifier;
        this.$router.push({ name: "home", params: { user: this.user } });
      }
    },
  },
};
</script>
