class Boy{
    constructor(x,y,width,height)
    {
        var options ={isStatic: true}
      
        this.body =  Bodies.rectangle(x,y,width,height,options);
        World.add(myWorld,this.body);

        this.width = width;
        this.height = height;
        
        this.Image = loadImage("boy.png");
      }
      show()
      {
          rectMode(CENTER);
        //rect(this.body.position.x, this.body.position.y,this.width, this.height);
          image(this.Image,this.body.position.x,this.body.position.y,this.width,this.height);
      }
}