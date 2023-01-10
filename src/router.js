import { createRouter, createWebHistory } from "vue-router";

import UserData from "./components/UserData.vue";
import ViewUserData from "./components/ViewUserData.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/userData" },
    { path: "/userData", component: UserData, props: true },
    { path: "/viewData", component: ViewUserData, props: true },
  ],
});

export default router;
