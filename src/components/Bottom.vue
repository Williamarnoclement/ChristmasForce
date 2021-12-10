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