(function () {
    function _Replacer(fn, obj) {
        for (var d in obj) {
            obj[d] = fn(obj[d])
        }
    }

    var obj = {
        a: 5,
        b: 7,
        c: "ぞば"
    }
    var obj2 = JSON.parse(JSON.stringify(obj));

    var f = function(r){return r+1}

    _Replacer(f,obj);
    Replacer(f,obj2);

    return JSON.stringify(obj) == JSON.stringify(obj2);
})()