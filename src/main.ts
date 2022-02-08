import { createApp } from 'vue'
import App from './App.vue'
import { RouteRecordRaw, createWebHistory, createRouter } from 'vue-router';

import TopPage from './pages/TopPage.vue';
import PlayPage from './pages/PlayPage.vue';

// 各画面のルーティング情報
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'TopPage',
    component: TopPage,
  },
  {
    path: '/play',
    name: 'PlayPage',
    component: PlayPage
  },
];

// 各画面のルーティング情報からルーターを作成
const router = createRouter({
  // Viteの場合に環境変数で'/'と'/vue_tetris/'に分岐する方法がめんどそうなので、開発時も/vue_tetris/で固定
  history: createWebHistory('/vue_tetris/'),
  routes: routes,
});

createApp(App).use(router).mount('#app')
