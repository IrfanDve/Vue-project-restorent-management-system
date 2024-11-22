<template>
    <img id="logo" src="../assets/logo.png">
    <h1>Sign Up</h1>
    <div class="register">
      <input type="text" v-model="name" placeholder="Enter Name">
      <input type="text" v-model="email" placeholder="Enter Email">
      <input type="text" v-model="Password" placeholder="Enter Password">
      <button v-on:click="signup">Sign Up</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name:'SignUpForm',
  data() {
    return {
      name:'',
      email:'',
      Password:'',
    }
  },
  methods: {
    async signup(){
      try {
      let result = await axios.post('http://localhost:3000/users', {
        email: this.email,
        name: this.name,
        Password: this.Password
      });

      // console.warn(result);
      if (result) {
        alert('SignUp Successfully!');
        localStorage.setItem("user-Info",JSON.stringify(result.data));
        console.log(this.$router); // Ensure this logs the router instance
        this.$router.push({ name: 'HomePage' });


      }
    } catch (error) {
      console.error(error);
      alert('SignUp failed. Please try again.');
      
    }
      
      
    }
  },
  //life-cycle-hook same like the method but have some different used case 
  mounted() {
    let user=localStorage.getItem('user-Info');
    if(user){
      this.$router.push({ name: 'HomePage' });
    }
  },
}
</script>
<style scoped>
.logo{
  width:100px ;
}
.register input{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display:block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue
}
.register button{
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: #fff;
  cursor: pointer;
}
</style>
