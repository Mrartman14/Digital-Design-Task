import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

function rnd(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const store = new Vuex.Store({
	state: {
		properties: {
			health: 100,
			fatigue: 0,
			hunger: 0,
			thirst: 0
		},
		actionsCount: {
			drinks: [],
			eats: [],
			works: [],
			sports: []
		},
		system: {
			maxPoints: 100,
			minPoints: 0,
			actions: true
		}
	},
	getters: {
		properties: state => state.properties,
		actionsCount: state => state.actionsCount,
		system: state => state.system
	},
	actions: {
		comAction({commit}, action) { //первый обязательный параметр - объект {commit, dispatch, state}
			commit(action);
		}
	},
	mutations: {
		drink(state) {
			state.properties.thirst -= 10;
			state.properties.fatigue -= rnd(5, 10);
			state.properties.health += rnd(-1, 1);
			state.system.actions = false;
			state.actionsCount.drinks.push("Вы попили");
			this._mutations.limit[0]();
		},
		eat(state) {
			state.properties.hunger -= 10;
			state.properties.fatigue -= rnd(5, 10);
			state.properties.health += rnd(-2, 2);
			state.system.actions = false;
			state.actionsCount.eats.push("Вы поели");
			this._mutations.limit[0]();
		}, 
		work(state) {
			state.properties.thirst += rnd(30, 40);
			state.properties.hunger += rnd(10, 20);
			state.properties.health += rnd(-10, -15);
			state.properties.fatigue +=20;
			state.system.actions = false;
			state.actionsCount.works.push("Вы поработали");
			this._mutations.limit[0]();
		},
		sport(state) {
			state.properties.health += rnd(1, 10);
			state.properties.fatigue += rnd(10, 20);
			state.properties.thirst += rnd(10, 15);
			state.properties.hunger += rnd(10, 15);
			state.system.actions = false;
			state.actionsCount.sports.push("Вы - спорт");
			this._mutations.limit[0]();
		},
		reset(state) {
			Object.keys(state.properties).map((key) => {
				state.properties[key] = state.system.minPoints;
			})
			state.properties.health = state.system.maxPoints;
			Object.keys(state.actionsCount).map((key) => {
				state.actionsCount[key] = [];
			})
			state.system.actions = true;
		},
		middle(state) {
			Object.keys(state.properties).map((key) => {
				state.properties[key] = Math.floor(state.system.maxPoints / 2);
			})
		},
		low(state) {
			Object.keys(state.properties).map((key) => {
				state.properties[key] = state.system.minPoints + 1;
			})
		},
		die(state) {
			Object.keys(state.properties).map((key) => {
				state.properties[key] = state.system.maxPoints;
			})
			state.properties.health = state.system.minPoints;
			Object.keys(state.actionsCount).map((key) => {
				state.actionsCount[key] = ["Вы решили умереть"];
			})
			state.system.actions = false;
		},
		limit(state) {
			Object.keys(state.properties).map((key) => {
				if (state.properties[key] < state.system.minPoints) {
					state.properties[key] = state.system.minPoints;
				}
				if (state.properties[key] > state.system.maxPoints) {
					state.properties[key] = state.system.maxPoints;
				}
			})
		}
	}
})

export default store;