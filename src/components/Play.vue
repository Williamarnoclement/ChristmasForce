<template>
  <canvas
  id="unity-canvas">
  </canvas>
</template>

<script setup>
/**
 * Ce composant permet l'import et l'affichage de l'iframe webgl permettant de jouer via son navigateur web à Christmas FORCE 2.
 * L'idée est d'utiliser la fonction OnMounted de VueJS pour précharger le jeu avant la mise à disposition de la page.
 * 
 */
import { onMounted } from 'vue';

onMounted(() => {
  const file = 'webgl';
  const script = document.createElement('script');
  script.onload = () => {
    createUnityInstance(document.querySelector('#unity-canvas'), {
      dataUrl: `Build/${file}.data`,
      frameworkUrl: `Build/${file}.framework.js`,
      codeUrl: `Build/${file}.wasm`,
      streamingAssetsUrl: 'StreamingAssets',
      companyName: 'William-Arno CLEMENT',
      productName: 'Christmas FORCE 2',
      productVersion: '1.0',
      matchWebGLToCanvasSize: true,
    }).then((unityInstance) => {
      window.gameInstance = unityInstance;
    });
  };
  script.async = true;
  script.src = `Build/${file}.loader.js`;
  document.head.appendChild(script);
});
</script>

<style>
/* Affichage Mobile */
	@media (max-width: 900px) {
    #unity-canvas {
      width: 100%; 
      height: 1200px; 
      background: #808080;
      justify-content:center ;
    }
  }

	/* Responsive layout - makes the four columns stack on top of each other instead of next to each other */
	@media screen and (min-width: 601px) {
    #unity-canvas {
      width: 430px; 
      height: 700px; 
      background: #808080;
      justify-content:center ;
      display: block;
      margin: 0 auto;
    }
  }
</style>