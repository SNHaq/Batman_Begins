class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true
        }

        this.image = loadImage("1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella);
    }

    showDrop(){
        var pos = this.umbrella.position;
        ellipseMode(CENTER);
        this.ellipse(this.image,pos.x,pos.y+70,300,300);
    }

}

