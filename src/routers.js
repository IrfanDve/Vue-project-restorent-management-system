import Home from "./components/HomePage.vue";
import SignUp from "./components/SignUpForm.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [ // Corrected from 'routers' to 'routes'
    {
        name: "Home-page", // Corrected typo from "Home-pagme"
        component: Home,
        path: "/"
    },
    {
        name: "SignUp",
        component: SignUp,
        path: "/sign-up" // Added a leading slash for consistency
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes // Corrected from 'routers' to 'routes'
});

export default router;
