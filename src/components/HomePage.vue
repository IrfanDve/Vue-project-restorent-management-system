<template>
  <HeaderComp />
  <h1>{{ name }} Wellcome to Home Page</h1>
  <table border="1">
    <tr>
      <td>#</td>
      <td>Name</td>
      <td>Contact</td>
      <td>Address</td>
      <td colspan="2">Action</td>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <td><router-link :to="'/update/' + item.id">Update</router-link></td>
      <td><button type="button" v-on:click="deleteRestaurant(item.id)">Delete</button></td>
    </tr>
  </table>
</template>
<script>
import HeaderComp from './Header.vue';
import axios from 'axios';
export default {
  name: 'Home-page',
  data() {
    return {
      name: '',
      restaurant: []
    }
  },
  components: {
    HeaderComp
  },
  methods: {
    deleteRestaurant(id) {
      let result = axios.delete('http://localhost:3000/resturants/' + id);
      if (result) {
        console.warn("successfully delete");
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem('user-Info');
      this.name = JSON.parse(user).name
      if (!user) {
        this.$router.push({ name: 'SignUp' });
      }
      let result = await axios.get('http://localhost:3000/resturants')
      if (result) {
        this.restaurant = result.data
      }
    }
  },
  mounted() {
    this.loadData();
  }

}
</script>
<style>
td {
  width: 160px;
  height: 50px;
}
</style>