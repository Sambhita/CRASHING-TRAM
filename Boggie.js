class Boggie{
    constructor(x,y,width,height){
        var options ={ 
            isStatic: false,

        }
        
        this.body =  Bodies.rectangle(x,y,width,height,options);
        this.Image = loadImage("images/coach.png")
        World.add(world,this.body);
        this.width = width;
        Matter.Body.setMass(this.body,this.body.mass*5)
        this.height = height;
      }
      show()
      {

          imageMode(CENTER);
          image(this.Image,this.body.position.x, this.body.position.y,this.width, this.height);
      }
}