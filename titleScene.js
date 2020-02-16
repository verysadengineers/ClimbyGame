//Start Scene extends Scene Class
var width = 900; 
var height = 600; 

class TitleScene extends Phaser.Scene{
  constructor(){
  super({key:'titleScene', active: true}); 
  }
  
  preload(){

    // Loads asset images
    this.load.image('CCbg','./assets/Title/bg.png');
    this.load.image('bgColor', './assets/Title/bg_color')
    this.load.image('logo', './assets/Title/logo_o.png');
    this.load.image('Startbutton', './assets/Title/Start.png')
  }

  create(){
    // sets BG and logo image
    let bg = this.add.sprite(0, 230, 'CCbg');
    let logo = this.add.sprite(width/6, 140, 'logo');
    // let bg_color = this.add.image(0, 0, 'bgColor');
    const startb = this.add.sprite(width/2, 270, "Startbutton");

    // this.add.button(0, 0, 'Startbutton', actionOnClick, this, 2, 1, 0);
    logo.setOrigin(0,0);
    bg.setOrigin(0, 0);
    bg.width = width/2; 
    bg.height = height/2;

    // start button functionality
    startb.setInteractive(); 
    this.input.on('pointerup', () => this.scene.start("endScene"));
  
    this.cursorKeys = this.input.keyboard.createCursorKeys;


  }
}

function actionOnClick(){
    console.log("Log: Start button clicked");
}

export default TitleScene; 
console.log("Log: Entered TitleScene.js");

