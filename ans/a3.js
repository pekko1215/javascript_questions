(function () {
    var tmp = [[5,7,5,6,7,8,3],[1,-2,1.4,5,6],[-6,-3.5,-1]];
    var out = [8,6,-1];
    return tmp.some(function(d,i){
        return out[i] == max(d);
    })
})()