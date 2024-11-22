import HomePage from "./components/HomePage.vue";
import SignUpForm from "./components/SignUpForm.vue";
import { createRouter, createWebHistory } from "vue-router";

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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes // Corrected from 'routers' to 'routes'
});

export default router;
