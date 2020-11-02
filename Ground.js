class Ground{
    constructor(x,y,w,h){
        this.w=w;
        this.h=h;
        
        var Options={
            isStatic:true,
            restitution: 0
        }

        this.ground = Bodies.rectangle(x,y,w,h,Options); 
        World.add(world,this.ground);
        
    }

    show(){
        var pos=this.ground.position
        var angle=this.ground.angle
        
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill("coral");        
        rectMode(CENTER)
        rect(0,0,this.w,this.h);
        pop()
    }

}


// PUSH - save the prev changes

//POP- remove the changes which were just applied

//TRANSLATE- is to tranlate your objects relative to the starting point of the canvas-->top left corner

// ANGLE--> rotation angle of the bodies

//ROTATE--> rotates the bodies
