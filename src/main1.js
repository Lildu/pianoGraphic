let gameConfig = {
    type: Phaser.AUTO,
    width: 1000,
    height: 700,
    backgroundColor: '#000000',
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: new Tableau1()
};
let game = new Phaser.Game(gameConfig);
