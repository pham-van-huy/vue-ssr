import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import { createRouter } from './router/router.js'
import { createStore } from './store/index.js'

// export a factory function for creating fresh app, router and store
// instances
export function createApp() {
  // create router instance
  const router = createRouter()
  const store = createStore()

  sync(store, router)

  const app = new Vue({
    router,
    store,
    // the root instance simply renders the App component.
    render: h => h(App)
  });

  return { app, router, store };
}