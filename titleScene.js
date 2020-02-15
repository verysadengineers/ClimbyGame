//Title Scene extends Scene Class
var width = 900; 
var height = 600; 
class TitleScene extends Phaser.Scene{
  constructor(){
  super({key:'TitleScene', active: true}); 
  }
  
  // Loads BG image 
  preload(){
    // this.load.image('mountainBG','./assets/Title/sampleBG.jpg');
    this.load.image('sky','./assets/sky.png');
  }

  create(){
    let bg = this.add.sprite(0, 0, 'sky');
    bg.setOrigin(0, 0);
    //this.title_text = this.add.text(100, 200, "Hello, Title!");

    // label for Start button
    start_label = this.add.text(width/2, height/2, 'Start', {font: '24px Arial', fill: '#fff'});
    start_label.inputEnabled = true;
    start_label.events.onInputUp.add(function (){
        //this.start = true;
    })
  }
}

export default TitleScene; 
console.log("Log: Entered titleScene.js");
