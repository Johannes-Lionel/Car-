class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      car1 = createSprite(100,200);
      car1.addImage(car1Image)
      car2 = createSprite(300,200);
      car2.addImage(car2Image)
      car3 = createSprite(500,200);
      car3.addImage(car3Image)
      car4 = createSprite(700,200);
      car4.addImage(car4Image)
      cars = [car1, car2, car3, car4];
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        background(0);
        image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5)
          var index = 0;
  
        var x = 175 ;
        var y;
  
        for(var plr in allPlayers){
               index = index + 1 ;
           x = x + 200;
           y = displayHeight - allPlayers[plr].distance;
          cars[index-1].x = x;
          cars[index-1].y = y;
  
          if (index === player.index){
            fill('blue')
            ellipse(x,y,100,100)
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y;
          }
         
            }
  
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
  
      if(player.distance>3680){
        gameState = 2
      }
     
      drawSprites();
    }
  
   end(){console.log('gameEnded')}
  }