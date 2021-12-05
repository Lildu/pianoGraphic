
class Tableau1 extends Phaser.Scene{

    preload(){
        for(let t=0;t<=28;t++){
        this.load.image('star-'+t, 'assets/etoiles/star-'+t+'.png');
        this.load.image('key-'+t, 'assets/piano/key-'+t+'.png');
        }
    }
    getFrames(prefix,length){
        let frames=[];
        for (let i=1;i<=length;i++){
            frames.push({key: prefix+i});
        }
        return frames;
    }

    create(){


        /**let touch=this.add.image(0,0,'key-1').setOrigin(0,0);
        this.piano.add(touch);*/

        /**let touch=this.add.tileSprite(0,340, 1920,200,'key-1').setOrigin(0,0);
        this.piano.add(touch);
        let vt= Math.random(1,28);
        let vX= Math.random(1,1920);
        let vY= Math.random(1,1050);*/
        this.star=this.add.container(0,0);

        let star1=this.add.image(0,0, 'star-1').setOrigin(0,0);
        this.star.add(star1);



        this.initKeyboard();
        this.cameras.main.setBounds(0, 0, 1920, 1050);


    }

    initKeyboard(){
        this.input.keyboard.on('keydown', function(kevent)
        {

            switch (kevent.keyCode)
            {

                case Phaser.Input.Keyboard.KeyCodes.Q:

                    break;

                case Phaser.Input.Keyboard.KeyCodes.S:
                case Phaser.Input.Keyboard.KeyCodes.D:
                case Phaser.Input.Keyboard.KeyCodes.F:
                case Phaser.Input.Keyboard.KeyCodes.G:
                case Phaser.Input.Keyboard.KeyCodes.H:
                case Phaser.Input.Keyboard.KeyCodes.J:
                case Phaser.Input.Keyboard.KeyCodes.K:
                case Phaser.Input.Keyboard.KeyCodes.L:
                case Phaser.Input.Keyboard.KeyCodes.M:
                case Phaser.Input.Keyboard.KeyCodes.Z:
                case Phaser.Input.Keyboard.KeyCodes.E:
                case Phaser.Input.Keyboard.KeyCodes.T:
                case Phaser.Input.Keyboard.KeyCodes.Y:
                    break;


            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.Q:
                case Phaser.Input.Keyboard.KeyCodes.S:
                case Phaser.Input.Keyboard.KeyCodes.D:
                case Phaser.Input.Keyboard.KeyCodes.F:
                case Phaser.Input.Keyboard.KeyCodes.G:
                case Phaser.Input.Keyboard.KeyCodes.H:
                case Phaser.Input.Keyboard.KeyCodes.J:
                case Phaser.Input.Keyboard.KeyCodes.K:
                case Phaser.Input.Keyboard.KeyCodes.L:
                case Phaser.Input.Keyboard.KeyCodes.M:
                case Phaser.Input.Keyboard.KeyCodes.Z:
                case Phaser.Input.Keyboard.KeyCodes.E:
                case Phaser.Input.Keyboard.KeyCodes.T:
                case Phaser.Input.Keyboard.KeyCodes.Y:
                    break;


            }
        });
    }


    update(){

    }
}