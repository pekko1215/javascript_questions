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
    return JSON.stringify(_Replacer(obj)) == JSON.stringify(Replacer(obj));
})()