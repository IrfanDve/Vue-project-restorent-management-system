<template>
  <HeaderComp />
  <h1>Wellcome to Update Page</h1>
  <form action="" class="update">
    <input type="text" name="" placeholder="Enter name" v-model="restaurant.name">
    <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address">
    <input type="text" name="contat" placeholder="Enter Contact" v-model="restaurant.contact">
    <button type="button" v-on:click="updaterestaurant">Update Restaurant</button>
  </form>
</template>
<script>
import HeaderComp from './Header.vue';
import axios from 'axios';
export default {
  name: 'Update-Resturant',
  components: {
    HeaderComp
  },
  data() {
    return {
      restaurant: {
        name: '',
        address: '',
        contact: ''
      }
    }
  },
  methods: {
    async updaterestaurant() {
      const result = await axios.put('http://localhost:3000/resturants/'+this.$route.params.id, {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact
      });
      if (result.status == 200) {
        this.$router.push({ name: 'HomePage' });
      }
    }
  },
  async mounted() {
    let user = localStorage.getItem('user-Info');
    if (!user) {
      this.$router.push({ name: 'HomePage' });
    }
    let result = await axios.get('http://localhost:3000/resturants/'+this.$route.params.id);
    this.restaurant = result.data;
  },
}
</script>
<style></style>