/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
let timeline;
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */

    preload(){
        //bg 2 (tout au fond et très flou)
        for(let t=0;t<=5;t++){
            this.load.image('bg2-tree-'+t, 'assets/level/background-2/bg2-tree-'+t+'.png');
            this.load.image('bg2-terrain-'+t, 'assets/level/background-2/bg2-terrain-'+t+'.png');
        }

        //bg 1 (gris légèrement flou)
        this.load.image('bg-wooden-bridge', 'assets/level/background-1/bg-wooden-bridge.png');
        this.load.image('bg-big-stone', 'assets/level/background-1/bg-big-stone.png');
        for(let t2=0;t2<=5;t2++){
            this.load.image('bg-tree-'+t2, 'assets/level/background-1/bg-tree-'+t2+'.png');
            this.load.image('bg-stone-'+t2, 'assets/level/background-1/bg-stone-'+t2+'.png');
            this.load.image('bg1-terrain-'+t2, 'assets/level/background-1/bg-terrain-'+t2+'.png');
            this.load.image('bg-box-'+t2, 'assets/level/background-1/bg-box-'+t2+'.png');
            this.load.image('bg-grass-'+t2, 'assets/level/background-1/bg-grass-'+t2+'.png');
            this.load.image('bg-mushroom-'+t2, 'assets/level/background-1/bg-mushroom-'+t2+'.png');

        }

        //ground (premier plan noir)
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gLeft', 'assets/level/ground/g-left.png');
        this.load.image('g-wooden-bridge', 'assets/level/ground/g-wooden-bridge.png');
        this.load.image('g-big-stone', 'assets/level/ground/g-big-stone.png');
        this.load.image('g-water', 'assets/level/ground/g-water.png');

        for(let i=1;i<=5;i++){
            this.load.image('g-grass-'+i, 'assets/level/ground/g-grass-'+i+'.png');
            this.load.image('gTree'+i, 'assets/level/ground/g-tree-'+i+'.png');
            this.load.image('g-box'+i, 'assets/level/ground/g-box-'+i+'.png');
            this.load.image('g-fellen-tree-'+i, 'assets/level/ground/g-fellen-tree-'+i+'.png');
            this.load.image('g-spike-'+i, 'assets/level/ground/g-spike-'+i+'.png');
            this.load.image('g-tree-platform-'+i, 'assets/level/ground/g-spike-'+i+'.png');
            this.load.image('g-vine-'+i, 'assets/level/ground/g-vine-'+i+'.png');
            this.load.image('g-stone-'+i, 'assets/level/ground/g-stone-'+i+'.png');
            this.load.image('g-mushroom'+i, 'assets/level/ground/g-mushroom'+i+'.png');
            this.load.image('g-box-'+i, 'assets/level/ground/g-box-'+i+'.png');

        }
        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent
        for(let r=1;r<=3;r++){
            this.load.image('filterFilm'+r, 'assets/level/filters/film/frame-'+r+'.png');
            this.load.image('bg-animation-'+r, 'assets/level/background-2/bg-animation/bg-animation-'+r+'.png');
            this.load.image('bloody-animation-'+r, 'assets/level/filters/bloody/frame'+r+'.png');
        }
        for(let z=1;z<=16;z++){
            this.load.image('z'+z, 'assets/level/zombie/z'+z+'.png');
            this.load.image('zback'+z, 'assets/level/zombie/zombieback/z'+z+'.png');
            this.load.image('rain'+z, 'assets/level/weather/rain/frame'+z+'.png');
            this.load.image('snow'+z, 'assets/level/weather/snow/frame'+z+'.png');
        }
        for(let z=1;z<=10;z++){
            this.load.image('boyidle'+z, 'assets/characters/boy/boystyle1/idle/layer-'+z+'.png');
            this.load.image('enemi-idle'+z, 'assets/characters/enemy 1/PNG/idle/Layer-'+z+'.png');
            this.load.image('enemi2-idle'+z, 'assets/characters/enemy 2/PNG/idle/Layer-'+z+'.png');
            this.load.image('enemi2-run'+z, 'assets/characters/enemy 2/PNG/run/Layer-'+z+'.png');
            this.load.image('enemi-run'+z, 'assets/characters/enemy 1/PNG/run/Layer-'+z+'.png');
        }
        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple

    }
    getFrames(prefix,length){
        let frames=[];
        for (let i=1;i<=length;i++){
            frames.push({key: prefix+i});
        }
        return frames;
    }
    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    create(){

        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */
        let bgAnimationA=this.add.sprite(0,0, 'bg-animation-1').setOrigin(0,0);
        this.filterbg = this.add.sprite(0, 0, 'bg-animation-1').setOrigin(0,0);
        this.anims.create({
            key: 'bg',
            frames: [
                {key:'bg-animation-1'},
                {key:'bg-animation-2'},
                {key:'bg-animation-3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterbg.play('film');




        //--------------background 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container=this.add.container(0,0);

        let bg2Tree1=this.add.image(50,-50,'bg2-tree-1').setOrigin(0,0);
        this.bg2Container.add(bg2Tree1);
        bg2Tree1.scale=0.5;

        let bg2Tree2=this.add.image(370,-50,'bg2-tree-2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree2);
        bg2Tree2.scale=0.6;
        //bg2Tree2.angle=-5; //pencher l'arbre de -5 degrès

        let bg2Tree3=this.add.image(720,-30,'bg2-tree-3').setOrigin(0,0);
        this.bg2Container.add(bg2Tree3);
        bg2Tree3.angle=-7; //pencher l'arbre de -5 degrès
        bg2Tree3.scale=0.7;

        let bg2terrain1=this.add.image(600,180, 'bg2-terrain-1').setOrigin(0,0);
        this.bg2Container.add(bg2terrain1);

        let bg2Terrain2=this.add.image(-350,90, 'bg2-terrain-2').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain2);
        bg2Terrain2.scale=1.2;

        let bg2terrain3=this.add.image(800,150, 'bg2-terrain-4').setOrigin(0,0);
        this.bg2Container.add(bg2terrain3);
        bg2terrain3.flipX;

        let bg2Tree4=this.add.image(950,-100,'bg2-tree-1').setOrigin(0,0);
        this.bg2Container.add(bg2Tree4);
        let bg2Tree5=this.add.image(1400,-100,'bg2-tree-2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree5);






        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container=this.add.container(0,0);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1grass=this.add.image(580,400, 'bg-grass-4').setOrigin(0,0);
        this.bg1Container.add(bg1grass);
        bg1grass.angle=-5;

        let bg1Terrain3=this.add.image(-480,180, 'bg1-terrain-3').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain3);

        let bg1Tree1=this.add.image(-25,-50, 'bg-tree-1').setOrigin(0,0);
        this.bg1Container.add(bg1Tree1);
        bg1Tree1.scale=0.7;

        let bg1Tree2=this.add.image(150,-100, 'bg-tree-3').setOrigin(0,0);
        this.bg1Container.add(bg1Tree2);
        bg1Tree2.scale=0.5;
        bg1Tree2.scaleY=0.65;

        let bg1Tree3=this.add.image(890,-100, 'bg-tree-2').setOrigin(0,0);
        this.bg1Container.add(bg1Tree3);

        let bg1Tree4=this.add.image(1050,-100, 'bg-tree-3').setOrigin(0,0);
        this.bg1Container.add(bg1Tree4);

        let bg1Tree5=this.add.image(1650,-100, 'bg-tree-2').setOrigin(0,0);
        this.bg1Container.add(bg1Tree5);

        let bg1Tree6=this.add.image(1800,-100, 'bg-tree-2').setOrigin(0,0);
        this.bg1Container.add(bg1Tree6);



        let bg1Terrain1=this.add.image(650,280, 'bg1-terrain-1').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain1);
        bg1Terrain1.scale=0.5;

        let bg1Terrain2=this.add.image(500,400, 'bg1-terrain-4').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain2);
        bg1Terrain2.scale=0.5;

        let bg1Terrain4=this.add.image(700,250, 'bg1-terrain-1').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain4);

        let bgwood=this.add.image(1270,280, 'bg-wooden-bridge').setOrigin(0,0);
        this.bg1Container.add(bgwood);

        let bg1Terrain5=this.add.image(1500,250, 'bg1-terrain-4').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain5);


        let zombie1=this.add.image(70,90, 'zback4').setOrigin(0,0);
        this.bg1Container.add(zombie1);

        let zombie2=this.add.image(1050,200, 'zback16').setOrigin(0,0);
        this.bg1Container.add(zombie2);

        let zombie3=this.add.image(1500,230, 'zback5').setOrigin(0,0);
        this.bg1Container.add(zombie3);
        zombie3.scale=0.6;

        let zombie4=this.add.image(1900,180, 'zback8').setOrigin(0,0);
        this.bg1Container.add(zombie4);


        //-------------ground (premier plan noir)---------------------------

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer=this.add.container(0,0);


        let gWater=this.add.image(350,400, 'g-water').setOrigin(0,0);
        this.groundContainer.add(gWater);
        gWater.scale=1.3;

        let tree1=this.add.image(220,450, 'gTree1').setOrigin(0,1);
        tree1.setTintFill; // pratique pour dbugger
        this.groundContainer.add(tree1);

        let tree2=this.add.image(0,450, 'gTree2').setOrigin(0,1);
        this.groundContainer.add(tree2);
        tree2.flipX=true;

        let tree3=this.add.image(800,-150, 'gTree1').setOrigin(0,0);
        this.groundContainer.add(tree3);
        tree3.angle=-10;
        tree3.flipX=true;

        let tree4=this.add.image(1150,-150, 'gTree1').setOrigin(0,0);
        this.groundContainer.add(tree4);
        //ici on va calculer les positions
        let gMid1=this.add.image(0,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1);

        let gMid3=this.add.image(gMid1.x+gMid1.width,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid3);

        let gMid4=this.add.image(800,380, 'gLeft').setOrigin(0,0);
        this.groundContainer.add(gMid4);

        let gMid5=this.add.image(950,380, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid5);

        let gMid6=this.add.image(1050,380, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid6);

        let gMid8=this.add.image(1150,380, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid8);

        let gMid7=this.add.image(1300,380, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid7);

        let gMid9=this.add.image(1900,400, 'gLeft').setOrigin(0,0);
        this.groundContainer.add(gMid9);

        let gStone1=this.add.image(820,360, 'g-stone-4').setOrigin(0,0);
        this.groundContainer.add(gStone1);

        let gStone2=this.add.image(330,335, 'g-stone-2').setOrigin(0,0);
        this.groundContainer.add(gStone2);

        let gStone3=this.add.image(70,335, 'g-stone-3').setOrigin(0,0);
        this.groundContainer.add(gStone3);

        let gStone4=this.add.image(1150,360, 'g-stone-5').setOrigin(0,0);
        this.groundContainer.add(gStone4);

        let gwoodenbridge=this.add.image(370,300, 'g-wooden-bridge').setOrigin(0,0);
        this.groundContainer.add(gwoodenbridge);
        gwoodenbridge.scale=0.90;
        gwoodenbridge.scaleX=0.96;


        let gMushroom=this.add.image(130,270, 'g-mushroom1').setOrigin(0,0);
        this.groundContainer.add(gMushroom);
        gMushroom.flipX=true;

        let gMushroom1=this.add.image(1400,350, 'g-mushroom1').setOrigin(0,0);
        this.groundContainer.add(gMushroom1);
        gMushroom1.scale=0.5;

        let gfellen=this.add.image(1480,300, 'g-fellen-tree-1').setOrigin(0,0);
        this.groundContainer.add(gfellen);
        gfellen.angle=5;

        let gBox1=this.add.image(500,290, 'g-box-2').setOrigin(0,0);
        this.groundContainer.add(gBox1);
        gBox1.scale=0.7;
        gBox1.angle=7;

        for(let v=-1;v<=4;v++){
            let gVine=this.add.image(500,v*20, 'g-vine-1').setOrigin(0,0);
            this.groundContainer.add(gVine);
            gVine.scale=0.5;

            let gVine2=this.add.image(500,100+v*20, 'g-vine-1').setOrigin(0,0);
            this.groundContainer.add(gVine2);
            gVine2.scale=0.5;
        }

        for(let v=-1;v<=3;v++){
            let gVine=this.add.image(550,v*20, 'g-vine-1').setOrigin(0,0);
            this.groundContainer.add(gVine);
            gVine.scale=0.5;
        }

        let gGrass1=this.add.image(95,305, 'g-grass-3').setOrigin(0,0);
        this.groundContainer.add(gGrass1);

        let gGrass2=this.add.tileSprite(300,430, 200,200,'g-grass-3').setOrigin(0,0);
        this.groundContainer.add(gGrass2);
        gGrass2.scale=3;

        let gGrass3=this.add.image(800,360, 'g-grass-2').setOrigin(0,0);
        this.groundContainer.add(gGrass3);

        let gGrass4=this.add.image(910,335, 'g-grass-5').setOrigin(0,0);
        this.groundContainer.add(gGrass4);

        let gGrass5=this.add.image(1120,345, 'g-grass-1').setOrigin(0,0);
        this.groundContainer.add(gGrass5);

        let gGrass6=this.add.image(1150,335, 'g-grass-3').setOrigin(0,0);
        this.groundContainer.add(gGrass6);

        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-1').setOrigin(0,1)
        this.groundContainer.add(grass);

        let grass3=this.add.tileSprite(1500,550,gMid3.x+gMid3.width-40,50,'g-grass-3').setOrigin(0,1)
        this.groundContainer.add(grass3);
        grass3.scale=2;

        /**
         * encore de l'herbe
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass2=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-3').setOrigin(0,1)
        this.groundContainer.add(grass2);
        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterFilm = this.add.sprite(0, 0, 'filterFilm1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'film',
            frames: [
                {key:'filterFilm1'},
                {key:'filterFilm2'},
                {key:'filterFilm3'},
            ],
            frameRate: 16,
            repeat: -1
        });

        this.blood = this.add.sprite(0, 0, 'bloody-animation-1').setOrigin(0,0);
        this.anims.create({
            key: 'blood',
            frames: [
                {key:'bloody-animation-1'},
                {key:'bloody-animation-2'},
                {key:'bloody-animation-3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.blood.play('blood');
        this.rain = this.add.sprite(0, 0, 'rain1').setOrigin(0,0);
        this.anims.create({
            key: 'rain',
            frames: [
                {key:'rain1'},
                {key:'rain2'},
                {key:'rain3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.rain.play('rain');
        this.rain.visible=false;

        this.snow = this.add.sprite(0, 0, 'snow1').setOrigin(0,0);
        this.anims.create({
            key: 'snow',
            frames: [
                {key:'snow1'},
                {key:'snow2'},
                {key:'snow3'},
                {key:'snow4'},
                {key:'snow5'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.snow.play('snow');
        this.snow.visible=false;

        this.idleb1 = this.add.sprite(60, 140, 'boyidle1').setOrigin(0,0);
        console.log(frames)
        this.anims.create({
            key: 'bidle',
            frames: this.getFrames("boyidle",10),
            frameRate: 15,
            repeat: -1
        });

        this.idleb1.play('bidle');
        this.idleb1.scale=0.6;


        this.idleenemi1 = this.add.sprite(1200, 80, 'enemi-run').setOrigin(0,0);
        console.log(frames)
        this.anims.create({
            key: 'enemie1',
            frames: this.getFrames("enemi-run",8),
            frameRate: 15,
            repeat: -1
        });
        this.idleenemi1.flipX=true;
        this.idleenemi1.scale=0.7;
        this.idleenemi1.play('enemie1');
        this.tweens.add({
            targets: this.idleenemi1,
            x: '-=450',
            duration: 10000,
            ease: 'linear',
            yoyo: true,
            repeat: -1,
            delay: 1000,
            flipX: true
        });


        this.idleenemi2 = this.add.sprite(1500, 200, 'enemi2-run').setOrigin(0,0);
        console.log(frames)
        this.anims.create({
            key: 'enemie2',
            frames: this.getFrames("enemi2-run",8),
            frameRate: 15,
            repeat: -1
        });
        this.idleenemi2.flipX=true;
        this.idleenemi2.scale=0.3;
        this.idleenemi2.play('enemie2');

        timeline = this.tweens.timeline({

            targets: this.idleenemi2,
            loop: 50,

            tweens: [
                {
                    x: 1800,
                    ease: 'Sine.easeInOut',
                    duration: 2000,
                    yoyo: true
                },
                {
                    y: 100,
                    ease: 'Sine.easeOut',
                    duration: 1000,
                    offset: 0
                },
                {
                    y: 200,
                    ease: 'Sine.easeIn',
                    duration: 1000
                },
                {
                    y: 250,
                    ease: 'Sine.easeOut',
                    duration: 1000
                },
                {
                    y: 200,
                    ease: 'Sine.easeIn',
                    duration: 1000
                }
            ]

        });

        console.log(timeline);




        this.idleenemi3 = this.add.sprite(1580, 200, 'enemi2-run').setOrigin(0,0);
        console.log(frames)
        this.anims.create({
            key: 'enemie2',
            frames: this.getFrames("enemi2-run",8),
            frameRate: 15,
            repeat: -1
        });
        this.idleenemi3.angle=5;
        this.idleenemi3.scale=0.1;
        this.idleenemi3.play('enemie2');


        this.idleenemi4 = this.add.sprite(1500, 200, 'enemi2-run').setOrigin(0,0);
        console.log(frames)
        this.anims.create({
            key: 'enemie2',
            frames: this.getFrames("enemi2-run",8),
            frameRate: 15,
            repeat: -1
        });
        this.idleenemi4.flipX=true;
        this.idleenemi4.angle=5;
        this.idleenemi4.scale=0.1;
        this.idleenemi4.play('enemie2');


        this.idleenemi5 = this.add.sprite(1540, 180, 'enemi2-run').setOrigin(0,0);
        console.log(frames)
        this.anims.create({
            key: 'enemie2',
            frames: this.getFrames("enemi2-run",8),
            frameRate: 15,
            repeat: -1
        });
        this.idleenemi5.flipX=true;
        this.idleenemi5.angle=5;
        this.idleenemi5.scale=0.1;
        this.idleenemi5.play('enemie2');

        this.tweens.add({
            targets: [ this.idleenemi3, this.idleenemi4, this.idleenemi5 ],
            y: '-=50',
            duration: 1500,
            ease: 'Power',
            yoyo: true,
            repeat: -1,
            delay: 1000
        });






        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 2000, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        bgAnimationA.scrollFactorX=0;
        this.snow.scrollFactorX=0;
        this.rain.scrollFactorX=0;
        this.blood.scrollFactorX=0;
        this.filterFilm.scrollFactorX=0;
        this.filterbg.scrollFactorX=0;
        this.bg2Container.scrollFactorX=0.7;
        this.bg1Container.scrollFactorX=0.9;
        this.groundContainer.scrollFactorX=1;

    }
    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=5;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=-5;
                    break;

                case Phaser.Input.Keyboard.KeyCodes.N:
                    me.snow.visible=true;
                    me.rain.visible = false;
                    break;

                case Phaser.Input.Keyboard.KeyCodes.R:
                    me.rain.visible = true;
                    me.snow.visible=false;
                    break;

                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.rain.visible = false;
                    me.snow.visible=false;
                    break;

                case Phaser.Input.Keyboard.KeyCodes.B:
                    me.blood.visible = false;

                    break;

                case Phaser.Input.Keyboard.KeyCodes.V:
                    me.blood.visible = true;

                    break;

            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=0;
                    break;

            }
        });
    }

    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update(){
        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterFilm.setAlpha(Phaser.Math.Between(95,100)/100)
    }
}