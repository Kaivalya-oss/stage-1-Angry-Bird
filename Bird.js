class Bird{

    constructor(x,y,w,h){
        this.w=w;
        this.h=h;
        
        var Options={
            restitution: 0.8,
            friction: 0.3,
            density:1.0
        }

        this.box = Bodies.rectangle(x,y,w,h,Options); 
        World.add(world,this.box);
        
    }

    show(){
        var pos=this.box.position
        var angle=this.box.angle
        pos.x = mouseX
        pos.y = mouseY
        
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill("red");        
        rectMode(CENTER)
        rect(0,0,this.w,this.h);
        pop()
    }

}
