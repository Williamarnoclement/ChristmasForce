<template>
<!-- Le composant dédié à la figurine 3D de l'un des rennes -->
    <div id="background">
    LA <b>FORCE</b> DE <b style="font-size:500px; overflow: hidden;">NOËL</b> 
    </div>
</template>
<style>
#background {
   position: absolute;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   z-index: -1;
   overflow: hidden;
   font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
   font-size: 100px;
    color: bisque;
    margin-top: 160px;
}
</style>
<script>
// import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { RoughnessMipmapper } from 'three/examples/jsm/utils/RoughnessMipmapper.js';
import hdrFile from "../../public/model/textures/snowy_field_4k.hdr";
import glbFile from "../../public/model/hero.glb";


export default {
    name: 'Characters',
    beforeMount() {
        let camera, scene, renderer;
        let mixer;
        var clock = new THREE.Clock();
        var mouseDown = false,
        mouseX = 0,
        mouseY = 0;
        var model;
        init();
        render();
        function init() {
            const container = document.createElement( 'div' );
            document.body.appendChild( container );
            camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.25, 100 );
            camera.position.set( - 1.8, 0.6, 2.7 );
            scene = new THREE.Scene();
            const hdr = new RGBELoader()
            hdr.load( hdrFile , function ( texture ) {
                texture.mapping = THREE.EquirectangularReflectionMapping;
                scene.environment = texture;
                render();
                // use of RoughnessMipmapper is optional
                const roughnessMipmapper = new RoughnessMipmapper( renderer );
                const loader = new GLTFLoader();
                loader.load( glbFile, function ( gltf ) {
                    model = gltf.scene;
                    //var animations = gltf.animations; // <---ne fonctionne pas, impossible à faire tourner...
                    //on applique les materiaux ! 
                    gltf.scene.traverse( function ( child ) {
                        if ( child.isMesh ) {
                            roughnessMipmapper.generateMipmaps( child.material );
                        }
                    } );
                    gltf.scene.scale.set(1,1,1);
                    scene.add( model );
                    model.position.set(-40, 0, -30);
                    camera.lookAt( model.position );
                    model.rotation.y += 5;
                    mixer = new THREE.AnimationMixer( model);
                    roughnessMipmapper.dispose();
                    render();
                } );
            } );
            renderer = new THREE.WebGLRenderer( { antialias: true , alpha: true} );
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( window.innerWidth, window.innerHeight );
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 1;
            renderer.outputEncoding = THREE.sRGBEncoding;
            container.appendChild( renderer.domElement );
            window.addEventListener( 'resize', onWindowResize );
        }
        //Lors du resize de la fenêtre
        function onWindowResize() {
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
            render();

        }
        //Mouvement de la souris
        function onMouseMove(evt) {
                if (!mouseDown) {
                    return;
                }
                evt.preventDefault();
                var deltaX = evt.clientX - mouseX,
                    deltaY = evt.clientY - mouseY;
                mouseX = evt.clientX;
                mouseY = evt.clientY;
                rotateScene(deltaX, deltaY);
        }
        //La souris cliquée
        function onMouseDown(evt) {
        evt.preventDefault();
        mouseDown = true;
        mouseX = evt.clientX;
        mouseY = evt.clientY;
        }
        //La souris non-cliquée
        function onMouseUp(evt) {
            evt.preventDefault();
            mouseDown = false;
        }
        // permet la rotation du modèle 3D
        function rotateScene(deltaX, deltaY) {
                model.rotation.y += deltaX / 100;
        }
        //fonction récursive dédiée au rendu
        function render() {
            requestAnimationFrame(render);
            var delta = clock.getDelta();
            if (mixer != null) {
                mixer.update(delta);
            };
            renderer.render(scene, camera);
        }
        //ajout de l'évènement dédié au comportement de la souris...
        function addMouseHandler(canvas) {
            canvas.addEventListener('mousemove', function (e) {
                onMouseMove(e);
            }, false);
            canvas.addEventListener('mousedown', function (e) {
                onMouseDown(e);
            }, false);
            canvas.addEventListener('mouseup', function (e) {
                onMouseUp(e);
            }, false);
        }
        //...et on ajoute l'élément !
        addMouseHandler(document.getElementsByTagName("canvas")[0]);
    }
}
</script>
