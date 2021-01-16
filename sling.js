class Sling{
    constructor(body1, point2){
        var options = {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.005,
            length: 1
        }
        this.sling = Constraint.create(options);
        this.pointB = point2;
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
    fly()
    {
        this.sling.bodyA = null;
    }

    attach()
    {
        this.bodyA = body1;
    }
}