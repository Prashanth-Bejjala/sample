// main.js or main.ts
import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUpload);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
