(function () {
    var tmp = [[5,7],[1,-2],[3,8]];
    var out = [   2 ,     3,   5,];
    return tmp.some(function(d,i){
        return out[i] == sa(...d);
    })
})()