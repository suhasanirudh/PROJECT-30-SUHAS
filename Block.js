class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visiblity = true;
      World.add(world, this.body);
    }
    display(){
      push ();
      var pos= this.body.position;
      if (this.body.speed < 3) {
        rect(pos.x,pos.y,this.width, this.height);
        rectMode(CENTER);
      }
      else {
        World.remove(world, this.body);
       
        this.Visibility = this.Visibility - 5;
        tint(255, this.Visibility);
        pop();
      }
    }
    }