<template>
  <canvas
  id="unity-canvas">
  </canvas>
</template>

<script setup>
import { onMounted } from 'vue';

const sendMessage = (object, method, param) => {
  window.gameInstance.SendMessage(object, method, param);
};

onMounted(() => {
  const file = 'webgl';
  const script = document.createElement('script');
  script.onload = () => {
    createUnityInstance(document.querySelector('#unity-canvas'), {
      dataUrl: `Build/${file}.data`,
      frameworkUrl: `Build/${file}.framework.js`,
      codeUrl: `Build/${file}.wasm`,
      streamingAssetsUrl: 'StreamingAssets',
      companyName: 'YOUR_COMPANY_NAME',
      productName: 'YOUR_PRODUCT_NAME',
      productVersion: 'YOUR_VERSION_NUMBER',
      matchWebGLToCanvasSize: true,
      // Uncomment above to separately control WebGL canvas render size and DOM element size.
      //devicePixelRatio: 1,
      // Uncomment above to override low DPI rendering on high DPI displays.
    }).then((unityInstance) => {
      // setting this allows the usage of "window.gameInstance" in jslib plugins inside Unity
      // it also sets up a simple shortcut we can use to provide a path into Unity from vue
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