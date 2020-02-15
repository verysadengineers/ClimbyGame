export function generateMap(gameScene){

  let tiles = gameScene.physics.add.staticGroup();
  let tileSize = 22;
  var x=20;
  var y=10;
  var n=x*y-1;
  	if (n<0) {alert("illegal maze dimensions");return;}
  	var horiz =[];
    var verti =[];
    for (j= 0; j<x+1; j++){
      horiz[j]= [];
    }
    for (j= 0; j<x+1; j++){
      verti[j]= []
    }
  	var here = [Math.floor(Math.random()*x), Math.floor(Math.random()*y)];
  	var path = [here];
  	var unvisited = [];
  	for (j = 0; j<x+2; j++){
  		unvisited[j] = [];
  	for (var k= 0; k<y+1; k++)
  			unvisited[j].push(j>0 && j<x+1 && k>0 && (j != here[0]+1 || k != here[1]+1));
  	}
  	while (0<n) {
  		var potential = [[here[0]+1, here[1]], [here[0],here[1]+1],
  		    [here[0]-1, here[1]], [here[0],here[1]-1]];
  		var neighbors = [];
  		for (var j = 0; j < 4; j++){
  			if (unvisited[potential[j][0]+1][potential[j][1]+1]){
  				neighbors.push(potential[j]);
        }
      }
  		if (neighbors.length) {
  			n = n-1;
  			var next = neighbors[Math.floor(Math.random()*neighbors.length)];
  			unvisited[next[0]+1][next[1]+1]= false;
  			if (next[0] == here[0]){
  				horiz[next[0]][(next[1]+here[1]-1)/2]= true;
        }
  			else{
  				verti[(next[0]+here[0]-1)/2][next[1]]= true;
        }
  			path.push(here = next);
  		} else
  			here = path.pop();
  	}

    for (j= 0; j<x*2+1; j++) {
    		var line= [];
    		if (0 == j%2)
    			for (k=0; k<y*4+1; k++)
    				if (0 == k%4)
    					tiles.create(j*tileSize, k*tileSize, 'tiles').setOrigin(0,0);
    				else
    					if (j>0 && verti[j/2-1][Math.floor(k/4)])
    					     console.log("path")
    					else
    						tiles.create(j*tileSize, k*tileSize, 'tiles').setOrigin(0,0);
    		else
    			for (k=0; k<y*4+1; k++)
    				if (0 == k%4)
    					if (k>0 && horiz[(j-1)/2][k/4-1])
    						console.log("path");
    					else
    						tiles.create(j*tileSize, k*tileSize, 'tiles').setOrigin(0,0);
    				else
    					console.log("path")
    		if (0 == j)
          console.log("path");
    		if (x*2-1 == j)
          console.log("path");
        }

  /*
  let tileSize = 30;

  let tiles = gameScene.physics.add.staticGroup();

  var mazeArray = []; // Initialize array
  for (var i = 0 ; i < 30; i++) {
      mazeArray[i] = []; // Initialize inner array
      for (var j = 0; j < 20; j++) {
          mazeArray[i][j] = Math.round(Math.random()); //generate a 0 or 1
      }
  }


  //display all tiles if value in array = 1
  for (var i = 0 ; i < 30; i++) {
      for (var j = 0; j < 20; j++) {
        if(mazeArray[i][j] == 1){
          tiles.create(i*tileSize, j*tileSize, 'tiles').setOrigin(0,0);
        }
      }
  }
  */



  return tiles;
}
