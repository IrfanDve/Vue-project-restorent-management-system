<template>
    <HeaderComp />
    <h1>Wellcome to Add Resturent page</h1>
</template>
<script>
import HeaderComp from './Header.vue';
export default{
    name:'Add-Resturant',
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