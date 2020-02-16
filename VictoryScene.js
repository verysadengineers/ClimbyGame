//Victory Scene extends Scene Class
var width = 900; 
var height = 600; 

class VictoryScene extends Phaser.Scene{
  constructor(){
  super({key:'victoryScene'}); 
  }

  // Loads BG image 
  preload(){
    this.load.image('bgColor', './assets/Title/bg_c.png');
    this.load.image('CCbg','./assets/ClimbeyClimb.png');
    this.load.image('victory_msg','./assets/Title/victory.png');
  }

  create(){
    let bgColor = this.add.sprite(0, 0,'bgColor');
    let bg = this.add.sprite(0, 230,'CCbg');
    let victory_msg = this.add.sprite(width/6, 140, 'victory_msg');
    bg.setOrigin(0, 0);
    bgColor.setOrigin(0, 0);
    victory_msg.setOrigin(0, 0);
    bg.width = width/2; 
    bg.height = height/2;
  
    //Title button
    const victory_Button = this.add.text(width/3, height-350, 'victory', { fill: '#000' })
    .setInteractive()
    .on('pointerdown', () => { this.scene.start("titleScene")});
  }

}

export default VictoryScene; 
console.log("Log: Entered VictoryScene.js");