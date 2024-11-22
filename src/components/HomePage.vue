<template>
    <HeaderComp />
    <h1>Wellcome to Home Page</h1>
</template>
<script>
import HeaderComp from './Header.vue';
export default{
    name:'Home-page',
    components:{
        HeaderComp
    },
    mounted() {
    let user=localStorage.getItem('user-Info');
    if(!user){
      this.$router.push({ name: 'SignUp' });
    }
  },
}
</script>
<style>
</style>