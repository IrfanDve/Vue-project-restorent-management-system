<template>
    <!-- Include the SignUp Component -->
    <!-- <SignUpForm /> -->
     <router-view/>
      <!-- <h1>hello</h1> -->
</template>

<script>
// import SignUpForm from './components/SignUpForm.vue'; 

export default {
  name: 'App',
  // components: {
  //   SignUpForm,
  // },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
  padding: 0;
}
.logo{
  width:100px ;
}
.register input, .login input,.add input,.update input{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display:block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue
}
.register button, .login button,.add button,.update button{
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: #fff;
  cursor: pointer;
}
</style>
