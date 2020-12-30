class Bob{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8,
            frictionAir:0.0,
            slop:1,
            inertia: Infinity


        }
        this.body=Bodies.rectangle(x,y,30,30,options);
        this.x=x
        this.y=y
        //this.r=r
        
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push ();
        translate(pos.x,pos.y+15)
        rotate (angle)
        ellipseMode(RADIUS)
        
        fill (255,0,255)
        ellipse(0,0,30,30)
        pop ();
    }
}