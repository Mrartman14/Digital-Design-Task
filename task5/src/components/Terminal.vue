<template>
	<div class="container">
		<input type="text" v-model="command" 
						   :placeholder="placeHolderText" 
						   class="inpt"
						   @keyup.enter="cmd">
	</div>
</template>

<script>

	import { mapActions } from 'vuex';

export default {
		name: "terminal",
		data() {
			return {
				command: "",
				placeHolderText: "Введите команду..."
			}
		},
		methods: {
			...mapActions([
				"comAction"
			]),
			validation() {
				let container = [];
				Object.keys(this.$store._mutations).map((key) => {
					if (key === this.command){
						container.push("совпадение"); 
					}
				})
				if (container.length !== 1) {
					this.command = "";
					this.placeHolderText = "Такой команды не существует!"
				} else {
					this.comAction(this.command);
					this.placeHolderText = "Введите команду...";
				}
			},
			cmd(){
				this.validation();
				this.command = "";
			}
		}
	};

</script>

<style scoped>
.inpt{
	border: none;
	height: 100%;
	padding: 15px;
	box-shadow: 0px 0px 4px 0px rgba(50, 50, 50, 0.36) inset;
	font-size: 1.5em;
	color: #777;
	transition: box-shadow;
	transition-duration: 0.5s;
}
.inpt:focus {
	box-shadow: 0px 0px 10px 0px rgba(50, 50, 50, 0.36) inset;
}
</style>