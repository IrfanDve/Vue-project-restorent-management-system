<template>
    <HeaderComp />
    <h1>Wellcome to Add Resturent page</h1>
    <form action="" class="add">
      <input type="text" name="" placeholder="Enter name" v-model="restaurant.name">
      <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address">
      <input type="text" name="contat" placeholder="Enter Contact" v-model="restaurant.contact">
      <button type="button" v-on:click="addrestaurant">Add New Restaurant</button>
    </form>
</template>
<script>
import HeaderComp from './Header.vue';
import axios from 'axios';
export default{
    name:'Add-Resturant',
    components:{
        HeaderComp
    },
    data() {
      return {
        restaurant:{
          name:"",
          address:"",
          contact:"",
        }
      }
    },
    methods: {
     async addrestaurant(){
         const result= await axios.post(`http://localhost:3000/resturants`,{
          name:this.restaurant.name,
          address:this.restaurant.address,
          contact:this.restaurant.contact
         });
         if(result.status==201){
          this.$router.push({name:'HomePage'});
         }
      }
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