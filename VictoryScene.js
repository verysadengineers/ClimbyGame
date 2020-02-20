//Victory Scene extends Scene Class
import * as Background from './background.js'

var width = 900; 
var height = 600; 

class VictoryScene extends Phaser.Scene{
  constructor(physics){
  super({key:'victoryScene', physics: physics})
  }

  // Loads BG image 
  preload(){
    Background.preload(this);
    this.load.image('victory_msg','./assets/Title/victory.png');
  }

  create(){
    Background.create(this);
    let victory_msg = this.add.sprite(width/6, 140, 'victory_msg');
    victory_msg.setOrigin(0, 0);
  
    //Title button
    const victory_Button = this.add.text(width/3, height-350, 'Back to Start', { fill: '#000' })
    .setInteractive()
    .on('pointerdown', () => { this.scene.start("titleScene")});
  }

}

export default VictoryScene; 
console.log("Log: Entered VictoryScene.js");