class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image= loadImage("Tower-Siege-2-TemplateM-main/block.png");
      this.visibility=250
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      rectMode(CENTER);
      if(this.speed<3){
        rect(pos.x,pos.y,this.width, this.height);
      }
      else{
        push();
        this.visibility=this.visibility-5;
        World.remove(world,this.body);
        tint(250,this.visiblility);
        this.image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
      }
     }
    }