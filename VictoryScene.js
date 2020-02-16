//Victory Scene extends Scene Class
var width = 900; 
var height = 600; 

class VictoryScene extends Phaser.Scene{
  constructor(){
  super({key:'victoryScene'}); 
  }

  // Loads BG image 
  preload(){
    this.load.image('CCbg','./assets/ClimbeyClimb.png');
    this.load.image('victory','./assets/victory.png');
  }

  create(){
    let bg = this.add.sprite(0, 230,'CCbg');
    let victory = this.add.sprite(width/6, 140, 'game_over_msg');
    bg.setOrigin(0, 0);
    victory.setOrigin(0, 0);

    //Restart button
    const victory_Button = this.add.text(width/3, height-350, 'victory', { fill: '#000' })
    .setInteractive()
    .on('pointerdown', () => { this.scene.start("titleScene")});
  }

}

export default EndScene; 
console.log("Log: Entered VictoryScene.js");