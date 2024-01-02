import { createRouter, createWebHistory } from "vue-router";
import ChatBox from "../views/ChatBox.vue";
import Setting from "../views/Setting.vue";
import { type IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

const routes = [
  { path: "/", component: ChatBox, meta: { title: "Chat" } },
  { path: "/setting", component: Setting, meta: { title: "Setting" } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => {
      window.HSStaticMethods.autoInit();
    }, 100);
  }
});

export default router;
