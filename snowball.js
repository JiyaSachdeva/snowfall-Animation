class Snowball {
    constructor(x,y,r){
        var options = {
            friction:0.5,
            density:0.5
        }

        this.body = Bodies.circle(x,y,r);
        this.x = x;
        this.y = y;
        this.r = r;
     this.image = loadImage("snowfall_image.jpg ")

        World.add(world,this.body);


    }

    display(){
        var pos = this.body.position;
        var angel = this.body.angel;
        push ()
        translate (pos.x,pos.y);
        rotate (angel);
imageMode(RADIUS)
image(this.image,0,0,this.r,this.r);

    }
}