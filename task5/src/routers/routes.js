import Vue from "vue";
import VueRouter from "vue-router";

import states from "../components/states";
import actions from "../components/actions";


Vue.use(VueRouter);

let routes = [
	{ 
		path: "/components/States",
		component: states,
	},
	{ 
		path: "/components/Actions",
		component: actions
	}
];

let router = new VueRouter({
	routes
});

export default router;