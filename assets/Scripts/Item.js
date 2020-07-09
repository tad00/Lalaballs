cc.Class({
    extends: cc.Component,
 
    properties: {
        rankLbl: {
            default: null,
            type: cc.Label
        },

        imageIt : {
            default : null,
            type : cc.Sprite
        },
      
        nameLbl: {
            default: null,
            type: cc.Label
        },
        levelLbl: {
            default: null,
            type: cc.Label
        },
    },
    
    onLoad: function () {
    },
 
    initItem: function (rank ,image,name, level) {
        this.rankLbl.string = rank;
        this.imageIt=image;
        this.nameLbl.string = name;
        this.levelLbl.string = level;
    },
 
    updateItem: function (rank,name, level) {
        this.rankLbl.string = rank;
      //  this.imageIt=image;
        this.nameLbl.string = name;
        this.levelLbl.string = level;
    },
    // loadImage:function(url){
       
    //     var spritNode2 = cc.find("/Item/image");
    //     cc.loader.load(url,function(err,texture){        
    //     var sp1 = spritNode2.getComponent(cc.Sprite);           
    //     var sFrame =new cc.SpriteFrame(texture,new cc.Rect(0,0,texture.width,texture.height),false,cc.Vec2.ZERO,new cc.Size(50,50));
    //     sp1.spriteFrame = sFrame;
       
           
    //     })
    // },
  
});
 