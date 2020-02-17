//Start Scene extends Scene Class
import * as Background from './background.js'

var width = 900; 
var height = 600; 
var bg_color; 
var bg; 
var clouds1;

class TitleScene extends Phaser.Scene{
  constructor(){
    super({key:'titleScene', active: true, 
    physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 0 }
        }, 
      },
    })
  }

  preload(){
    Background.preload(this);
    this.load.image('logo', './assets/Title/logo_o.png');
  }

  create(){
    Background.create(this);     

    let logo = this.add.sprite(width/6, 140, 'logo');
    logo.setOrigin(0,0);
    
    // Click on text button to start 
    const Start_Button = this.add.text(width/3, height-350, 'Click to start!', { fill: '#000' })
    .setInteractive()
    .on('pointerdown', () => { this.scene.start("gameScene")});  

  }
}

export default TitleScene; 
console.log("Log: Entered TitleScene.js");

