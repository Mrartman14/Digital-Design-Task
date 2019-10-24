<template>
	<div class="container">
		<div class="controls">
			<button @click="comAction('eat')" class="btn red">Поесть</button>
			<button @click="comAction('drink')" class="btn blue">Попить</button>
			<button @click="comAction('work')" class="btn orange">Поработать</button>
			<button @click="comAction('sport')" class="btn grey">Заняться спортом</button>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';

	export default {
		name: "controls",
		methods: {
			...mapActions([
				"comAction"
			])
		}
	};
</script>

<style scoped>
.container {
	display: flex;
	flex: 1;
	box-shadow: 0px 0px 4px 0px rgba(50, 50, 50, 0.36) inset;
	margin-left: 10px;
	margin-bottom: 20px;
}
.controls {
	display: flex;
	flex-direction: column;
	align-items: stretch;
}
.btn {
	font-size: 1.1em;
	height: 30px;
	margin: 5px 0;
	color: #fff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}
.btn:hover {
	opacity: 0.6;
}
.btn:active {
	transform: scale(1.02);
}
.red {
	background-color: #e84c3d;
}
.blue {
	background-color: #3598db;
}
.orange {
	background-color: #e67f22;
}
.grey {
	background-color: #95a5a5;
}
@media all and (max-width: 600px) {
	.container {
		margin-right: 0;
		margin-left: 0;
	}	
}
</style>