var obj =1 ;
var planet=1;
class Tableau1 extends Phaser.Scene{

    preload(){

        for(let t=1;t<=46;t++){
        this.load.image('star-'+t, 'assets/etoiles/star-'+t+'.png');
        }
        for(let t=1;t<=6;t++){
        this.load.image('planet-'+t, 'assets/planet/planet'+t+'.png');
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
                    if (obj>=24){
                        me.star24.setVisible(true)
                    }
                    if (obj>=25){
                        me.star25.setVisible(true)
                    }
                    if (obj>=26){
                        me.star26.setVisible(true)
                    }
                    if (obj>=27){
                        me.star27.setVisible(true)
                    }
                    if (obj>=28){
                        me.star28.setVisible(true)
                    }
                    if (obj>=29){
                        me.star29.setVisible(true)
                    }
                    if (obj>=30){
                        me.star30.setVisible(true)
                    }
                    if (obj>=31){
                        me.star31.setVisible(true)
                    }
                    if (obj>=32){
                        me.star32.setVisible(true)
                    }
                    if (obj>=33){
                        me.star33.setVisible(true)
                    }
                    if (obj>=34){
                        me.star34.setVisible(true)
                    }
                    if (obj>=35){
                        me.star35.setVisible(true)
                    }
                    if (obj>=36){
                        me.star36.setVisible(true)
                    }
                    if (obj>=37){
                        me.star37.setVisible(true)
                    }
                    if (obj>=38){
                        me.star38.setVisible(true)
                    }
                    if (obj>=39){
                        me.star39.setVisible(true)
                    }
                    if (obj>=40){
                        me.star40.setVisible(true)
                    }
                    if (obj>=41){
                        me.star41.setVisible(true)
                    }
                    if (obj>=42){
                        me.star42.setVisible(true)
                    }
                    if (obj>=43){
                        me.star43.setVisible(true)
                    }
                    if (obj>=44){
                        me.star44.setVisible(true)
                    }
                    if (obj>=45){
                        me.star45.setVisible(true)
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
                    if (obj>=24){
                        me.star24.setVisible(true)
                    }
                    if (obj>=25){
                        me.star25.setVisible(true)
                    }
                    if (obj>=26){
                        me.star26.setVisible(true)
                    }
                    if (obj>=27){
                        me.star27.setVisible(true)
                    }
                    if (obj>=28){
                        me.star28.setVisible(true)
                    }
                    if (obj>=29){
                        me.star29.setVisible(true)
                    }
                    if (obj>=30){
                        me.star30.setVisible(true)
                    }
                    if (obj>=31){
                        me.star31.setVisible(true)
                    }
                    if (obj>=32){
                        me.star32.setVisible(true)
                    }
                    if (obj>=33){
                        me.star33.setVisible(true)
                    }
                    if (obj>=34){
                        me.star34.setVisible(true)
                    }
                    if (obj>=35){
                        me.star35.setVisible(true)
                    }
                    if (obj>=36){
                        me.star36.setVisible(true)
                    }
                    if (obj>=37){
                        me.star37.setVisible(true)
                    }
                    if (obj>=38){
                        me.star38.setVisible(true)
                    }
                    if (obj>=39){
                        me.star39.setVisible(true)
                    }
                    if (obj>=40){
                        me.star40.setVisible(true)
                    }
                    if (obj>=41){
                        me.star41.setVisible(true)
                    }
                    if (obj>=42){
                        me.star42.setVisible(true)
                    }
                    if (obj>=43){
                        me.star43.setVisible(true)
                    }
                    if (obj>=44){
                        me.star44.setVisible(true)
                    }
                    if (obj>=45){
                        me.star45.setVisible(true)
                    }


                    obj += 1;
                    console.log(obj)
                    break

                case Phaser.Input.Keyboard.KeyCodes.G:
                    if (planet>=1){
                        me.planet1.setVisible(true)
                    }
                    if (planet>=2){
                        me.planet2.setVisible(true)
                    }
                    if (planet>=3){
                        me.planet3.setVisible(true)
                    }
                    if (planet>=4){
                        me.planet4.setVisible(true)
                    }
                    if (planet>=5){
                        me.planet5.setVisible(true)
                    }
                    if (planet>=6){
                        me.planet6.setVisible(true)
                    }
                    if (planet>=7){
                        me.planet6.setVisible(true)
                    }
                    if (planet>=8){
                        me.planet6.setVisible(true)
                    }
                    if (planet>=9){
                        me.planet6.setVisible(true)
                    }

                    planet += 1;
                    console.log("planet")
                    console.log(planet)
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
         var ransize = (add.Math.random(0,100)/100);*/

        //this.st = this.add.container(0,0);


        /**création planet*/
        this.planet1=this.add.image(0,0,'planet-1').setOrigin(0,0);
        this.planet1.setVisible(false)
        this.planet1.setRandomPosition(1,2)
        this.planet1.scale=1;

        this.planet2=this.add.image(0,0,'planet-2').setOrigin(0,0);
        this.planet2.setVisible(false)
        this.planet2.setRandomPosition(1,2)
        this.planet2.scale=0.9;
        this.planet2.flipX=true;

        this.planet3=this.add.image(0,0,'planet-3').setOrigin(0,0);
        this.planet3.setVisible(false)
        this.planet3.setRandomPosition(1,2)
        this.planet3.scale=0.5;

        this.planet4=this.add.image(0,0,'planet-4').setOrigin(0,0);
        this.planet4.setVisible(false)
        this.planet4.setRandomPosition(1,2)
        this.planet4.scale=1;
        this.planet4.flipX=true;

        this.planet5=this.add.image(0,0,'planet-5').setOrigin(0,0);
        this.planet5.setVisible(false)
        this.planet5.setRandomPosition(1,2)
        this.planet5.scale=1;

        this.planet6=this.add.image(0,0,'planet-6').setOrigin(0,0);
        this.planet6.setVisible(false)
        this.planet6.setRandomPosition(1,2)
        this.planet6.scale=1;

        this.planet7=this.add.image(0,0,'planet-7').setOrigin(0,0);
        this.planet7.setVisible(false)
        this.planet7.setRandomPosition(1,2)
        this.planet7.scale=1;

        this.planet8=this.add.image(0,0,'planet-8').setOrigin(0,0);
        this.planet8.setVisible(false)
        this.planet8.setRandomPosition(1,2)
        this.planet8.scale=1;

        this.planet9=this.add.image(0,0,'planet-9').setOrigin(0,0);
        this.planet9.setVisible(false)
        this.planet9.setRandomPosition(1,2)
        this.planet9.scale=1;



        /**création étoile*/
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


        this.star24=this.add.image(0,0,'star-24').setOrigin(0,0);
        this.star24.setVisible(false)
        this.star24.setRandomPosition(10,10)
        this.star24.scale=0.1;

        this.star25=this.add.image(0,0,'star-25').setOrigin(0,0);
        this.star25.setVisible(false)
        this.star25.setRandomPosition(10,10)
        this.star25.scale=0.1;

        this.star26=this.add.image(0,0,'star-26').setOrigin(0,0);
        this.star26.setVisible(false)
        this.star26.setRandomPosition(10,10)
        this.star26.scale=0.1;

        this.star27=this.add.image(0,0,'star-27').setOrigin(0,0);
        this.star27.setVisible(false)
        this.star27.setRandomPosition(10,10)
        this.star27.scale=0.1;

        this.star28=this.add.image(0,0,'star-28').setOrigin(0,0);
        this.star28.setVisible(false)
        this.star28.setRandomPosition(10,10)
        this.star28.scale=0.1;

        this.star29=this.add.image(0,0,'star-29').setOrigin(0,0);
        this.star29.setVisible(false)
        this.star29.setRandomPosition(10,10)
        this.star29.scale=0.1;

        this.star30=this.add.image(0,0,'star-30').setOrigin(0,0);
        this.star30.setVisible(false)
        this.star30.setRandomPosition(10,10)
        this.star30.scale=0.1;

        this.star31=this.add.image(0,0,'star-31').setOrigin(0,0);
        this.star31.setVisible(false)
        this.star31.setRandomPosition(10,10)
        this.star31.scale=0.1;

        this.star32=this.add.image(0,0,'star-32').setOrigin(0,0);
        this.star32.setVisible(false)
        this.star32.setRandomPosition(10,10)
        this.star32.scale=0.1;

        this.star33=this.add.image(0,0,'star-33').setOrigin(0,0);
        this.star33.setVisible(false)
        this.star33.setRandomPosition(10,10)
        this.star33.scale=0.1;

        this.star34=this.add.image(0,0,'star-34').setOrigin(0,0);
        this.star34.setVisible(false)
        this.star34.setRandomPosition(10,10)
        this.star34.scale=0.1;

        this.star35=this.add.image(0,0,'star-35').setOrigin(0,0);
        this.star35.setVisible(false)
        this.star35.setRandomPosition(10,10)
        this.star35.scale=0.1;

        this.star36=this.add.image(0,0,'star-36').setOrigin(0,0);
        this.star36.setVisible(false)
        this.star36.setRandomPosition(10,10)
        this.star36.scale=0.1;

        this.star37=this.add.image(0,0,'star-37').setOrigin(0,0);
        this.star37.setVisible(false)
        this.star37.setRandomPosition(10,10)
        this.star37.scale=0.1;

        this.star38=this.add.image(0,0,'star-38').setOrigin(0,0);
        this.star38.setVisible(false)
        this.star38.setRandomPosition(10,10)
        this.star38.scale=0.1;

        this.star38=this.add.image(0,0,'star-39').setOrigin(0,0);
        this.star38.setVisible(false)
        this.star38.setRandomPosition(10,10)
        this.star38.scale=0.1;

        this.star39=this.add.image(0,0,'star-40').setOrigin(0,0);
        this.star39.setVisible(false)
        this.star39.setRandomPosition(10,10)
        this.star39.scale=0.1;

        this.star40=this.add.image(0,0,'star-41').setOrigin(0,0);
        this.star40.setVisible(false)
        this.star40.setRandomPosition(10,10)
        this.star40.scale=0.1;

        this.star41=this.add.image(0,0,'star-42').setOrigin(0,0);
        this.star41.setVisible(false)
        this.star41.setRandomPosition(10,10)
        this.star41.scale=0.1;

        this.star42=this.add.image(0,0,'star-43').setOrigin(0,0);
        this.star42.setVisible(false)
        this.star42.setRandomPosition(10,10)
        this.star42.scale=0.1;

        this.star43=this.add.image(0,0,'star-44').setOrigin(0,0);
        this.star43.setVisible(false)
        this.star43.setRandomPosition(10,10)
        this.star43.scale=0.1;

        this.star44=this.add.image(0,0,'star-45').setOrigin(0,0);
        this.star44.setVisible(false)
        this.star44.setRandomPosition(10,10)
        this.star44.scale=0.1;

        this.star45=this.add.image(0,0,'star-46').setOrigin(0,0);
        this.star45.setVisible(false)
        this.star45.setRandomPosition(10,10)
        this.star45.scale=0.1;



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