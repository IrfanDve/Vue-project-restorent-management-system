import HomePage from "./components/HomePage.vue";
import SignUpForm from "./components/SignUpForm.vue";
import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "./components/LoginForm.vue";
import Add from "./components/Add.vue";
import Update from "./components/Update.vue";
const routes = [ // Corrected from 'routers' to 'routes'
    {
        name: "HomePage", // Corrected typo from "Home-pagme"
        component: HomePage,
        path: "/"
    },
    {
        name: "SignUp",
        component: SignUpForm,
        path: "/sign-up" // Added a leading slash for consistency
    },
    {
        name: "LoginForm",
        component: LoginForm,
        path: "/login" // Added a leading slash for consistency
    },   {
        name: "Add",
        component: Add,
        path: "/add" // Added a leading slash for consistency
    },
    {
        name: "Update",
        component: Update,
        path: "/update" // Added a leading slash for consistency
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes // Corrected from 'routers' to 'routes'
});

export default router;
