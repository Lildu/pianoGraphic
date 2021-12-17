let obj = 1;
let planet=1;
let cloud=1;
function playdo(){
    var audio = new Audio('note-1')
    audio.play();
}
class Tableau1 extends Phaser.Scene{
    star;

    preload(){

        for(let t=1;t<=46;t++){
        this.load.image('star-'+t, 'assets/etoiles/star-'+t+'.png');
        }
        for(let t=1;t<=9;t++){
        this.load.image('planet-'+t, 'assets/planet/planet'+t+'.png');
        }
        for(let t=1;t<=8;t++){
            this.load.image('cloud-'+t, 'assets/cloud/cloud'+t+'.png');
        }
        for(let t=1;t<=8;t++){
            this.load.sound('note-'+t, 'assets/sound/note'+t+'.wav');
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
                    /*for(let t=1;t<=91;t++){
                        var star=this.star+t;
                        me.star.setVisible(true)
                    }**/
                    playdo()
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
                    if (obj>=46){
                        me.star46.setVisible(true)
                    }
                    if (obj>=47){
                        me.star47.setVisible(true)
                    }
                    if (obj>=48){
                        me.star48.setVisible(true)
                    }
                    if (obj>=49){
                        me.star49.setVisible(true)
                    }
                    if (obj>=50){
                        me.star50.setVisible(true)
                    }
                    if (obj>=51){
                        me.star51.setVisible(true)
                    }
                    if (obj>=52){
                        me.star52.setVisible(true)
                    }
                    if (obj>=53){
                        me.star53.setVisible(true)
                    }
                    if (obj>=54){
                        me.star54.setVisible(true)
                    }
                    if (obj>=55){
                        me.star55.setVisible(true)
                    }
                    if (obj>=56){
                        me.star56.setVisible(true)
                    }
                    if (obj>=57){
                        me.star57.setVisible(true)
                    }
                    if (obj>=58){
                        me.star58.setVisible(true)
                    }
                    if (obj>=59){
                        me.star59.setVisible(true)
                    }
                    if (obj>=60){
                        me.star60.setVisible(true)
                    }
                    if (obj>=61){
                        me.star61.setVisible(true)
                    }
                    if (obj>=62){
                        me.star62.setVisible(true)
                    }
                    if (obj>=63){
                        me.star63.setVisible(true)
                    }
                    if (obj>=64){
                        me.star64.setVisible(true)
                    }
                    if (obj>=65){
                        me.star65.setVisible(true)
                    }
                    if (obj>=66){
                        me.star66.setVisible(true)
                    }
                    if (obj>=67){
                        me.star67.setVisible(true)
                    }
                    if (obj>=68){
                        me.star68.setVisible(true)
                    }
                    if (obj>=69){
                        me.star69.setVisible(true)
                    }
                    if (obj>=70){
                        me.star70.setVisible(true)
                    }
                    if (obj>=71){
                        me.star71.setVisible(true)
                    }
                    if (obj>=72){
                        me.star72.setVisible(true)
                    }
                    if (obj>=73){
                        me.star73.setVisible(true)
                    }
                    if (obj>=74){
                        me.star74.setVisible(true)
                    }
                    if (obj>=75){
                        me.star75.setVisible(true)
                    }
                    if (obj>=76){
                        me.star76.setVisible(true)
                    }
                    if (obj>=76){
                        me.star76.setVisible(true)
                    }
                    if (obj>=77){
                        me.star77.setVisible(true)
                    }
                    if (obj>=78){
                        me.star78.setVisible(true)
                    }
                    if (obj>=79){
                        me.star79.setVisible(true)
                    }
                    if (obj>=80){
                        me.star80.setVisible(true)
                    }
                    if (obj>=81){
                        me.star81.setVisible(true)
                    }
                    if (obj>=82){
                        me.star82.setVisible(true)
                    }
                    if (obj>=83){
                        me.star83.setVisible(true)
                    }
                    if (obj>=84){
                        me.star84.setVisible(true)
                    }
                    if (obj>=85){
                        me.star85.setVisible(true)
                    }
                    if (obj>=86){
                        me.star86.setVisible(true)
                    }
                    if (obj>=87){
                        me.star87.setVisible(true)
                    }
                    if (obj>=88){
                        me.star88.setVisible(true)
                    }
                    if (obj>=89){
                        me.star89.setVisible(true)
                    }
                    if (obj>=90){
                        me.star90.setVisible(true)
                    }
                    if (obj>=91){
                        me.star91.setVisible(true)
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
                    if (obj>=46){
                        me.star46.setVisible(true)
                    }
                    if (obj>=47){
                        me.star47.setVisible(true)
                    }
                    if (obj>=48){
                        me.star48.setVisible(true)
                    }
                    if (obj>=49){
                        me.star49.setVisible(true)
                    }
                    if (obj>=50){
                        me.star50.setVisible(true)
                    }
                    if (obj>=51){
                        me.star51.setVisible(true)
                    }
                    if (obj>=52){
                        me.star52.setVisible(true)
                    }
                    if (obj>=53){
                        me.star53.setVisible(true)
                    }
                    if (obj>=54){
                        me.star54.setVisible(true)
                    }
                    if (obj>=55){
                        me.star55.setVisible(true)
                    }
                    if (obj>=56){
                        me.star56.setVisible(true)
                    }
                    if (obj>=57){
                        me.star57.setVisible(true)
                    }
                    if (obj>=58){
                        me.star58.setVisible(true)
                    }
                    if (obj>=59){
                        me.star59.setVisible(true)
                    }
                    if (obj>=60){
                        me.star60.setVisible(true)
                    }
                    if (obj>=61){
                        me.star61.setVisible(true)
                    }
                    if (obj>=62){
                        me.star62.setVisible(true)
                    }
                    if (obj>=63){
                        me.star63.setVisible(true)
                    }
                    if (obj>=64){
                        me.star64.setVisible(true)
                    }
                    if (obj>=65){
                        me.star65.setVisible(true)
                    }
                    if (obj>=66){
                        me.star66.setVisible(true)
                    }
                    if (obj>=67){
                        me.star67.setVisible(true)
                    }
                    if (obj>=68){
                        me.star68.setVisible(true)
                    }
                    if (obj>=69){
                        me.star69.setVisible(true)
                    }
                    if (obj>=70){
                        me.star70.setVisible(true)
                    }
                    if (obj>=71){
                        me.star71.setVisible(true)
                    }
                    if (obj>=72){
                        me.star72.setVisible(true)
                    }
                    if (obj>=73){
                        me.star73.setVisible(true)
                    }
                    if (obj>=74){
                        me.star74.setVisible(true)
                    }
                    if (obj>=75){
                        me.star75.setVisible(true)
                    }
                    if (obj>=76){
                        me.star76.setVisible(true)
                    }
                    if (obj>=76){
                        me.star76.setVisible(true)
                    }
                    if (obj>=77){
                        me.star77.setVisible(true)
                    }
                    if (obj>=78){
                        me.star78.setVisible(true)
                    }
                    if (obj>=79){
                        me.star79.setVisible(true)
                    }
                    if (obj>=80){
                        me.star80.setVisible(true)
                    }
                    if (obj>=81){
                        me.star81.setVisible(true)
                    }
                    if (obj>=82){
                        me.star82.setVisible(true)
                    }
                    if (obj>=83){
                        me.star83.setVisible(true)
                    }
                    if (obj>=84){
                        me.star84.setVisible(true)
                    }
                    if (obj>=85){
                        me.star85.setVisible(true)
                    }
                    if (obj>=86){
                        me.star86.setVisible(true)
                    }
                    if (obj>=87){
                        me.star87.setVisible(true)
                    }
                    if (obj>=88){
                        me.star88.setVisible(true)
                    }
                    if (obj>=89){
                        me.star89.setVisible(true)
                    }
                    if (obj>=90){
                        me.star90.setVisible(true)
                    }
                    if (obj>=91){
                        me.star91.setVisible(true)
                    }

                    obj += 1;
                    console.log(obj)
                    break

                case Phaser.Input.Keyboard.KeyCodes.D:

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
                    if (obj>=46){
                        me.star46.setVisible(true)
                    }
                    if (obj>=47){
                        me.star47.setVisible(true)
                    }
                    if (obj>=48){
                        me.star48.setVisible(true)
                    }
                    if (obj>=49){
                        me.star49.setVisible(true)
                    }
                    if (obj>=50){
                        me.star50.setVisible(true)
                    }
                    if (obj>=51){
                        me.star51.setVisible(true)
                    }
                    if (obj>=52){
                        me.star52.setVisible(true)
                    }
                    if (obj>=53){
                        me.star53.setVisible(true)
                    }
                    if (obj>=54){
                        me.star54.setVisible(true)
                    }
                    if (obj>=55){
                        me.star55.setVisible(true)
                    }
                    if (obj>=56){
                        me.star56.setVisible(true)
                    }
                    if (obj>=57){
                        me.star57.setVisible(true)
                    }
                    if (obj>=58){
                        me.star58.setVisible(true)
                    }
                    if (obj>=59){
                        me.star59.setVisible(true)
                    }
                    if (obj>=60){
                        me.star60.setVisible(true)
                    }
                    if (obj>=61){
                        me.star61.setVisible(true)
                    }
                    if (obj>=62){
                        me.star62.setVisible(true)
                    }
                    if (obj>=63){
                        me.star63.setVisible(true)
                    }
                    if (obj>=64){
                        me.star64.setVisible(true)
                    }
                    if (obj>=65){
                        me.star65.setVisible(true)
                    }
                    if (obj>=66){
                        me.star66.setVisible(true)
                    }
                    if (obj>=67){
                        me.star67.setVisible(true)
                    }
                    if (obj>=68){
                        me.star68.setVisible(true)
                    }
                    if (obj>=69){
                        me.star69.setVisible(true)
                    }
                    if (obj>=70){
                        me.star70.setVisible(true)
                    }
                    if (obj>=71){
                        me.star71.setVisible(true)
                    }
                    if (obj>=72){
                        me.star72.setVisible(true)
                    }
                    if (obj>=73){
                        me.star73.setVisible(true)
                    }
                    if (obj>=74){
                        me.star74.setVisible(true)
                    }
                    if (obj>=75){
                        me.star75.setVisible(true)
                    }
                    if (obj>=76){
                        me.star76.setVisible(true)
                    }
                    if (obj>=76){
                        me.star76.setVisible(true)
                    }
                    if (obj>=77){
                        me.star77.setVisible(true)
                    }
                    if (obj>=78){
                        me.star78.setVisible(true)
                    }
                    if (obj>=79){
                        me.star79.setVisible(true)
                    }
                    if (obj>=80){
                        me.star80.setVisible(true)
                    }
                    if (obj>=81){
                        me.star81.setVisible(true)
                    }
                    if (obj>=82){
                        me.star82.setVisible(true)
                    }
                    if (obj>=83){
                        me.star83.setVisible(true)
                    }
                    if (obj>=84){
                        me.star84.setVisible(true)
                    }
                    if (obj>=85){
                        me.star85.setVisible(true)
                    }
                    if (obj>=86){
                        me.star86.setVisible(true)
                    }
                    if (obj>=87){
                        me.star87.setVisible(true)
                    }
                    if (obj>=88){
                        me.star88.setVisible(true)
                    }
                    if (obj>=89){
                        me.star89.setVisible(true)
                    }
                    if (obj>=90){
                        me.star90.setVisible(true)
                    }
                    if (obj>=91){
                        me.star91.setVisible(true)
                    }

                    obj += 1;
                    console.log(obj)
                    break
                case Phaser.Input.Keyboard.KeyCodes.F:

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
                    if (obj>=46){
                        me.star46.setVisible(true)
                    }
                    if (obj>=47){
                        me.star47.setVisible(true)
                    }
                    if (obj>=48){
                        me.star48.setVisible(true)
                    }
                    if (obj>=49){
                        me.star49.setVisible(true)
                    }
                    if (obj>=50){
                        me.star50.setVisible(true)
                    }
                    if (obj>=51){
                        me.star51.setVisible(true)
                    }
                    if (obj>=52){
                        me.star52.setVisible(true)
                    }
                    if (obj>=53){
                        me.star53.setVisible(true)
                    }
                    if (obj>=54){
                        me.star54.setVisible(true)
                    }
                    if (obj>=55){
                        me.star55.setVisible(true)
                    }
                    if (obj>=56){
                        me.star56.setVisible(true)
                    }
                    if (obj>=57){
                        me.star57.setVisible(true)
                    }
                    if (obj>=58){
                        me.star58.setVisible(true)
                    }
                    if (obj>=59){
                        me.star59.setVisible(true)
                    }
                    if (obj>=60){
                        me.star60.setVisible(true)
                    }
                    if (obj>=61){
                        me.star61.setVisible(true)
                    }
                    if (obj>=62){
                        me.star62.setVisible(true)
                    }
                    if (obj>=63){
                        me.star63.setVisible(true)
                    }
                    if (obj>=64){
                        me.star64.setVisible(true)
                    }
                    if (obj>=65){
                        me.star65.setVisible(true)
                    }
                    if (obj>=66){
                        me.star66.setVisible(true)
                    }
                    if (obj>=67){
                        me.star67.setVisible(true)
                    }
                    if (obj>=68){
                        me.star68.setVisible(true)
                    }
                    if (obj>=69){
                        me.star69.setVisible(true)
                    }
                    if (obj>=70){
                        me.star70.setVisible(true)
                    }
                    if (obj>=71){
                        me.star71.setVisible(true)
                    }
                    if (obj>=72){
                        me.star72.setVisible(true)
                    }
                    if (obj>=73){
                        me.star73.setVisible(true)
                    }
                    if (obj>=74){
                        me.star74.setVisible(true)
                    }
                    if (obj>=75){
                        me.star75.setVisible(true)
                    }
                    if (obj>=76){
                        me.star76.setVisible(true)
                    }
                    if (obj>=76){
                        me.star76.setVisible(true)
                    }
                    if (obj>=77){
                        me.star77.setVisible(true)
                    }
                    if (obj>=78){
                        me.star78.setVisible(true)
                    }
                    if (obj>=79){
                        me.star79.setVisible(true)
                    }
                    if (obj>=80){
                        me.star80.setVisible(true)
                    }
                    if (obj>=81){
                        me.star81.setVisible(true)
                    }
                    if (obj>=82){
                        me.star82.setVisible(true)
                    }
                    if (obj>=83){
                        me.star83.setVisible(true)
                    }
                    if (obj>=84){
                        me.star84.setVisible(true)
                    }
                    if (obj>=85){
                        me.star85.setVisible(true)
                    }
                    if (obj>=86){
                        me.star86.setVisible(true)
                    }
                    if (obj>=87){
                        me.star87.setVisible(true)
                    }
                    if (obj>=88){
                        me.star88.setVisible(true)
                    }
                    if (obj>=89){
                        me.star89.setVisible(true)
                    }
                    if (obj>=90){
                        me.star90.setVisible(true)
                    }
                    if (obj>=91){
                        me.star91.setVisible(true)
                    }

                    obj += 1;
                    console.log(obj)
                    break
                case Phaser.Input.Keyboard.KeyCodes.G:

                    if (cloud>=1){
                        me.cloud1.setVisible(true)
                    }
                    if (cloud>=2){
                        me.cloud2.setVisible(true)
                    }
                    if (cloud>=3){
                        me.cloud3.setVisible(true)
                    }
                    if (cloud>=4){
                        me.cloud4.setVisible(true)
                    }
                    if (cloud>=5){
                        me.cloud5.setVisible(true)
                    }
                    if (cloud>=6){
                        me.cloud6.setVisible(true)
                    }
                    if (cloud>=7){
                        me.cloud7.setVisible(true)
                    }
                    if (cloud>=8){
                        me.cloud8.setVisible(true)
                    }

                    cloud += 1;
                    console.log(cloud)
                    break

                case Phaser.Input.Keyboard.KeyCodes.H:

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
                    if (obj>=46){
                        me.star46.setVisible(true)
                    }
                    if (obj>=47){
                        me.star47.setVisible(true)
                    }
                    if (obj>=48){
                        me.star48.setVisible(true)
                    }
                    if (obj>=49){
                        me.star49.setVisible(true)
                    }
                    if (obj>=50){
                        me.star50.setVisible(true)
                    }
                    if (obj>=51){
                        me.star51.setVisible(true)
                    }
                    if (obj>=52){
                        me.star52.setVisible(true)
                    }
                    if (obj>=53){
                        me.star53.setVisible(true)
                    }
                    if (obj>=54){
                        me.star54.setVisible(true)
                    }
                    if (obj>=55){
                        me.star55.setVisible(true)
                    }
                    if (obj>=56){
                        me.star56.setVisible(true)
                    }
                    if (obj>=57){
                        me.star57.setVisible(true)
                    }
                    if (obj>=58){
                        me.star58.setVisible(true)
                    }
                    if (obj>=59){
                        me.star59.setVisible(true)
                    }
                    if (obj>=60){
                        me.star60.setVisible(true)
                    }
                    if (obj>=61){
                        me.star61.setVisible(true)
                    }
                    if (obj>=62){
                        me.star62.setVisible(true)
                    }
                    if (obj>=63){
                        me.star63.setVisible(true)
                    }
                    if (obj>=64){
                        me.star64.setVisible(true)
                    }
                    if (obj>=65){
                        me.star65.setVisible(true)
                    }
                    if (obj>=66){
                        me.star66.setVisible(true)
                    }
                    if (obj>=67){
                        me.star67.setVisible(true)
                    }
                    if (obj>=68){
                        me.star68.setVisible(true)
                    }
                    if (obj>=69){
                        me.star69.setVisible(true)
                    }
                    if (obj>=70){
                        me.star70.setVisible(true)
                    }
                    if (obj>=71){
                        me.star71.setVisible(true)
                    }
                    if (obj>=72){
                        me.star72.setVisible(true)
                    }
                    if (obj>=73){
                        me.star73.setVisible(true)
                    }
                    if (obj>=74){
                        me.star74.setVisible(true)
                    }
                    if (obj>=75){
                        me.star75.setVisible(true)
                    }
                    if (obj>=76){
                        me.star76.setVisible(true)
                    }
                    if (obj>=76){
                        me.star76.setVisible(true)
                    }
                    if (obj>=77){
                        me.star77.setVisible(true)
                    }
                    if (obj>=78){
                        me.star78.setVisible(true)
                    }
                    if (obj>=79){
                        me.star79.setVisible(true)
                    }
                    if (obj>=80){
                        me.star80.setVisible(true)
                    }
                    if (obj>=81){
                        me.star81.setVisible(true)
                    }
                    if (obj>=82){
                        me.star82.setVisible(true)
                    }
                    if (obj>=83){
                        me.star83.setVisible(true)
                    }
                    if (obj>=84){
                        me.star84.setVisible(true)
                    }
                    if (obj>=85){
                        me.star85.setVisible(true)
                    }
                    if (obj>=86){
                        me.star86.setVisible(true)
                    }
                    if (obj>=87){
                        me.star87.setVisible(true)
                    }
                    if (obj>=88){
                        me.star88.setVisible(true)
                    }
                    if (obj>=89){
                        me.star89.setVisible(true)
                    }
                    if (obj>=90){
                        me.star90.setVisible(true)
                    }
                    if (obj>=91){
                        me.star91.setVisible(true)
                    }

                    obj += 1;
                    console.log(obj)
                    break

                case Phaser.Input.Keyboard.KeyCodes.J:
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
                        me.planet7.setVisible(true)
                    }
                    if (planet>=8){
                        me.planet8.setVisible(true)
                    }
                    if (planet>=9){
                        me.planet9.setVisible(true)
                    }

                    planet += 1;
                    console.log("planet")
                    console.log(planet)
                    break;
                case Phaser.Input.Keyboard.KeyCodes.K:
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
                        me.planet7.setVisible(true)
                    }
                    if (planet>=8){
                        me.planet8.setVisible(true)
                    }
                    if (planet>=9){
                        me.planet9.setVisible(true)
                    }

                    planet += 1;
                    console.log("planet")
                    console.log(planet)
                    break;
                case Phaser.Input.Keyboard.KeyCodes.L:
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
                        me.planet7.setVisible(true)
                    }
                    if (planet>=8){
                        me.planet8.setVisible(true)
                    }
                    if (planet>=9){
                        me.planet9.setVisible(true)
                    }

