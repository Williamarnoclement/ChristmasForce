<template>
<footer>
	<div id="contenu_fin">
		<div class="row">
			<div class="column" >
				<p><a href="https://www.griffu.re">A propos</a></p>
				<p><a href="https://twitter.com/christmasforce">Actualités</a></p>
			</div>
			<div class="column">
				<a href="{{ app_store }}"><img src="../assets/png/appstore.png" style="height: auto; width:90%;"></a>
				<a href="{{ play_store }}"><img src="../assets/png/gplay.png" style="height: auto; width:90%;"></a>
			</div>
			<div class="column" >
				<p><a href="privacy.html">Politique de confidentialité</a></p>
			</div>
			<div class="column">
				<p><b>{{ copyright }}</b></p>
			</div>
		</div>
	</div>
</footer>
</template>

<script>
export default {
  name: 'Bottom',
  props: {
    app_store: String,
    play_store: String,
    privacy: String,
    copyright: String
    }
}
</script>

<style scoped>
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
		/* Create four equal columns that floats next to each other */
		.column {
			float: left;
			width: 25%;
			padding: 10px;
			height: 300px; /* Should be removed. Only for demonstration */
		}

		/* Clear floats after the columns */
		.row:after {
			content: "";
			display: table;
			clear: both;
		}

		/* Responsive layout - makes the four columns stack on top of each other instead of next to each other */
		@media screen and (max-width: 600px) {
			.column {
				width: 100%;
			}
		}

		.contenu{
			margin-top: 50px;
			margin-left: auto;
			margin-right: auto;
			max-width: 500px;
		}
		.contenu h1{
			font-size: 16px;
			text-align: center;
		}

		#contenu_fin{
			margin: 10px;
			padding-left:30px;
			padding-bottom:7px;
			font-family: 'Arial', sans-serif;
		}

	}

	/* Affichage Mobile */
	@media (max-width: 900px) {

		.flex-container {
			display: block;
			flex-direction: row;
			align-items: center;
			height: 100%;
		}

		/* Create four equal columns that floats next to each other */
		.column {
			float: left;
			width: 25%;
			padding: 10px;
		}

		/* Clear floats after the columns */
		.row:after {
			content: "";
			display: table;
			clear: both;
		}

		/* Responsive layout - makes the four columns stack on top of each other instead of next to each other */
		@media screen and (max-width: 600px) {
			.column {
				width: 100%;
			}
		}


		.menu {
			position: fixed;
			left: 15px;
			top: -11px;
			bottom: 0;
			padding-top: 0;
			padding-left: 0px;
			margin-bottom: 0;
			border-right: 1px solid #000;
			border-left: 1px solid #000;
		}
		.contenu{
			margin-left: auto;
			margin-right: auto;
			max-width: 90%;
			margin-top: 30px;
		}
		.contenu h1{
			text-align: center;
			font-size: 25px;
		}
		#contenu_fin{
			margin: 10px;
			padding-left:30px;
			padding-bottom:7px;
			font-family: 'Arial', sans-serif;
		}


	}

</style>