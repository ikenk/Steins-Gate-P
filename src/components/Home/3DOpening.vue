<template>
    <div class="opening">
        <div class="canvas_container" ref="canvasDom"></div>
    </div>
</template>

<script setup>
    import * as THREE from "/node_modules/three";
    import {OrbitControls} from "/node_modules/three/examples/jsm/controls/OrbitControls.js";
    import {GLTFLoader} from "/node_modules/three/examples/jsm/loaders/GLTFLoader.js";
    import { onMounted, reactive, ref } from "vue";

    // 获取canvasDom元素
    let canvasDom = ref(null); 

    //声明控制器
    let controls;

    // 创建场景
    const scene = new THREE.Scene();

    // 创建相机
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0,2,6);

    // 创建渲染器renderer
    const renderer = new THREE.WebGL1Renderer({
        antialias:true,// 抗锯齿
    });
    renderer.setSize(window.innerWidth, window.innerHeight);//设置renderer尺寸

    //设置render函数用来渲染场景
    const render = () => {
        renderer.render(scene,camera);//用scene和camera渲染场景
        controls && controls.update();//控制器更新
        requestAnimationFrame(render);//按帧更新控制器
    }

    //监视画面变化
    window.addEventListener("resize",() => {
        //更新摄像机
        camera.aspect = window.innerWidth / window.innerHeight;
        //更新摄像机的投影矩阵
        camera.updateProjectionMatrix();

        // 更新渲染器尺寸
        renderer.setSize(window.innerWidth, window.innerHeight);
        //更新渲染器的像素比
        renderer.setPixelRatio(window.devicePixelRatio);
    })

    onMounted(()=>{
        // 将渲染器插入到Dom中
        canvasDom.value.appendChild(renderer.domElement);

        // 初始化渲染器
        renderer.setClearColor("#000")
        scene.background = new THREE.Color("#ccc");//渲染场景背景，背景总是首先被渲染的
        scene.environment = new THREE.Color("#ccc");//渲染场景环境，该纹理贴图将会被设为场景中所有物理材质的环境贴图
        render();//调用渲染函数render

        //添加网格地面
        const gridHelper = new THREE.GridHelper(10,10);
        gridHelper.material.opacity = 0.2;
        gridHelper.material.transparent = true;
        scene.add(gridHelper);

        //添加控制器
        controls = new OrbitControls(camera,renderer.domElement);
        controls.enableDamping = true;// 设置控制器阻尼，让控制器更真实
        controls.update();

        //载入模型
        const loader = new GLTFLoader();
        loader.load(
            '/src/assets/3Dmodel/emission_demo_divergence_meter/scene.gltf',
            ( gltf ) => {
            const nixieclock = gltf.scene;
            nixieclock.scale.set(20, 20,20);
            scene.add( nixieclock );
            },
            undefined, function ( error ) {
            console.error( error );
            }
        );

        //添加灯光
        const light01 = new THREE.DirectionalLight(0xffffff,1);
        light01.position.set(0,0,10);
        // scene.add(light01);
        const light02 = new THREE.DirectionalLight(0xffffff,1);
        light02.position.set(0,0,-10);
        scene.add(light02);

        const light03 = new THREE.DirectionalLight(0xffffff,1);
        light03.position.set(50,0,0);
        // scene.add(light03);
        const light04 = new THREE.DirectionalLight(0xffffff,1);
        light04.position.set(-50,0,0);
        // scene.add(light04);

        const light05 = new THREE.DirectionalLight(0xffffff,1);
        light05.position.set(-50,50,50);
        scene.add(light05);
        const light06 = new THREE.DirectionalLight(0xffffff,1);
        light05.position.set(50,50,50);
        scene.add(light06);
        const light07 = new THREE.DirectionalLight(0xffffff,1);
        light06.position.set(-50,-50,-50);
        scene.add(light07);
        const light08 = new THREE.DirectionalLight(0xffffff,1);
        light06.position.set(50,-50,-50);
        scene.add(light08);
    });

</script>

<style scoped>
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }

    .canvas_container{
        width: 100vw;
        height: 100vh;
    }
</style>