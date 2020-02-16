//Start Scene extends Scene Class
var width = 900; 
var height = 600; 
var clouds1; 
var clouds2
var value1 = Phaser.Math.Between(1,3);
var value2 = Phaser.Math.Between(1,3);

class TitleScene extends Phaser.Scene{
  constructor(){
  super({key:'titleScene'}); 
  }
  
  preload(){
    this.load.image('bgColor', './assets/Title/bg_c.png');
    this.load.image('CCbg','./assets/Title/bg.png');
    this.load.image('logo', './assets/Title/logo_o.png');
    this.load.spritesheet('clouds', './assets/Sprites/clouds100x100.png', {frameWidth: 100}, {frameHeight: 100});
  }

  create(){
    // sets BG and logo image
    let bg_color = this.add.sprite(0, 0, 'bgColor');
    
    // cloud animation     
    clouds1 = this.physics.add.group({key: 'clouds',
    repeat: 4, 
    setXY: {x: 10, y:70, stepX: 300, stepY: 0}
    });

    this.anims.create({
      key: 'move',
      repeat: -1,
      frameRate: 1,
      frames: this.anims.generateFrameNumbers('clouds', {start: 1, end: 3})
    });

    clouds1.children.iterate(clouds1 => {
      clouds1.play('move')
    })

    let bg = this.add.sprite(0, 230, 'CCbg');
    let logo = this.add.sprite(width/6, 140, 'logo');
    logo.setOrigin(0,0);
    bg.setOrigin(0, 0);
    bg_color.setOrigin(0,0);
    bg.width = width/2; 
    bg.height = height/2;

    // Click on text button to start 
    const Start_Button = this.add.text(width/3, height-350, 'Click to start!', { fill: '#000' })
    .setInteractive()
    .on('pointerdown', () => { this.scene.start("endScene")});    
  }
}

export default TitleScene; 
console.log("Log: Entered TitleScene.js");

