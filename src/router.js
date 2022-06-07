import { createWebHashHistory, createRouter } from "vue-router";
import JH from './pages/JH.vue';


const routes = [
  {
    path: "/JH",
    component: JH
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;