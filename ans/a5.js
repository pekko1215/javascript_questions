/**
 * Created by pekko1215 on 2017/09/07.
 */
(function () {
    var tmp = ["a",4,"def",3,"dawda",8,"zoba","ぞば"];
    var obj = {
        a:4,
        def:3,
        dawda:8,
        zoba:"ぞば"

    }
    return JSON.stringify(obj) == JSON.stringify(parseObject(tmp));
})()