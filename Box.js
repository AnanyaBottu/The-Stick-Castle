class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'isStatic':true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rect(0,0,this.width,this.height);
        pop();
      }
}