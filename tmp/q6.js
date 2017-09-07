/*
引数を二つ取る、１つ目に関数取り、２つ目に連想配列をとる。
連想配列のkeyを、それぞれ1つ目の関数の引数に入れ実行し、戻り値を同じkeyに収納しなおす関数
Replacerを定義しよう。これは破壊的な関数である。
(破壊的な関数：引数の中身が変わってしまう関数)
例：
var obj = {
    a:5,
    b:7,
    c:"ぞば"
}
Replacer(function(data){return data+1},obj)
console.log(obj)
->
{
    a:6,
    b:8,
    c:"ぞば1"
}
 */