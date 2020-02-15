//End Scene extends Scene Class
var width = 900; 
var height = 600; 
class EndScene extends Phaser.Scene{
  constructor(){
  super({key:'EndScene', active: true}); 
  }
  
  // Loads BG image 
  preload(){
    this.load.image('mountainBG','./assets/Title/sampleBG.jpg');
    //this.load.image('sky','./assets/sky.png');
  }

  create(){
    let bg = this.add.sprite(0, 0, 'mountainBG');
    bg.setOrigin(0, 0);

    this.title_text = this.add.text(100, 200, "Hello, Title!");
  }
}

export default EndScene; 
console.log("Log: Entered EndScene.js");
