(function () {
    var tmp = ["abcde",5,null];
    return tmp.some(function(d){
        return d == echo(d);
    })
})()