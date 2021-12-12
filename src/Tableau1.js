var obj =1 ;
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



    initKeyboard(){
        //var nbobj = 0;
        let me = this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.Q:

                    if (obj>=1){
                        me.star1.setVisible(true)
                    }
                    if (obj>=2){
                        me.star2.setVisible(true)
                    }
                    if (obj>=3){
                        me.star3.setVisible(true)
                    }
                    if (obj>=4){
                        me.star4.setVisible(true)
                    }
                    if (obj>=5){
                        me.star5.setVisible(true)
                    }
                    if (obj>=6){
                        me.star6.setVisible(true)
                    }
                    if (obj>=7){
                        me.star7.setVisible(true)
                    }
                    if (obj>=8){
                        me.star8.setVisible(true)
                    }
                    if (obj>=9){
                        me.star9.setVisible(true)
                    }
                    if (obj>=10){
                        me.star10.setVisible(true)
                    }
                    if (obj>=11){
                        me.star11.setVisible(true)
                    }
                    if (obj>=12){
                        me.star12.setVisible(true)
                    }
                    if (obj>=13){
                        me.star13.setVisible(true)
                    }
                    if (obj>=14){
                        me.star14.setVisible(true)
                    }
                    if (obj>=15){
                        me.star15.setVisible(true)
                    }
                    if (obj>=16){
                        me.star16.setVisible(true)
                    }
                    if (obj>=17){
                        me.star17.setVisible(true)
                    }
                    if (obj>=18){
                        me.star18.setVisible(true)
                    }
                    if (obj>=19){
                        me.star19.setVisible(true)
                    }
                    if (obj>=20){
                        me.star20.setVisible(true)
                    }
                    if (obj>=21){
                        me.star21.setVisible(true)
                    }
                    if (obj>=22){
                        me.star22.setVisible(true)
                    }
                    if (obj>=23){
                        me.star23.setVisible(true)
                    }

                    obj += 1;
                    console.log(obj)
                    break
                case Phaser.Input.Keyboard.KeyCodes.S:

                    if (obj>=1){
                        me.star1.setVisible(true)
                    }
                    if (obj>=2){
                        me.star2.setVisible(true)
                    }
                    if (obj>=3){
                        me.star3.setVisible(true)
                    }
                    if (obj>=4){
                        me.star4.setVisible(true)
                    }
                    if (obj>=5){
                        me.star5.setVisible(true)
                    }
                    if (obj>=6){
                        me.star6.setVisible(true)
                    }
                    if (obj>=7){
                        me.star7.setVisible(true)
                    }
                    if (obj>=8){
                        me.star8.setVisible(true)
                    }
                    if (obj>=9){
                        me.star9.setVisible(true)
                    }
                    if (obj>=10){
                        me.star10.setVisible(true)
                    }
                    if (obj>=11){
                        me.star11.setVisible(true)
                    }
                    if (obj>=12){
                        me.star12.setVisible(true)
                    }
                    if (obj>=13){
                        me.star13.setVisible(true)
                    }
                    if (obj>=14){
                        me.star14.setVisible(true)
                    }
                    if (obj>=15){
                        me.star15.setVisible(true)
                    }
                    if (obj>=16){
                        me.star16.setVisible(true)
                    }
                    if (obj>=17){
                        me.star17.setVisible(true)
                    }
                    if (obj>=18){
                        me.star18.setVisible(true)
                    }
                    if (obj>=19){
                        me.star19.setVisible(true)
                    }
                    if (obj>=20){
                        me.star20.setVisible(true)
                    }
                    if (obj>=21){
                        me.star21.setVisible(true)
                    }
                    if (obj>=22){
                        me.star22.setVisible(true)
                    }
                    if (obj>=23){
                        me.star23.setVisible(true)
                    }

                    obj += 1;
                    console.log(obj)
                    break

                case Phaser.Input.Keyboard.KeyCodes.D:

                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.Q:

                    console.log('je lache')
                    break;

                case Phaser.Input.Keyboard.KeyCodes.S:

                    break;

            }
        });
    }
    create(){
        /**var vX = add.Math.random(0,1000);
         var vY = add.Math.random(0,700);*/

        //this.st = this.add.container(0,0);

        /**création star*/
        this.star1=this.add.image(0,0,'star-1').setOrigin(0,0);
        this.star1.setVisible(false)
        this.star1.setRandomPosition(10,10)
        this.star1.scale=0.1;

        this.star2=this.add.image(0,0,'star-2').setOrigin(0,0);
        this.star2.setVisible(false)
        this.star2.setRandomPosition(10,10)
        this.star2.scale=0.1;

        this.star3=this.add.image(0,0,'star-3').setOrigin(0,0);
        this.star3.setVisible(false)
        this.star3.setRandomPosition(10,10)
        this.star3.scale=0.1;

        this.star4=this.add.image(0,0,'star-4').setOrigin(0,0);
        this.star4.setVisible(false)
        this.star4.setRandomPosition(10,10)
        this.star4.scale=0.1;

        this.star5=this.add.image(0,0,'star-5').setOrigin(0,0);
        this.star5.setVisible(false)
        this.star5.setRandomPosition(10,10)
        this.star5.scale=0.1;

        this.star6=this.add.image(0,0,'star-6').setOrigin(0,0);
        this.star6.setVisible(false)
        this.star6.setRandomPosition(10,10)
        this.star6.scale=0.1;

        this.star7=this.add.image(0,0,'star-7').setOrigin(0,0);
        this.star7.setVisible(false)
        this.star7.setRandomPosition(10,10)
        this.star7.scale=0.1;

        this.star8=this.add.image(0,0,'star-8').setOrigin(0,0);
        this.star8.setVisible(false)
        this.star8.setRandomPosition(10,10)
        this.star8.scale=0.1;

        this.star9=this.add.image(0,0,'star-9').setOrigin(0,0);
        this.star9.setVisible(false)
        this.star9.setRandomPosition(10,10)
        this.star9.scale=0.1;

        this.star10=this.add.image(0,0,'star-10').setOrigin(0,0);
        this.star10.setVisible(false)
        this.star10.setRandomPosition(10,10)
        this.star10.scale=0.1;

        this.star11=this.add.image(0,0,'star-11').setOrigin(0,0);
        this.star11.setVisible(false)
        this.star11.setRandomPosition(10,10)
        this.star11.scale=0.1;

        this.star12=this.add.image(0,0,'star-12').setOrigin(0,0);
        this.star12.setVisible(false)
        this.star12.setRandomPosition(10,10)
        this.star12.scale=0.1;

        this.star13=this.add.image(0,0,'star-13').setOrigin(0,0);
        this.star13.setVisible(false)
        this.star13.setRandomPosition(10,10)
        this.star13.scale=0.1;

        this.star14=this.add.image(0,0,'star-14').setOrigin(0,0);
        this.star14.setVisible(false)
        this.star14.setRandomPosition(10,10)
        this.star14.scale=0.1;

        this.star15=this.add.image(0,0,'star-15').setOrigin(0,0);
        this.star15.setVisible(false)
        this.star15.setRandomPosition(10,10)
        this.star15.scale=0.1;

        this.star16=this.add.image(0,0,'star-16').setOrigin(0,0);
        this.star16.setVisible(false)
        this.star16.setRandomPosition(10,10)
        this.star16.scale=0.1;

        this.star17=this.add.image(0,0,'star-17').setOrigin(0,0);
        this.star17.setVisible(false)
        this.star17.setRandomPosition(10,10)
        this.star17.scale=0.1;

        this.star18=this.add.image(0,0,'star-18').setOrigin(0,0);
        this.star18.setVisible(false)
        this.star18.setRandomPosition(10,10)
        this.star18.scale=0.1;

        this.star19=this.add.image(0,0,'star-19').setOrigin(0,0);
        this.star19.setVisible(false)
        this.star19.setRandomPosition(10,10)
        this.star19.scale=0.1;

        this.star20=this.add.image(0,0,'star-20').setOrigin(0,0);
        this.star20.setVisible(false)
        this.star20.setRandomPosition(10,10)
        this.star20.scale=0.1;

        this.star21=this.add.image(0,0,'star-21').setOrigin(0,0);
        this.star21.setVisible(false)
        this.star21.setRandomPosition(10,10)
        this.star21.scale=0.1;

        this.star22=this.add.image(0,0,'star-22').setOrigin(0,0);
        this.star22.setVisible(false)
        this.star22.setRandomPosition(10,10)
        this.star22.scale=0.1;

        this.star23=this.add.image(0,0,'star-23').setOrigin(0,0);
        this.star23.setVisible(false)
        this.star23.setRandomPosition(10,10)
        this.star23.scale=0.1;



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

        for (let t=1;t<=80;t++){


        }

    }

}