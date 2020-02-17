//End Scene extends Scene Class
import * as Background from './background.js'

var width = 900; 
var height = 600; 

class EndScene extends Phaser.Scene{
  constructor(){
  super({key:'endScene'})
  }
  
  // Loads BG image 
  preload(){
    Background.preload(this);
    this.load.image('game_over_msg','./assets/Title/Game_over.png');
  }

  create(){
    Background.create(this);
    let msg = this.add.sprite(width/6, 140, 'game_over_msg');
    msg.setOrigin(0, 0);

    //Restart button
    const Restart_Button = this.add.text(width/3, height-350, 'Back to Start', { fill: '#000' })
    .setInteractive()
    .on('pointerdown', () => { this.scene.start("victoryScene")});
  }
}

export default EndScene; 
console.log("Log: Entered EndScene.js");
