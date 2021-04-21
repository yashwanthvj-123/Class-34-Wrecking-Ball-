
class Ball {

    constructor (x,y,radius) {

        var options = {

            frictionAir:0.0003,
            density:1

        }

        this.body   = bodies.circle (x,y,radius,options);
        this.radius = radius;
        world.add (myworld,this.body);

    }

    display () {

        var a = this.body.position;
        push ();
        translate (a.x,a.y);
        rotate (this.body.angle);
        strokeWeight (1.9);
        stroke ("black")
        fill ("red");
        ellipseMode (RADIUS);
        ellipse (0,0,this.radius,this.radius);
        pop ();

    }

}
