
class Tableau1 extends Phaser.Scene{

    preload(){
        for(let t=0;t<=28;t++){
        this.load.image('star-'+t, 'assets/etoiles/star-'+t+'.png');
        this.load.image('key-'+t, 'assets/piano/key-'+t+'.png');
        }
    }


    create(){



        /**let touch=this.add.image(0,0,'key-1').setOrigin(0,0);
        this.piano.add(touch);*/

        /**let touch=this.add.tileSprite(0,340, 1920,200,'key-1').setOrigin(0,0);
        this.piano.add(touch);*/



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