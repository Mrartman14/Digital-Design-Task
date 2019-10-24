<template>
	<div class="container">
		<div class="params-display">
			<params />
			<controls />
		</div>
		<div class="terminal-wrapper">
			<terminal class="terminal"/>
		</div>	
	</div>
</template>

<script>
	import params from "./Params.vue";
	import controls from "./Controls.vue";
	import terminal from "./Terminal.vue";

	export default {
		name: "states",
		components: {
			params: params,
			controls: controls,
			terminal: terminal,
		}
	}
</script>

<style scoped>
	.container{
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		background: #fff;
		padding: 20px 5%;
	}
	.params-display {
		display: flex;
	}
	.title{
		border-bottom: 1px solid pink;
		padding: 5px 0;
		color: white;
		text-align: center;
	}
	.terminal {
		height: 80px;
		margin: 0;
		padding: 0;
	}
	@media all and (max-width: 600px) {
		.params-display {
			flex-direction: column;
			align-items: stretch;
		}
		.terminal {
			height: 130px;
		}
	}
</style>