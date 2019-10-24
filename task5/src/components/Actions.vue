<template>
	<div class="container">
		<div class="options">
			<button @click="comAction('reset')" class="btn reset red"> Сброс </button>
			<span class="isEmpty" v-show="system.actions">Пока ничего не происходило...</span>
		</div>
		<div class="cmdListWrapper">
			<cmdlist v-for="(list, name, index) in this.actionsCount" :key="index" 
			:list="list"
			:arrayName="name"
			class="cmdList"/>
		</div>	
	</div>
</template>

<script>
	import cmdlist from "./Cmdlist.vue";

	import { mapGetters } from 'vuex';
	import { mapActions } from 'vuex';

	export default {
		name: "actions",
		computed: {
			...mapGetters([
				"actionsCount", "system"
			])
		},
		methods: {
			...mapActions([
				"comAction"
			])
		},
		components: {
			cmdlist: cmdlist
		}
	}
</script>

<style scoped>
	.container {
		background: #fff;
		max-width: 1000px;
		padding: 20px 5%;
	}
	.cmdListWrapper {
		display: flex;
	}
	.cmdList {
		display: flex;
		flex: 1;
	}
	.options {
		display: flex;
		justify-content: space-between;
		align-items: center;
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
	.reset {
		margin: 5px;
	}
	.btn:hover {
		opacity: 0.7;
	}
	.red {
		background-color: #e84c3d;
	}
	.isEmpty {
		font-family: Arial, Helvetica, sans-serif;
		background: #3598db;
		color: #fff;
		border-radius: 3px;
		box-sizing: border-box;
		padding: 5px;

	}
</style>