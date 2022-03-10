import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue"
import Dialog from "./components/Dialog.vue"
import Tabs from "./components/Tabs.vue"
import Button from "./components/Button.vue"

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [{ path: "switch", component: SwitchDemo },
        { path: "dialog", component: Dialog },
        { path: "tabs", component: Tabs },
        { path: "button", component: Button }
      ],
    },
  ],
});
router.afterEach(() => {
  console.log("路由切换了");
});