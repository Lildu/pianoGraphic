
class Tableau1 extends Phaser.Scene{

    preload(){
        for(let t=1;t<=23;t++){
        this.load.image('star-'+t, 'assets/etoiles/star-'+t+'.png');
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
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    this.speed=0;
                    break;
            }
        });
    }


    update(){
        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterFilm.setAlpha(Phaser.Math.Between(95,100)/100)
    }
}