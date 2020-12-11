class Form {

    constructor() {
     // this.input = createInput("Name");
      this.button = createButton('MultiPlayer');
      this.greeting = createElement('h2');
      this.title = createElement('h1');
     // this.reset = createButton('Reset');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("The Space Race");
      this.title.position(displayHeight/2 , 0);
  
     // this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2, displayHeight/2);
     // this.reset.position(displayWidth-100,20);
  
     this.button.mousePressed(()=>{
     //   this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
    
}
    
}  