
import Container = Phaser.GameObjects.Container;
import Rectangle = Phaser.GameObjects.Rectangle;


export class WarningContainer extends Container {
    private rec: Rectangle;
    //private text: BitmapText
    
    constructor(scene: Phaser.Scene) {
        super(scene, 0, 50);
        console.log(this.x, this.y)
        this.rec = new Rectangle(scene, 0, 0, 600, 100, 0xff0000);
        this.rec.setDepth(99999)
        //this.rec.setOrigin(0.5, 0.5);
        this.add(this.rec);

        
        this.scene.add.existing(this);
        console.log('done');
    }
    
}