                    planet += 1;
                    console.log("planet")
                    console.log(planet)
                    break;
                case Phaser.Input.Keyboard.KeyCodes.M:
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
                        me.planet7.setVisible(true)
                    }
                    if (planet>=8){
                        me.planet8.setVisible(true)
                    }
                    if (planet>=9){
                        me.planet9.setVisible(true)
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

        /**   créattion cloud   */

        this.cloud1=this.add.image(0,-150,'cloud-1').setOrigin(0,0);
        this.cloud1.setVisible(false)
        /**this.cloud1.setRandomPosition(0,2)*/
        this.cloud1.scale=1;
        this.cloud1.opacity = 0.5;
        this.cloud1.angle=80+Math.random()*-50;


        this.cloud2=this.add.image(900,400,'cloud-2').setOrigin(0,0);
        this.cloud2.setVisible(false)
        this.cloud2.scale=2;
        this.cloud2.angle=(Math.random()*30)+20;
      /*  this.cloud2.flipX;*/

        this.cloud3=this.add.image(800, 150,'cloud-3').setOrigin(0,0);
        this.cloud3.setVisible(false)
        this.cloud3.scale=1.5;
        this.cloud3.angle=-60+Math.random()*-40;


        this.cloud4=this.add.image(-150,650,'cloud-4').setOrigin(0,0);
        this.cloud4.setVisible(false)
        this.cloud4.scale=1;
        this.cloud4.angle=-20+Math.random()*-30;

        this.cloud5=this.add.image(800-Math.random()*200,-200,'cloud-5').setOrigin(0,0);
        this.cloud5.setVisible(false)
        this.cloud5.scale=1+Math.random()*0.5;
        this.cloud5.flipX= true;
        this.cloud5.angle=90-Math.random()*10;


        this.cloud6=this.add.image(400+Math.random()*200,600,'cloud-6').setOrigin(0,0);
        this.cloud6.setVisible(false)
        this.cloud6.scale=1.5;
        this.cloud6.angle=90+Math.random()*20;

        this.cloud7=this.add.image(900,150+Math.random()*100,'cloud-7').setOrigin(0,0);
        this.cloud7.setVisible(false)
        this.cloud7.scale=1;
        this.cloud7.angle=Math.random()*-20;

        this.cloud8=this.add.image(-150,-200+Math.random()*500,'cloud-8').setOrigin(0,0);
        this.cloud8.setVisible(false)
        this.cloud8.flipY= true;
        this.cloud8.scale=1;
        this.cloud8.angle=Math.random()*5;



        /**création étoile*/
        this.star1=this.add.image(0,0,'star-1').setOrigin(0,0);
        this.star1.setVisible(false)
        this.star1.setRandomPosition(1,2)
        this.star1.scale=0.1;

        this.star2=this.add.image(0,0,'star-2').setOrigin(0,0);
        this.star2.setVisible(false)
        this.star2.setRandomPosition(1,2)
        this.star2.scale=0.1;

        this.star3=this.add.image(0,0,'star-3').setOrigin(0,0);
        this.star3.setVisible(false)
        this.star3.setRandomPosition(1,2)
        this.star3.scale=0.1;

        this.star4=this.add.image(0,0,'star-4').setOrigin(0,0);
        this.star4.setVisible(false)
        this.star4.setRandomPosition(1,2)
        this.star4.scale=0.1;

        this.star5=this.add.image(0,0,'star-5').setOrigin(0,0);
        this.star5.setVisible(false)
        this.star5.setRandomPosition(1,2)
        this.star5.scale=0.1;

        this.star6=this.add.image(0,0,'star-6').setOrigin(0,0);
        this.star6.setVisible(false)
        this.star6.setRandomPosition(1,2)
        this.star6.scale=0.1;

        this.star7=this.add.image(0,0,'star-7').setOrigin(0,0);
        this.star7.setVisible(false)
        this.star7.setRandomPosition(1,2)
        this.star7.scale=0.1;

        this.star8=this.add.image(0,0,'star-8').setOrigin(0,0);
        this.star8.setVisible(false)
        this.star8.setRandomPosition(1,2)
        this.star8.scale=0.1;

        this.star9=this.add.image(0,0,'star-9').setOrigin(0,0);
        this.star9.setVisible(false)
        this.star9.setRandomPosition(1,2)
        this.star9.scale=0.1;

        this.star10=this.add.image(0,0,'star-10').setOrigin(0,0);
        this.star10.setVisible(false)
        this.star10.setRandomPosition(1,2)
        this.star10.scale=0.1;

        this.star11=this.add.image(0,0,'star-11').setOrigin(0,0);
        this.star11.setVisible(false)
        this.star11.setRandomPosition(1,2)
        this.star11.scale=0.1;

        this.star12=this.add.image(0,0,'star-12').setOrigin(0,0);
        this.star12.setVisible(false)
        this.star12.setRandomPosition(1,2)
        this.star12.scale=0.1;

        this.star13=this.add.image(0,0,'star-13').setOrigin(0,0);
        this.star13.setVisible(false)
        this.star13.setRandomPosition(1,2)
        this.star13.scale=0.1;

        this.star14=this.add.image(0,0,'star-14').setOrigin(0,0);
        this.star14.setVisible(false)
        this.star14.setRandomPosition(1,2)
        this.star14.scale=0.1;

        this.star15=this.add.image(0,0,'star-15').setOrigin(0,0);
        this.star15.setVisible(false)
        this.star15.setRandomPosition(1,2)
        this.star15.scale=0.1;

        this.star16=this.add.image(0,0,'star-16').setOrigin(0,0);
        this.star16.setVisible(false)
        this.star16.setRandomPosition(1,2)
        this.star16.scale=0.1;

        this.star17=this.add.image(0,0,'star-17').setOrigin(0,0);
        this.star17.setVisible(false)
        this.star17.setRandomPosition(1,2)
        this.star17.scale=0.1;

        this.star18=this.add.image(0,0,'star-18').setOrigin(0,0);
        this.star18.setVisible(false)
        this.star18.setRandomPosition(1,2)
        this.star18.scale=0.1;

        this.star19=this.add.image(0,0,'star-19').setOrigin(0,0);
        this.star19.setVisible(false)
        this.star19.setRandomPosition(1,2)
        this.star19.scale=0.1;

        this.star20=this.add.image(0,0,'star-20').setOrigin(0,0);
        this.star20.setVisible(false)
        this.star20.setRandomPosition(1,2)
        this.star20.scale=0.1;

        this.star21=this.add.image(0,0,'star-21').setOrigin(0,0);
        this.star21.setVisible(false)
        this.star21.setRandomPosition(1,2)
        this.star21.scale=0.1;

        this.star22=this.add.image(0,0,'star-22').setOrigin(0,0);
        this.star22.setVisible(false)
        this.star22.setRandomPosition(1,2)
        this.star22.scale=0.1;

        this.star23=this.add.image(0,0,'star-23').setOrigin(0,0);
        this.star23.setVisible(false)
        this.star23.setRandomPosition(1,2)
        this.star23.scale=0.1;


        this.star24=this.add.image(0,0,'star-24').setOrigin(0,0);
        this.star24.setVisible(false)
        this.star24.setRandomPosition(1,2)
        this.star24.scale=0.1;

        this.star25=this.add.image(0,0,'star-25').setOrigin(0,0);
        this.star25.setVisible(false)
        this.star25.setRandomPosition(1,2)
        this.star25.scale=0.1;

        this.star26=this.add.image(0,0,'star-26').setOrigin(0,0);
        this.star26.setVisible(false)
        this.star26.setRandomPosition(1,2)
        this.star26.scale=0.1;

        this.star27=this.add.image(0,0,'star-27').setOrigin(0,0);
        this.star27.setVisible(false)
        this.star27.setRandomPosition(1,2)
        this.star27.scale=0.1;

        this.star28=this.add.image(0,0,'star-28').setOrigin(0,0);
        this.star28.setVisible(false)
        this.star28.setRandomPosition(1,2)
        this.star28.scale=0.1;

        this.star29=this.add.image(0,0,'star-29').setOrigin(0,0);
        this.star29.setVisible(false)
        this.star29.setRandomPosition(1,2)
        this.star29.scale=0.1;

        this.star30=this.add.image(0,0,'star-30').setOrigin(0,0);
        this.star30.setVisible(false)
        this.star30.setRandomPosition(1,2)
        this.star30.scale=0.1;

        this.star31=this.add.image(0,0,'star-31').setOrigin(0,0);
        this.star31.setVisible(false)
        this.star31.setRandomPosition(1,2)
        this.star31.scale=0.1;

        this.star32=this.add.image(0,0,'star-32').setOrigin(0,0);
        this.star32.setVisible(false)
        this.star32.setRandomPosition(1,2)
        this.star32.scale=0.1;

        this.star33=this.add.image(0,0,'star-33').setOrigin(0,0);
        this.star33.setVisible(false)
        this.star33.setRandomPosition(1,2)
        this.star33.scale=0.1;

        this.star34=this.add.image(0,0,'star-34').setOrigin(0,0);
        this.star34.setVisible(false)
        this.star34.setRandomPosition(1,2)
        this.star34.scale=0.1;

        this.star35=this.add.image(0,0,'star-35').setOrigin(0,0);
        this.star35.setVisible(false)
        this.star35.setRandomPosition(1,2)
        this.star35.scale=0.1;

        this.star36=this.add.image(0,0,'star-36').setOrigin(0,0);
        this.star36.setVisible(false)
        this.star36.setRandomPosition(1,2)
        this.star36.scale=0.1;

        this.star37=this.add.image(0,0,'star-37').setOrigin(0,0);
        this.star37.setVisible(false)
        this.star37.setRandomPosition(1,2)
        this.star37.scale=0.1;

        this.star38=this.add.image(0,0,'star-38').setOrigin(0,0);
        this.star38.setVisible(false)
        this.star38.setRandomPosition(1,2)
        this.star38.scale=0.1;

        this.star38=this.add.image(0,0,'star-39').setOrigin(0,0);
        this.star38.setVisible(false)
        this.star38.setRandomPosition(1,2)
        this.star38.scale=0.1;

        this.star39=this.add.image(0,0,'star-40').setOrigin(0,0);
        this.star39.setVisible(false)
        this.star39.setRandomPosition(1,2)
        this.star39.scale=0.1;

        this.star40=this.add.image(0,0,'star-41').setOrigin(0,0);
        this.star40.setVisible(false)
        this.star40.setRandomPosition(1,2)
        this.star40.scale=0.1;

        this.star41=this.add.image(0,0,'star-42').setOrigin(0,0);
        this.star41.setVisible(false)
        this.star41.setRandomPosition(1,2)
        this.star41.scale=0.1;

        this.star42=this.add.image(0,0,'star-43').setOrigin(0,0);
        this.star42.setVisible(false)
        this.star42.setRandomPosition(1,2)
        this.star42.scale=0.1;

        this.star43=this.add.image(0,0,'star-44').setOrigin(0,0);
        this.star43.setVisible(false)
        this.star43.setRandomPosition(1,2)
        this.star43.scale=0.1;

        this.star44=this.add.image(0,0,'star-45').setOrigin(0,0);
        this.star44.setVisible(false)
        this.star44.setRandomPosition(1,2)
        this.star44.scale=0.1;

        this.star45=this.add.image(0,0,'star-46').setOrigin(0,0);
        this.star45.setVisible(false)
        this.star45.setRandomPosition(1,2)
        this.star45.scale=0.1;

        this.star46=this.add.image(0,0,'star-1').setOrigin(0,0);
        this.star46.setVisible(false)
        this.star46.setRandomPosition(1,2)
        this.star46.scale=0.01;

        this.star47=this.add.image(0,0,'star-2').setOrigin(0,0);
        this.star47.setVisible(false)
        this.star47.setRandomPosition(1,2)
        this.star47.scale=0.01;

        this.star48=this.add.image(0,0,'star-3').setOrigin(0,0);
        this.star48.setVisible(false)
        this.star48.setRandomPosition(1,2)
        this.star48.scale=0.01;

        this.star49=this.add.image(0,0,'star-4').setOrigin(0,0);
        this.star49.setVisible(false)
        this.star49.setRandomPosition(1,2)
        this.star49.scale=0.01;

        this.star50=this.add.image(0,0,'star-5').setOrigin(0,0);
        this.star50.setVisible(false)
        this.star50.setRandomPosition(1,2)
        this.star50.scale=0.01;

        this.star51=this.add.image(0,0,'star-6').setOrigin(0,0);
        this.star51.setVisible(false)
        this.star51.setRandomPosition(1,2)
        this.star51.scale=0.01;

        this.star52=this.add.image(0,0,'star-7').setOrigin(0,0);
        this.star52.setVisible(false)
        this.star52.setRandomPosition(1,2)
        this.star52.scale=0.01;

        this.star53=this.add.image(0,0,'star-8').setOrigin(0,0);
        this.star53.setVisible(false)
        this.star53.setRandomPosition(1,2)
        this.star53.scale=0.01;

        this.star54=this.add.image(0,0,'star-9').setOrigin(0,0);
        this.star54.setVisible(false)
        this.star54.setRandomPosition(1,2)
        this.star54.scale=0.01;

        this.star55=this.add.image(0,0,'star-10').setOrigin(0,0);
        this.star55.setVisible(false)
        this.star55.setRandomPosition(1,2)
        this.star55.scale=0.01;

        this.star56=this.add.image(0,0,'star-11').setOrigin(0,0);
        this.star56.setVisible(false)
        this.star56.setRandomPosition(1,2)
        this.star56.scale=0.01;

        this.star57=this.add.image(0,0,'star-12').setOrigin(0,0);
        this.star57.setVisible(false)
        this.star57.setRandomPosition(1,2)
        this.star57.scale=0.01;

        this.star58=this.add.image(0,0,'star-13').setOrigin(0,0);
        this.star58.setVisible(false)
        this.star58.setRandomPosition(1,2)
        this.star58.scale=0.01;

        this.star59=this.add.image(0,0,'star-14').setOrigin(0,0);
        this.star59.setVisible(false)
        this.star59.setRandomPosition(1,2)
        this.star59.scale=0.01;

        this.star60=this.add.image(0,0,'star-15').setOrigin(0,0);
        this.star60.setVisible(false)
        this.star60.setRandomPosition(1,2)
        this.star60.scale=0.01;

        this.star61=this.add.image(0,0,'star-16').setOrigin(0,0);
        this.star61.setVisible(false)
        this.star61.setRandomPosition(1,2)
        this.star61.scale=0.01;

        this.star62=this.add.image(0,0,'star-17').setOrigin(0,0);
        this.star62.setVisible(false)
        this.star62.setRandomPosition(1,2)
        this.star62.scale=0.01;

        this.star63=this.add.image(0,0,'star-18').setOrigin(0,0);
        this.star63.setVisible(false)
        this.star63.setRandomPosition(1,2)
        this.star63.scale=0.01;

        this.star64=this.add.image(0,0,'star-19').setOrigin(0,0);
        this.star64.setVisible(false)
        this.star64.setRandomPosition(1,2)
        this.star64.scale=0.01;

        this.star65=this.add.image(0,0,'star-20').setOrigin(0,0);
        this.star65.setVisible(false)
        this.star65.setRandomPosition(1,2)
        this.star65.scale=0.01;

        this.star66=this.add.image(0,0,'star-21').setOrigin(0,0);
        this.star66.setVisible(false)
        this.star66.setRandomPosition(1,2)
        this.star66.scale=0.01;

        this.star67=this.add.image(0,0,'star-22').setOrigin(0,0);
        this.star67.setVisible(false)
        this.star67.setRandomPosition(1,2)
        this.star67.scale=0.01;

        this.star68=this.add.image(0,0,'star-23').setOrigin(0,0);
        this.star68.setVisible(false)
        this.star68.setRandomPosition(1,2)
        this.star68.scale=0.01;


        this.star69=this.add.image(0,0,'star-24').setOrigin(0,0);
        this.star69.setVisible(false)
        this.star69.setRandomPosition(1,2)
        this.star69.scale=0.01;

        this.star70=this.add.image(0,0,'star-25').setOrigin(0,0);
        this.star70.setVisible(false)
        this.star70.setRandomPosition(1,2)
        this.star70.scale=0.01;

        this.star71=this.add.image(0,0,'star-26').setOrigin(0,0);
        this.star71.setVisible(false)
        this.star71.setRandomPosition(1,2)
        this.star71.scale=0.01;

        this.star72=this.add.image(0,0,'star-27').setOrigin(0,0);
        this.star72.setVisible(false)
        this.star72.setRandomPosition(1,2)
        this.star72.scale=0.01;

        this.star73=this.add.image(0,0,'star-28').setOrigin(0,0);
        this.star73.setVisible(false)
        this.star73.setRandomPosition(1,2)
        this.star73.scale=0.01;

        this.star74=this.add.image(0,0,'star-29').setOrigin(0,0);
        this.star74.setVisible(false)
        this.star74.setRandomPosition(1,2)
        this.star74.scale=0.01;

        this.star75=this.add.image(0,0,'star-30').setOrigin(0,0);
        this.star75.setVisible(false)
        this.star75.setRandomPosition(1,2)
        this.star75.scale=0.01;

        this.star76=this.add.image(0,0,'star-31').setOrigin(0,0);
        this.star76.setVisible(false)
        this.star76.setRandomPosition(1,2)
        this.star76.scale=0.01;

        this.star77=this.add.image(0,0,'star-32').setOrigin(0,0);
        this.star77.setVisible(false)
        this.star77.setRandomPosition(1,2)
        this.star77.scale=0.01;

        this.star78=this.add.image(0,0,'star-33').setOrigin(0,0);
        this.star78.setVisible(false)
        this.star78.setRandomPosition(1,2)
        this.star78.scale=0.01;

        this.star79=this.add.image(0,0,'star-34').setOrigin(0,0);
        this.star79.setVisible(false)
        this.star79.setRandomPosition(1,2)
        this.star79.scale=0.01;

        this.star80=this.add.image(0,0,'star-35').setOrigin(0,0);
        this.star80.setVisible(false)
        this.star80.setRandomPosition(1,2)
        this.star80.scale=0.01;

        this.star81=this.add.image(0,0,'star-36').setOrigin(0,0);
        this.star81.setVisible(false)
        this.star81.setRandomPosition(1,2)
        this.star81.scale=0.01;

        this.star82=this.add.image(0,0,'star-37').setOrigin(0,0);
        this.star82.setVisible(false)
        this.star82.setRandomPosition(10,10)
        this.star82.scale=0.01;

        this.star83=this.add.image(0,0,'star-38').setOrigin(0,0);
        this.star83.setVisible(false)
        this.star83.setRandomPosition(10,10)
        this.star83.scale=0.01;

        this.star84=this.add.image(0,0,'star-39').setOrigin(0,0);
        this.star84.setVisible(false)
        this.star84.setRandomPosition(10,10)
        this.star84.scale=0.01;

        this.star85=this.add.image(0,0,'star-40').setOrigin(0,0);
        this.star85.setVisible(false)
        this.star85.setRandomPosition(10,10)
        this.star85.scale=0.01;

        this.star86=this.add.image(0,0,'star-41').setOrigin(0,0);
        this.star86.setVisible(false)
        this.star86.setRandomPosition(10,10)
        this.star86.scale=0.01;

        this.star87=this.add.image(0,0,'star-42').setOrigin(0,0);
        this.star87.setVisible(false)
        this.star87.setRandomPosition(10,10)
        this.star87.scale=0.01;

        this.star88=this.add.image(0,0,'star-43').setOrigin(0,0);
        this.star88.setVisible(false)
        this.star88.setRandomPosition(10,10)
        this.star88.scale=0.01;

        this.star89=this.add.image(0,0,'star-44').setOrigin(0,0);
        this.star89.setVisible(false)
        this.star89.setRandomPosition(10,10)
        this.star89.scale=0.01;

        this.star90=this.add.image(0,0,'star-45').setOrigin(0,0);
        this.star90.setVisible(false)
        this.star90.setRandomPosition(10,10)
        this.star90.scale=0.01;

        this.star91=this.add.image(0,0,'star-46').setOrigin(0,0);
        this.star91.setVisible(false)
        this.star91.setRandomPosition(10,10)
        this.star91.scale=0.01;


        /**création planet*/
        let n = 0;
        while (n<360) {
            n++;
        }

        this.planet1=this.add.image(0,0,'planet-1').setOrigin(0,0);
        this.planet1.setVisible(false)
        this.planet1.setRandomPosition(1,2)
        this.planet1.scale=Math.random()*2;
      

        this.tweens.add({
            targets: this.planet1,
            x: Math.random()*1000,
            y: Math.random()*1000,
            duration: 100000,
            ease: 'cricle',
            yoyo: true,
            repeat: -1,
            delay: 1000,
            flipX: true
        });
        this.planet2=this.add.image(0,0,'planet-2').setOrigin(0,0);
        this.planet2.setVisible(false)
        this.planet2.setRandomPosition(1,2)
        this.planet2.scale=Math.random()*2;
        this.planet2.flipX=true;
        this.tweens.add({
            targets: this.planet2,
            x: Math.random()*1000,
            y: Math.random()*1000,
            duration: 100000+Math.random()*10000,
            ease: 'circle',
            yoyo: true,
            repeat: -1,
            delay: 1000,
            flipX: false
        });

        this.planet3=this.add.image(0,0,'planet-3').setOrigin(0,0);
        this.planet3.setVisible(false)
        this.planet3.setRandomPosition(1,2)
        this.planet3.scale=Math.random()*2;
        this.tweens.add({
            targets: this.planet3,
            x: Math.random()*1000,
            y: Math.random()*1000,
            duration: 100000+Math.random()*10000,
            ease: 'circle',
            yoyo: true,
            repeat: -1,
            delay: 1000,
            flipX: false
        });

        this.planet4=this.add.image(0,0,'planet-4').setOrigin(0,0);
        this.planet4.setVisible(false)
        this.planet4.setRandomPosition(1,2)
        this.planet4.scale=Math.random()*2;
        this.planet4.flipX=true;
        this.tweens.add({
            targets: this.planet4,
            x: Math.random()*1000,
            y: Math.random()*1000,
            duration: 100000+Math.random()*10000,
            ease: 'linear',
            yoyo: true,
            repeat: -1,
            delay: 1000,
            flipX: false
        });


        this.planet5=this.add.image(0,0,'planet-5').setOrigin(0,0);
        this.planet5.setVisible(true)
        this.planet5.setRandomPosition(1,2)
        this.planet5.scale=Math.random()*2;
        this.tweens.add({
            targets: this.planet5,
            x: Math.random()*1000,
            y: Math.random()*1000,
            duration: 100000+Math.random()*10000,
            ease: 'linear',
            yoyo: true,
            repeat: -1,
            delay: 1000,
            flipX: false
        });


        this.planet6=this.add.image(0,0,'planet-6').setOrigin(0,0);
        this.planet6.setVisible(false)
        this.planet6.setRandomPosition(1,2)
        this.planet6.scale=Math.random()*2;
        this.tweens.add({
            targets: this.planet6,
            x: Math.random()*1000,
            y: Math.random()*1000,
            duration: 100000+Math.random()*10000,
            ease: 'linear',
            yoyo: true,
            repeat: -1,
            delay: 1000,
            flipX: false
        });


        this.planet7=this.add.image(0,0,'planet-7').setOrigin(0,0);
        this.planet7.setVisible(false)
        this.planet7.setRandomPosition(1,2)
        this.planet7.scale=Math.random()*2;
        this.tweens.add({
            targets: this.planet7,
            x: Math.random()*1000,
            y: Math.random()*1000,
            duration: 100000+Math.random()*10000,
            ease: 'linear',
            yoyo: true,
            repeat: -1,
            delay: 1000,
            flipX: false
        });


        this.planet8=this.add.image(0,0,'planet-8').setOrigin(0,0);
        this.planet8.setVisible(false)
        this.planet8.setRandomPosition(1,2)
        this.planet8.scale=Math.random()*2;
        this.tweens.add({
            targets: this.planet8,
            x: Math.random()*2000,
            y: Math.random()*2000,
            duration: 100000+Math.random()*10000,
            ease: 'linear',
            yoyo: true,
            repeat: -1,
            delay: 1000,
            flipX: false
        });


        this.planet9=this.add.image(0,0,'planet-9').setOrigin(0,0);
        this.planet9.setVisible(false)
        this.planet9.setRandomPosition(1,2)
        this.planet9.scale=Math.random()*2;
        this.tweens.add({
            targets: this.planet9,
            x: Math.random()*2000,
            y: Math.random()*2000,
            duration: 100000+Math.random()*10000,
            ease: 'linear',
            yoyo: true,
            repeat: -1,
            delay: 1000,
            flipX: false
        });
        /**création trou noir*/

        /**création super nova*/

        /**création astéroid*/

        /**création fusé*/


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