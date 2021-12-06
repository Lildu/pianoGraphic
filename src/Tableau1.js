
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
        /**var vX = add.Math.random(0,1000);
        var vY = add.Math.random(0,700);*/

        //this.st = this.add.container(0,0);
        this.star1=this.add.image(0,0,'star-1').setOrigin(0,0);
        this.star1.setVisible(true)
        this.star1.setRandomPosition(10,10)
        this.star1.scale=0.1;
        //this.st.add('star1');
        //this.st.scale=1;
        //this.st.setRandomPosition(10,10);
        //this.st.visible = true;
        /**let touch=this.add.image(0,0,'key-1').setOrigin(0,0);
        this.piano.add(touch);*/

        /**let touch=this.add.tileSprite(0,340, 1920,200,'key-1').setOrigin(0,0);
        this.piano.add(touch);
        this.pianopress=this.add.container(0,0);
        let touch2=this.add.image(250,335,'key-2').setOrigin(0,0);


        this.pianopress.add(touch2);
        this.pianopress.visible=false;

        let touch=this.add.image(250,335,'key-1').setOrigin(0,0):
        this.piano.add(touch);
       /** for(let t=0;t<=13;t++){
            let touch1=this.add.image(touch.x+t*(touch.width),335,'key-1').setOrigin(0,0);
            this.piano.add(touch1);
        }
*/

        this.initKeyboard();
    }


    initKeyboard(){
        let me = this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.star1.setVisible(false)
                    console.log('japuis')
                    break
                case Phaser.Input.Keyboard.KeyCodes.S:

                    break;



            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.star1.setVisible(true)
                    console.log('je lache')
                    break;

                case Phaser.Input.Keyboard.KeyCodes.S:

                    break;

            }
        });
    }
}