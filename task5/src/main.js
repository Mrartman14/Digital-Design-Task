import Vue from "vue";
import VueRouter from "vue-router";

import App from "./components/App";
import store from "./stores/store";
import router from "./routers/routes";

Vue.use(VueRouter);

new Vue({
	store,
	router,
	render: h => h(App)
}).$mount("#app")