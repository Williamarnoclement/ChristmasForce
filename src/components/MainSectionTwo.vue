<template>
<!-- La section dédiée à CF2 ! -->
<section class="_cf1_screen">
		<div class="left_one">
			<h1>Christmas Force 2</h1><br>
			<p>Découvrez le nouveau jeu... en 3D</p>
			<button>Télécharger</button>
		</div>
		<div class="right_one">
			<picture>
			<source type="img/webp/webp" srcset="../assets/webp/go.webp">
			<img src="../assets/png/image.png" alt="Les personnages du jeu Christmas Force 2 !">
		</picture>
		</div>
</section>
</template>

<script>
export default {
  name: 'MainSectionTwo'
}
</script>

<style scoped>
button{
	background: white;
	margin: 0 auto;
    display: block;
	padding: 30px;
	border-radius: 12px;
	text-decoration: none;
	margin-top: 15px;
	border: none;
	color: #E7203B;
	font-size: 26px;
}

button:hover{
	background: whitesmoke;
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

.left_one { grid-area: left_one;}

.right_one { grid-area: right_one; }



		._cf1_screen {
			background:#E7203B;
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
			grid-template-areas:"right_one left_one left_one";
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
			color: white;
		}

		.left_one h1 {
			display: flex;
			justify-content: center;
			color: white;
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
			 height: 200px;
			text-align: center;
			}



		.right_one { grid-area: right_one; height: 300px;
			display: flex;
			justify-content: center;
		}


		.right_one img{
			height: 300px;
			
		}

		.left_two img{
			justify-content: center;
		}

		.left_two *{
			text-align: center;
		}

		._cf1_screen {
			background:#E7203B;
			background-repeat:no-repeat;
			background-position: center ;
			background-size: cover;
			height: 70vh;
			line-height:20px;
			display: flex;			
			flex-direction: column-reverse;
			padding-bottom: 100px;

		}
	}

</style>