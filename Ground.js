
class Ground {

    constructor (x,y,width,height) {

        var options = {

            isStatic:true

        }

        this.body   = bodies.rectangle (x,y,width,height,options);
        this.width  = width;
        this.height = height;
        world.add (myworld,this.body)

    }

    display () {

        var a = this.body.position;
        stroke ("yellow")
        fill (71,62,50);
        rectMode (CENTER);
        rect (a.x,a.y,this.width,this.height);

    }

}
