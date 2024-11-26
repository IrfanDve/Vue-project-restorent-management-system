<template>
    <div class="nav">
        <!-- <a rou href="#">Home</a> -->
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add Resturent</router-link>
        <router-link to="/update">Edit Resturent</router-link>
        <a v-on:click="logout" href="#">Logout</a>
    </div>
</template>
<script>
export default{
    name:'HeaderComp',
    methods: {
        logout(){
            console.warn("User Logout Successfully");
            localStorage.clear();
            this.$router.push({name:'LoginForm'});
        }
    },
}
</script>
<style>
.nav{
    background-color: #333;
    overflow: hidden;
}
.nav a{
    float: left;
    color: #f2f2f2f2;;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}
.nav a:hover{
    background:#ddd;
    color: #333;
}
</style>