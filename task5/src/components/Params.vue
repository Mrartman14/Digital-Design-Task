<template>
	<div class="container">
		<div class="params">
			<div class="params-wrapper">
				Здоровье: {{ properties.health }}
				<div class="progress">
					<div class="progress-bar red" :style="width(properties.health)"></div>
				</div>
			</div>
			<div class="params-wrapper">
				Жажда: {{ properties.thirst }}
				<div class="progress">
					<div class="progress-bar blue" :style="width(properties.thirst)"></div>
				</div>
			</div>
			<div class="params-wrapper">
				Голод: {{ properties.hunger }}
				<div class="progress">
					<div class="progress-bar orange" :style="width(properties.hunger)"></div>
				</div>
			</div>
			<div class="params-wrapper">
				Усталось: {{ properties.fatigue }}
				<div class="progress">
					<div class="progress-bar grey" :style="width(properties.fatigue)"></div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>

	import { mapGetters } from 'vuex';

	export default {
		name: "params",
		computed: {
			...mapGetters([
				"properties", "system"
			]),
		},
		methods: {
			width(prop) {
				let w = prop / this.system.maxPoints * 100;
				return 'width:' + w + '%'
			}
		}
	};

</script>

<style scoped>
.container {
	display: flex;
	flex: 1;
	box-shadow: 0px 0px 4px 0px rgba(50, 50, 50, 0.36) inset;
	box-sizing: border-box;
	padding: 20px;
	width: 100%;
	margin-right: 10px;
	margin-bottom: 20px;
}
.params{
	font-family: Arial, Helvetica, sans-serif;
}
.params-wrapper{
	height: 30px;
	padding: 4.5px 0;
}
.progress {
	height: 10px;
	margin: 2px;
	border: 1px solid black;
	box-sizing: border-box;
	background: #fff;
	box-shadow: 0px 0px 4px 0px rgba(50, 50, 50, 0.36);
}
.progress-bar {
	height: 100%;
	box-sizing: border-box;
}
.red {
	background-color: #e84c3d;
}
.blue {
	background-color: #3598db
}
.orange {
	background-color: #e67f22
}
.grey {
	background-color: #95a5a5
}
@media all and (max-width: 600px) {
	.container {
		margin-right: 0;
		margin-left: 0;
	}	
}
</style>
<!-- <div v-for="(prop, name, index) in properties" :key="index" class="params-wrapper">
	{{ name }}: {{ prop }}
	<div class="progress">
		<div class="progress-bar" :style="width(prop)"></div>
	</div>
</div> - автоматический вариант создания полей  -->