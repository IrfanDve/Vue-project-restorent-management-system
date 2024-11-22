<template>
    <img id="logo" src="../assets/logo.png">
    <h1>Login Page</h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="text" v-model="Password" placeholder="Enter Password">
        <button v-on:click="login">Login</button>
        <p>
            <router-link to="/sign-up">SignUp</router-link>
        </p>
    </div>
</template>
<script>
import router from '@/routers';
import axios from 'axios';
export default {
    name: 'LoginForm',
    data() {
        return {
            email:'',
            Password:'',
        }
    },
    methods: {
       async login(){
            let result=await axios.get(`http://localhost:3000/users?email=${this.email}&Password=${this.Password}`);
           if(result.status==200 && result.data.length>0 ){
            localStorage.setItem("user-Info",JSON.stringify(result.data));
            this.$router.push({name:'HomePage'});
           }

        }
    },
    mounted() {
        let result=localStorage.getItem('user-info');
        if(result){
            this,router.push({name:'HomePage'})
        }
    },
}
</script>
<style>

</style>