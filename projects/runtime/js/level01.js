(function (window) {
    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:400},
                {type: 'sawblade',x:600,y:400},
                {type: 'sawblade',x:900,y:450},
                {type: 'sawblade',x:1400,y:430},
                {type: 'sawblade',x:1800,y:430},
                {type: 'sawblade',x:2300,y:430},
                {type: 'sawblade',x:3000,y:430},
                {type: 'teentower',x:1000, y:330},
                {type: 'teentower',x:1500, y:330},
                {type: 'teentower',x:2500, y:330},
                {type: 'teentower',x:3300, y:330},
                {type: 'teentower',x:4000, y:330},
                
            ]
        };

        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
        
        var createSawBlade = function(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            
            myObstacle.x = x;
            myObstacle.y = y;
            
            game.addGameItem(myObstacle);
            
            var obstacleImage = draw.bitmap('img/sawblade.png');
            myObstacle.addChild(obstacleImage);
            
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        }; 
        
        var createTeentower = function(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            
            myObstacle.x = x;
            myObstacle.y = y;
            
            game.addGameItem(myObstacle);
            
            var obstacleImage = draw.bitmap('img/tt.png');
            myObstacle.addChild(obstacleImage);
            
            obstacleImage.x = -5;
            obstacleImage.y = -5;
            
        };
        
        levelData.gameItems.forEach(function(item) {
            if (item.type === 'sawblade'){
                createSawBlade(item.x, item.y);
            }
        });
        
        levelData.gameItems.forEach(function(item) {
            if (item.type === 'teentower'){
                createTeentower(item.x, item.y);
            }
        });
        
        function createObstacle(radius,damage) {
            var gameItem = createGameItem('obstacle',radius);
            gameItem.velocityX = -2;
        
            gameItem.onPlayerCollision = function() {
                changeIntegrity(-damage);
            };
            return gameItem;
        }
        var enemy =  game.createGameItem('enemy',25);
            var redSquare = draw.rect(50,50,'red');
            redSquare.x = -25;              
            redSquare.y = -25;
            enemy.addChild(redSquare);
            
            enemy.x = 400;
            enemy.y = groundY-50;
            
            game.addGameItem(enemy);
            
            enemy.velocityX = - 1;
            enemy.rotationalVelocity = 10;
            
            enemy.onPlayerCollision = function() {
                console.log('The enemy has hit Halle');
                enemy.fadeOut();
            };
            
            game.changeIntegrity(-10);1
            
            enemy.onProjectileCollision = function() {
                console.log('Halle has hit the enemy');
                game.increaseScore(100);
                enemy.shrink();
            };
       function createEnemy(x,y){
           var enemy =  game.createGameItem('enemy',25);
            var redSquare = draw.rect(50,50,'red');
            redSquare.x = -25;              
            redSquare.y = -25;
            enemy.addChild(redSquare);
            
            enemy.x = 400;
            enemy.y = groundY-50;
            
            game.addGameItem(enemy);
            
            enemy.velocityX = - 1;
            enemy.rotationalVelocity = 10;
            
            enemy.onPlayerCollision = function() {
                console.log('The enemy has hit Halle');
                enemy.fadeOut();
            };
            
            game.changeIntegrity(-10);
            game.changeIntegrity(-5);
            game.changeIntegrity(-15);
            
            enemy.onProjectileCollision = function() {
                console.log('Halle has hit the enemy');
                game.increaseScore(100);
                enemy.shrink();
            
            createEnemy(400,groundY-50);
            createEnemy(800,groundY-50);
            createEnemy(1200,groundY-50);    
                
            };
            
            
       }
       
    };
})(window);
