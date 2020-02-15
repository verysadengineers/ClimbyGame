//Start Scene extends Scene Class
// import EndScene from './EndScene.js';
var width = 900; 
var height = 600; 

class TitleScene extends Phaser.Scene{
  constructor(){
  super({key:'titleScene', active: true}); 
  }
  
  preload(){
    // Loads BG image 
    this.load.image('sky','./assets/sky.png');
  }

  create(){
    // sets BG image
    let bg = this.add.sprite(0, 0, 'sky');
    bg.setOrigin(0, 0);

    // creates Start button
    const start_Button = this.add.text(width/2, height-100, 'Click anyhere to start!', { fill: '#ff0' })
    .setInteractive()
    .on('pointerdown', () => {console.log("Log: Start button clicked")});
    this.input.on('pointerdown', () => this.scene.start("EndScene")); //should be main game.js key
  }

}
export default TitleScene; 
console.log("Log: Entered TitleScene.js");

