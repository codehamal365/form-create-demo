import { createRouter, createWebHistory } from 'vue-router';
import FormDesigner from '../views/FormDesigner.vue';
import FormView from '../views/FormView.vue';

const routes = [
  {
    path: '/',
    name: 'Designer',
    component: FormDesigner, // 对应的组件
  },
  {
    path: '/view',
    name: 'View',
    component: FormView,
  },
];

const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 的历史模式
  routes, // 路由配置
});

export default router;
