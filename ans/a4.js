(function () {
    var tmp = [{
        x:1,
        y:2,
        z:3
    },{
        x:6,
        y:-2,
        z:-3
    },{
        x:0,
        y:0,
        z:5
    }];
    return tmp.some(function(o,i){
        return Math.sqrt(o.x*o.x+o.y*o.y+o.z*o.z) == Distance(o);
    })
})()