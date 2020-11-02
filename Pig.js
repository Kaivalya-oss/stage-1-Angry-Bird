class Pig{

    constructor(x,y){
        this.w=50;
        this.h=50;
        
        var Options={
            restitution: 0.8,
            friction: 0.3,
            density:1.0
        }

        this.box = Bodies.rectangle(x,y,50,50,Options); 
        World.add(world,this.box);
        
    }

    show(){
        var pos=this.box.position
        var angle=this.box.angle
        
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill("yellow");        
        rectMode(CENTER)
        rect(0,0,this.w,this.h);
        pop()
    }

}
