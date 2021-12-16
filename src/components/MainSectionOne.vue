<template>
<!-- La section dédiée à CF1 ! -->
<section class="_cf1_screen">
		<div class="left_one">
			<h1>Christmas Force: La force de Noël</h1><br>
			<p>Découvrez le jeu original</p>
			<button>Télécharger</button>
		</div>
		<div class="right_one">
			<picture>
			<source type="img/webp/webp" srcset="../assets/webp/go.webp">
			<img src="../assets/png/go.png" alt="Un personnage du jeu Christmas Force !">
		</picture>
		</div>
</section>
</template>

<script>
export default {
  name: 'MainSectionOne'
}
</script>

<style scoped>
button{
	background: #E7203B;
	margin: 0 auto;
    display: block;
	padding: 30px;
	border-radius: 12px;
	text-decoration: none;
	margin-top: 15px;
	border: none;
	color: white;
	font-size: 26px;
}

button:hover{
	background: #e7203b9f;
	cursor: crosshair;
}

/* General */

html, body {
	margin: 0 !important;
	padding: 0 !important;
	color:black;
	scroll-behavior: smooth;
	height: 100%;
	background-attachment: fixed;
}
* {
	box-sizing: border-box;
}

.lol{
	color:white;}
	a{
		text-decoration: none;
		color: black;
	}

	ul {
		list-style-type: none;
	}

	/* Affichage Desktop */

	@media (min-width: 900px) {

.left_one { grid-area: left_one; background-color: white;}

.right_one { grid-area: right_one; background-color: white;}



		._cf1_screen {
			background:white;
			background-repeat:no-repeat;
			background-position: center ;
			background-size: cover;
			height: 500px;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
			line-height:20px;
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			grid-template-rows: 1fr;
			gap: 0px 0px;
			grid-auto-flow: row;
			grid-template-areas:"left_one left_one right_one";
		}

		.right_one img{
			width: 100%;
			height: auto;
		}

		._cf1_screen {
			align-items: center;
		}


		.left_one p {
			display: flex;
			justify-content: center;
		}

		.left_one h1 {
			display: flex;
			justify-content: center;
		}


		.right_one img{
			width: 100%;
			height: auto;
		}

	}

	/* Affichage Mobile */
	@media (max-width: 900px) {

		._container {
			display: block;
		}

		.left_one { 
			background-color: white; 
			text-align: center;
			margin-bottom: 100px;
		}

		.right_one { grid-area: right_one; height: 300px;
			display: flex;
			justify-content: center;
		}

		.right_one img{
			height: 300px;
		}

		._cf1_screen {
			background:white;
			background-repeat:no-repeat;
			background-position: center ;
			background-size: cover;
			height: 70vh;
			line-height:20px;
			display: flex;			
			flex-direction: column-reverse;
		}
	}

</style>