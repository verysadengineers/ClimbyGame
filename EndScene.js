//End Scene extends Scene Class
var width = 900; 
var height = 600; 
class EndScene extends Phaser.Scene{
  constructor(){
  super({key:'endScene'}); 
  }
  
  // Loads BG image 
  preload(){
    this.load.image('CCbg','./assets/ClimbeyClimb.png');
    this.load.image('bgColor', './assets/Title/bg_c.png');
    this.load.image('game_over_msg','./assets/Title/Game_over.png');
  }

  create(){
    let bg_color = this.add.sprite(0, 0, 'bgColor');
    let bg = this.add.sprite(0, 230,'CCbg');
    let msg = this.add.sprite(width/6, 140, 'game_over_msg');
    bg.setOrigin(0, 0);
    msg.setOrigin(0, 0);
    bg_color.setOrigin(0,0);
    bg.width = width/2; 
    bg.height = height/2;

    //Restart button
    const Restart_Button = this.add.text(width/3, height-350, 'Restart', { fill: '#000' })
    .setInteractive()
    .on('pointerdown', () => { this.scene.start("victoryScene")});
  }
}

export default EndScene; 
console.log("Log: Entered EndScene.js");
