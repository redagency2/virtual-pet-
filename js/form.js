class Form{
    constructor(){
         this.title = createElement("h2");
         this.input = createInput("name");
         this.button = createButton("PLAY");
         this.greeting = createElement("h3")
    }
    hide(){
        this.input.hide();
        this.greeting.hide();
        this.button.hide();
        this.title.hide();
    }
    display(){
        
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2-50,0);
        this.input.position(displayWidth/2-40,displayHeight/2-80)
        this.button.position(displayWidth/2+30,displayHeight/2);
        this.button.mousePressed( ()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount++;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello "+ player.name + ". You are player no. " + player.index + " out of 4");
            this.greeting.position(displayWidth/2-70,displayHeight/4);
        })
    }
}