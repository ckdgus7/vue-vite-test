import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import VueCarousel from '@chenfengyuan/vue-carousel';
import lodash from 'lodash';
import infiniteScroll from 'vue-infinite-scroll';
import './assets/css/default.css';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(lodash);
app.use(VueCarousel);
app.use(infiniteScroll);
app.mount('#app');
