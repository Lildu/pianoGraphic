
class Tableau1 extends Phaser.Scene{


    preload(){
        for(let t=0;t<=23;t++){
        this.load.image('star-'+t, 'assets/etoiles/star-'+t+'.png');
        }

    }


    create(){

        this.piano=this.add.container(0,0);

        /**let touch=this.add.image(0,0,'key-1').setOrigin(0,0);
        this.piano.add(touch);*/

        /**let touch=this.add.tileSprite(0,340, 1920,200,'key-1').setOrigin(0,0);
        this.piano.add(touch);
        this.pianopress=this.add.container(0,0);
        let touch2=this.add.image(250,335,'key-2').setOrigin(0,0);


        this.pianopress.add(touch2);
        this.pianopress.visible=false;

        let touch=this.add.image(250,335,'key-1').setOrigin(0,0);
        this.piano.add(touch);
       /** for(let t=0;t<=13;t++){
            let touch1=this.add.image(touch.x+t*(touch.width),335,'key-1').setOrigin(0,0);
            this.piano.add(touch1);
        }
*/

        this.initKeyboard();
        this.cameras.main.setBounds(0, 0, 1920, 1080);
        this.objects.camera.setBackgroundColor('rgb(0,0,0,)');

    }
    initKeyboard(){
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.Q:

                    break;

                case Phaser.Input.Keyboard.KeyCodes.S:

                    break;



            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {


            }
        });
    }


    update(){

    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: [ Example ],
    width: 1920,
    height: 1080
};

const game = new Phaser.Game(config);