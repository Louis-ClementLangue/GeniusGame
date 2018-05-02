//Pour le joueur
var louis;
var cursors;

//Pour les objets
var spriteStorage = [];
var stateStorage = [];
var flipFlop = [];

//Pour les murs
var wallStorage = [];

var Level1 = {

  preload: function (){
    Whattoload();
  },

  create : function() {
    //Definition du monde
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.world.setBounds(0, 0, 2000, 1500);

    //Creation de la map
    MapGen.couloir.create();
    MapGen.bureau.create();
    MapGen.salledebain.create();
    MapGen.cuisine.create();
    MapGen.chambre.create();
    MapGen.salon.create();
    //Ajout du perso
    Perso.louis.create();


  },
  update : function (){
    //Update du perso
    Perso.louis.update();

    MapGen.couloir.update();
    MapGen.bureau.update();
    MapGen.salledebain.update();
    MapGen.cuisine.update();
    MapGen.chambre.update();
    MapGen.salon.update();

  },
  render :function() {
    //Debug
    //game.debug.cameraInfo(game.camera, 32, 32);
    //game.debug.body(spriteStorage[23]);

  }
}
