<template>
	<div class="container">
		<ul class="list">
			<li v-for="(command, i) in list" :key="i" class="list-item">
				{{ command }}
				<button class="btn" @click="deleteListItem(i, arrayName)">delete</button>
			</li>
		</ul>
	</div>
</template>

<script>

	import { mapGetters } from 'vuex';

	export default {
		name: "cmdList",
		props: {
			list: Array,
			arrayName: String
		},
		computed: {
			...mapGetters([
				"actionsCount", "system"
			])
		},
		methods: {
			deleteListItem(i, arrName) {
				this.actionsCount[arrName].splice(i, 1);
				this.checkActions();
			},
			checkActions() {
				let checkArray = [];
				Object.keys(this.actionsCount).map((key) => {
					if (this.actionsCount[key].length !== 0) {
						checkArray.push("Этот массив не пуст!");
					}
				});
				if (checkArray.length == 0) {
					this.system.actions = true;
				}
			}	
		}
	};
</script>

<style scoped>
	.container{
		padding: 5px;
	}
	.list{
		width: 100%;
		margin: 0;
		display: flex;
		flex-direction: column;
		padding: 0;
		list-style-type: none;
	}
	.list-item{
		display: flex;
		justify-content: space-around;
		align-items: center;
		text-align: center;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 0.9em;
		padding: 10px;
		color: #000;
		box-sizing: border-box;
		margin: 2px 0;
		background: #fff;
		box-shadow: 0px 0px 4px 0px rgba(50, 50, 50, 0.36) inset;
	}
	.btn {
		margin-left: 5px;
		border: none;
		background: #3598db;
		color: #fff;
		border-radius: 5px;
		padding: 3px;
		cursor: pointer;
	}
	.btn:active {
		transform: scale(1.1);
	}
	@media all and (max-width: 750px) {
		.list-item {
			flex-direction: column;
		}
	}
</style>