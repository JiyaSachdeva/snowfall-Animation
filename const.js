class Rope {
    constructor (bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB: pointB,
            stiffness:0.04,
            length:10

        }

        this.rope = Constraint.create(options);
        
        this.pointB = pointB;
        World.add(world,this.rope);

    }

        fly(){
        this.rope.bodyA = null;
    }

    attach(body){
        this.rope.bodyA = body;
    }

    display(){
        if(this.rope.bodyA){
        push();
        var posA= this.rope.bodyA.position;
        var posB =this.pointB;
        strokeWeight (0);
        fill("yellow")
        line (posA.x,posA.y,posB.x,posB.y);
        pop();
    }
}
}