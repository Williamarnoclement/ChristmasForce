<template>
  <div id="canvas"></div>
</template>

<script>
// import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { RoughnessMipmapper } from 'three/examples/jsm/utils/RoughnessMipmapper.js';


export default {
    name: 'Characters',
    beforeMount() {
        console.log(`At this point, vm.$el has not been created yet.`)
            
        let camera, scene, renderer;
        let mixer;
        var clock = new THREE.Clock();

        init();
        render();

        function init() {

            const container = document.createElement( 'div' );
            document.body.appendChild( container );

            camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.25, 100 );
            camera.position.set( - 1.8, 0.6, 2.7 );

            scene = new THREE.Scene();

            const hdr = new RGBELoader()
            .setPath( '../assets/model/textures/' )
            .load( 'snowy_field_4k.hdr', function ( texture ) {

                texture.mapping = THREE.EquirectangularReflectionMapping;

                scene.environment = texture;

                render();

                // model

                // use of RoughnessMipmapper is optional
                const roughnessMipmapper = new RoughnessMipmapper( renderer );

                const loader = new GLTFLoader().setPath( '../assets/model/' );
                loader.load( 'hero.glb', function ( gltf ) {
                    var model = gltf.scene;
                    console.log(model);
                    var animations = gltf.animations;
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

                    var action = mixer.clipAction( animations[ 0 ] ); // access first animation clip
                    action.play();

                    roughnessMipmapper.dispose();

                    render();

                } );

            } );

            renderer = new THREE.WebGLRenderer( { antialias: true } );
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( window.innerWidth, window.innerHeight );
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 1;
            renderer.outputEncoding = THREE.sRGBEncoding;
            container.appendChild( renderer.domElement );

            window.addEventListener( 'resize', onWindowResize );

        }

        function onWindowResize() {

            camera.updateProjectionMatrix();

            renderer.setSize( window.innerWidth, window.innerHeight );

            render();

        }

        //

        function render() {
            requestAnimationFrame(render);
            var delta = clock.getDelta();
            if (mixer != null) {
                mixer.update(delta);
            };
            renderer.render(scene, camera);
        }

    }
}
</script>
