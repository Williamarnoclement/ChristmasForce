<template>
<h1  style="text-align:center;">Les Activités !</h1>
<h2 style="text-align:center;">Prends une photo avec la Christmas Force !</h2>
  <div id="photo">
		<video autoplay id="video"></video>
	</div>
  <img class="image" id="go" src="../assets/png/overlay.png" style="width:100px; height:auto;" hidden/>
  <button class="Btn">Prendre une Photo</button>
  <canvas style="width: 100%;" class="result"></canvas>
</template>

<script>
/**
 * Cette page permet la fonctionnalité Photomaton.
 * L'idée est de prendre un photo puis d'ajouter un filtre dessus aux couleurs de la Force de Noël.
 * L'image filtre est en fait un élément caché de la page web que le script vient récupérer pour la fusionner avec l'image courante de la caméra.
 */
export default {
  name: 'PhotoFun',
  methods: {
    init(){
      if('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices){
        navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
          const videoPlayer = document.getElementById('video');
          videoPlayer.srcObject = stream;
          videoPlayer.play();
          let imgEle2 = document.getElementById("go");
          let resEle = document.querySelector(".result");
          var context = resEle.getContext("2d");
          let BtnEle = document.querySelector(".Btn");
          BtnEle.addEventListener("click", () => {
              //la taille de la deuxième image
              imgEle2.width = 40;
              imgEle2.height = 40;
              //la taille du composant
              resEle.width = 650;
              resEle.height = 500;

              //on imprime la première image en dessous
              context.globalAlpha = 1.0;
              context.drawImage(video, 0, 0);
              //puis le filtre Christmas Force par dessus
              context.globalAlpha = 1.0;
              context.drawImage(imgEle2, 0, 0);
          });
        });
      }
    }
  },
  beforeMount(){
    this.init();
  }
}


</script>

<style>
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
#video{
  width: 100%;
  display: flex;
}
</style>