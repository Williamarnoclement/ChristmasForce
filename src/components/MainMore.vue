<template>
<section class="_cf1_screen">
		<div><h1>(re)Découvrez la magie de Noël</h1>
		<p>Découvrez nos activités pour petits et grands !</p>
		<button>Découvrir</button>
		</div>
</section>
</template>

<script>
export default {
  name: 'MainMore'
}
</script>

<style scoped>
._cf1_screen {
	background: linear-gradient(
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.4)
    ),url(../assets/webp/magic.webp);
	color: white;
	text-align: center;
	background-repeat:no-repeat;
	background-position: center ;
		background-size: cover;
	height: 500px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
	line-height:20px;
	display: flex;
	justify-content: center;
	align-content: center;

}

._cf1_screen div {
	margin-top:150px;
}

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

</style>