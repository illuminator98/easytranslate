<template>
    

<div class="container">
<div class="form-floating mb-3">
  <input v-model="username" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
  <label for="floatingPassword">Password</label>
  <button @click="login" class="btn btn-primary">Login</button>
</div>
</div>

</template>


<script>
export default {
    data() {
        return {
            username:'',
            password:''
        }
        },

methods: {
     async login() {
        const requestData = {
            username:this.username,
            password:this.password,
            client_id: "bfd59cd6-001c-410b-98a6-9dc5436fbb22",
            client_secret: "mLKI6WyRJ7pKOeq7jzxvt5Ad8UBkeY2ofpJzxIwA",
            grant_type : "password"
        }
        const response = await fetch('https://api.platform.sandbox.easytranslate.com/oauth/token', {
            method:'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(requestData)
        })
         const responseData = await response.json()
			localStorage.setItem('token', responseData.token)
			this.$router.push({name: 'home'})
    }
   

    }

}
    
</script>