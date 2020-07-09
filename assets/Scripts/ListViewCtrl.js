{var i =cc.Class({
    extends: cc.Component,

    properties: {
        itemTemplate: { // item template to instantiate other items
            default: null,
            type: cc.Node
        },
        scrollView: {
        	default: null,
        	type: cc.ScrollView
        },
        btnBack : cc.Node,
        leaderBoard: cc.Node,
    },

    // use this for initialization
    onLoad: function () {
    	this.content = this.scrollView.content;
        this.fbEntires = [];
        this.totalCount = 20;
        this.spacing = 3;
      //  this.initialize();
        this.updateLeaderBoard();
        this.retrieveScores();
        
      
    },

    initialize: function () {
        this.content.height = this.totalCount * (this.itemTemplate.height + this.spacing) + this.spacing; // get total content height
    	for (let i = 0; i < this.totalCount; ++i) { // spawn items, we only need to do this once
            let item = cc.instantiate(this.itemTemplate);
    		this.content.addChild(item);
    		item.setPosition(0, -item.height * (0.5 + i) - this.spacing * (i + 1));
    		item.getComponent('Item').initItem("1", "hiu","15");
    	}
    },
    addScores: function (level) {
        FBInstant
            .getLeaderboardAsync('LalaBalls')
            .then(leaderboard => {
                console.log(leaderboard.getName());
                return leaderboard.setScoreAsync(level);
            })
            .then(() => console.log('Score saved'))
            .catch(error => console.error(error));
    },

  
// show leader board
    retrieveScores: function () {
        this.content.height = this.totalCount * (this.itemTemplate.height + this.spacing) + this.spacing; 
        FBInstant
            .getLeaderboardAsync('LalaBalls')
            .then(leaderboard => leaderboard.getEntriesAsync(20, 0))
            .then(entries => {
                for (var i = 0; i < entries.length; i++) {
                    console.log( " Information player " +"\n"+
                        entries[i].getRank() + '. ' +
                        entries[i].getPlayer().getPhoto()+ " "+ 
                        entries[i].getPlayer().getName() + ': ' +
                        entries[i].getScore()
                    );
                    let item = cc.instantiate(this.itemTemplate);
                    this.content.addChild(item);
                    item.setPosition(-20, -item.height * (1 + i) - this.spacing * (i + 1));
                    item.getComponent('Item').initItem(entries[i].getRank(),this.showImage(item,  entries[i].getPlayer().getPhoto()),entries[i].getPlayer().getName(), entries[i].getScore());
                }
            }).catch(error => console.error(error));
    },

    // show image
    showImage:function(item,url){
        var spritNode2 = item.getChildByName('Image');
        cc.loader.load(url,function(err,texture){        
        var sp1 = spritNode2.getComponent(cc.Sprite);           
        var sFrame =new cc.SpriteFrame(texture,new cc.Rect(0,0,texture.width,texture.height),false,cc.Vec2.ZERO,new cc.Size(50,50));
        sp1.spriteFrame = sFrame;
          })
    },
    updateLeaderBoard: function () {
        FBInstant.updateAsync({
            action: 'LEADERBOARD',
            name: 'LalaBalls'
        })
            .then(() => console.log('Update Posted'))
            .catch(error => console.error(error));
    },

    clickBack:function(){
       this.leaderBoard.active=false;
    },

    
});
i._instance = null;
i.getInstance = function () {
    return i._instance || (i._instance = new i), i._instance
};
module.exports = i;
}

