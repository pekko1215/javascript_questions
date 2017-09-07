/**
 * Created by pekko1215 on 2017/09/07.
 */
$(function () {
    var num = 0;
    var questions = [];
    var current_question = -1;
    var cleared = localStorage.getItem("clear");
    if(cleared){
        cleared = JSON.parse(cleared)
    }else{
        cleared = [];
    }
    (function () {
        var arg = arguments;
        num++;
        $.get("./tmp/q" + num + ".js", function (d) {
            var linker = $("<a></a>");
            linker.text("問題" + num);
            if(cleared.indexOf(num-1)!=-1){
                linker.text("🐈"+linker.text())
            }
            linker.attr({qnum: num, href: "#"})
            linker.on("click", function () {
                hideQuestion($(this).attr("qnum") - 1);
            })
            questions.push(d);
            $("#questions").append(linker)
            $("#questions").append($('<br/>'))
            arg.callee()
        }).fail(function (r) {
            $("#ansbutton").on("click", function () {
                if (current_question == -1) {
                    alert("問題を選択するのじゃ");
                    return;
                }
                $.ajax("./ans/a" + (current_question + 1) + ".js",{
                    dataType:"text"
                })
                    .done(function (d) {
                        var f
                        try {
                            f = (function () {
                                eval($("#ans").val());
                                return eval(d);
                            })()
                        } catch (e) {
                            alert("エラーが発生したぞ！")
                            console.log(e)
                            return;
                        }
                        if (f) {
                            alert("正解！")
                            cleared.push(current_question);
                            localStorage.setItem("clear",JSON.stringify(cleared))
                            location.reload()
                        } else {
                            alert("ブブー、不正解にゃ")
                        }
                    })
            })
        })
    })()
    function hideQuestion(num) {
        $("#tmp").text(questions[num])
        current_question = num;
    }
})