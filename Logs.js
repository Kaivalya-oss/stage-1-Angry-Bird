class Logs{
    constructor(x,y,h,angle){
        this.w=20;
        this.h=h;
        

        var Options={
            isStatic:false,
            restitution: 0,
            friction: 1,
            density:1.0
        }

        this.logs = Bodies.rectangle(x,y,20,h,Options); 
        Matter.Body.setAngle(this.logs,angle)
        World.add(world,this.logs);
        
    }

    show(){
        var pos=this.logs.position
        var angle=this.logs.angle
        
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill("wheatish");        
        rectMode(CENTER)
        rect(0,0,this.w,this.h);
        pop()
    }

}


