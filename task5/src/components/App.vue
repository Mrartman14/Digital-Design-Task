<template>
	<div class="container">
		<h1 class = "title">MiniGame</h1>
		<div v-if="newGameVisible" class="new-game-wrapper">
			<router-link to="/components/States">
				<button @click="reverse()" class="link new-game">Новая игра</button>
			</router-link>
		</div>
		<div class="link-container" v-if="linksVisible">
			<router-link to="/components/States" class="link">Главная</router-link>
			<router-link to="/components/Actions" class="link">Действия</router-link>
		</div>	
		<router-view  v-if="linksVisible"/>
	</div>
</template>

<script>

	export default {
		data() {
			return {
				newGameVisible: true,
				linksVisible: false
			}
		},
		methods: {
			reverse() {
				this.newGameVisible = !this.newGameVisible;
				this.linksVisible = !this.linksVisible;
			}
		}
	}

</script>

<style scoped>
	.container {
		width: 90%;
		max-width: 1000px;
		margin: 0 auto;
	}
	.title {
		padding: 0;
		text-align: center;
		font-family: Arial, Helvetica, sans-serif;
	}
	.new-game-wrapper {
		display: flex;
		justify-content: center;
		padding-top: 40px; 
	}
	.link-container {
		display: flex;
		justify-content: flex-end;
		padding-right: 10%;
		margin-bottom: 10px;
	}
	.link {
		font-size: 1.2em;
		font-family: Arial, Helvetica, sans-serif;
		text-decoration: none;
		color: #000;
		margin: 0 5px;
	}
	.link:hover{
		color: #888;
	}
	.new-game {
		font-size: 1.5em;
		background-color: #3598db;
		border-radius: 10px;
		color: #fff;
		padding: 12px;
		transition: transform 0.5s;
		border: none;
		cursor: pointer;
	}
	.new-game:hover {
		transform: scale(1.05);
		color: #fff;
	}
</style>