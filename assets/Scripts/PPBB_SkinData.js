{const o=exports;
const e=require;
Object.defineProperty(o,"__esModule",{value:!0});
    var i=e("PPBB_GameData"),
    n=function(){
        function e(){}
        return e.getBallSkin=function(e){
            return void 0===e&&(e=i.default.ballSkinId),
            this.BallColorsMap[e]
        },
        e.getBallColor=function(e){
            return"ball/"+this.getBallSkin(e).color.getRandomOne()
        },
        e.getBallGray=function(e){
            return"ball/"+this.getBallSkin(e).gray
        },
        e.getBallIcon=function(e){
            return"ball/"+this.getBallSkin(e).icon
        },
        e.checkUnlockNewBall=function(){
            var e=i.default.totalBalls;
            for(var t in this.BallColorsMap)if(!i.default.checkBallSkinUnlocked(Number(t))){
                var o=this.BallColorsMap[t].unlockTerm;
                0===o.id?e>=o.need&&i.default.unlockNewBallSkin(t):2===o.id&&i.default.getBallVideoTimes(t)>=o.need&&i.default.unlockNewBallSkin(t)
            }
        },
        e.getNextBallId=function(){
            for(var e=0,t=this.getProgressBallList();e<t.length;e++){
                var o=t[e];if(!i.default.checkBallSkinUnlocked(o))return o
            }
            return null
        },
        e.getProgressBallList=function(){if(null===this.progressBallList){
            for(var e in this.progressBallList=[],this.BallColorsMap)0===this.BallColorsMap[e].unlockTerm.id&&this.progressBallList.push(Number(e));
            return this.progressBallList}return this.progressBallList
        },
        e.checkUnlockNewCar=function(){
            var e=i.default.totalBalls;
            for(var t in this.CarsMap)if(!i.default.checkCarSkinUnlocked(Number(t))){
                var o=this.CarsMap[t].unlockTerm;0===o.id?e>=o.need&&i.default.unlockNewCarSkin(t):2===o.id&&i.default.getCarVideoTimes(t)>=o.need&&i.default.unlockNewCarSkin(t)
            }
        },
        e.getCarSkin=function(e){
            return void 0===e&&(e=i.default.carSkinId),this.CarsMap[e]
        },
        e.getCarIcon=function(e){
            return"car/"+this.getCarSkin(e).id
        },
        e.getProgressCarList=function(){
            if(null===this.progressCarList){
                for(var e in this.progressCarList=[],this.CarsMap)0===this.CarsMap[e].unlockTerm.id&&this.progressCarList.push(Number(e));
                return this.progressCarList
            }return this.progressCarList
        },
        e.getNextCarId=function(){
            for(var e=0,t=this.getProgressCarList();e<t.length;e++){
                var o=t[e];if(!i.default.checkCarSkinUnlocked(o))return o
            }
            return null
        },
        e.getMaxUnlockCarId=function(){
            for(var e=null,t=0,o=this.getProgressCarList();t<o.length;t++){
                var n=o[t];i.default.checkCarSkinUnlocked(n)&&(e=n)
            }return e
        },
        e.BallColorsMap={
            0:{gray:"a0",color:["a1","a2","a3","a4","a5"],
            icon:"ball1",unlockTerm:{id:0,need:0}},
            1:{gray:"b0",color:["b1","b2","b3","b4","b5"],
            icon:"ball2",unlockTerm:{id:0,need:250}},
            2:{gray:"c0",color:["c1","c2","c3","c4","c5"],
            icon:"ball3",unlockTerm:{id:0,need:500}},
            3:{gray:"d0",color:["d1","d2","d3","d4","d5"],
            icon:"ball4",unlockTerm:{id:0,need:1000}},
            4:{gray:"e0",color:["e1","e2","e3","e4","e5"],
            icon:"ball6",unlockTerm:{id:0,need:1500}},
            5:{gray:"a0",color:["f1"],
            icon:"ball7",unlockTerm:{id:0,need:2000}},
            6:{gray:"g0",color:["g1"],
            icon:"ball8",unlockTerm:{id:0,need:2500}},
            7:{gray:"a0",color:["h1"],
            icon:"ball9",unlockTerm:{id:2,need:1}},
            8:{gray:"i0",color:["i1","i2","i3","i4","i5"],
            icon:"ball5",unlockTerm:{id:2,need:3}}
        },
        e.CarsMap={0:{
            id:"car0",
            unlockTerm:{id:0,need:0}},
            1:{id:"car1",unlockTerm:{id:0,need:400}},
            2:{id:"car2",unlockTerm:{id:0,need:700}},
            3:{id:"car3",unlockTerm:{id:0,need:1250}},
            4:{id:"car4",unlockTerm:{id:0,need:1750}},
            5:{id:"car5",unlockTerm:{id:0,need:2250}},
            6:{id:"car6",unlockTerm:{id:2,need:1}}
        },
        e.progressBallList=null,
        e.progressCarList=null,e
    }();
    o.default=n
}