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
    };
  },

  methods: {
    async login() {
    await this.$store.dispatch('login',{
        username:this.username,
        password:this.password
    })
      this.$router.push({ name: "home" });
    },
  },
};
</script>