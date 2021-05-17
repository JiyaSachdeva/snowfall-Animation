class Snow {

    constructor(x,y){
    var options=  {
        frictionAir : 0.1,
        density: 1.0,
    }
    this.body = Bodies.circle(x,y,35,options);
    this.radius = 35;
    this.image = loadImage("snow4.webp");
    World.add(world,this.body);

    console.log(this.body);

}
spwanRain(){
    if(this.body.position.y > height){
        Matter.Body.setPosition(this.body, {x:random(0,800),y:random(0,400)})
    }
}
display(){

    push();
     var pos=this.body.position;
    
   // fill("blue");
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.radius, this.radius);
    pop();


}
}