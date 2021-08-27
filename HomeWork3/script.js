let btn = document.querySelector("#first_question_correct")
let btn1 = document.getElementsByClassName("first_question_inCorrect")
let btn2 = document.querySelector("#second_question_correct")
let btn3 = document.getElementsByClassName("second_question_inCorrect")
let btn4 = document.querySelector("#third_question_correct")
let btn5 = document.getElementsByClassName("third_question_inCorrect")
let btn6 = document.querySelector("#fourth_question_correct")
let btn7 = document.getElementsByClassName("fourth_question_inCorrect")
let btn8 = document.querySelector("#fifth_question_correct")
let btn9 = document.getElementsByClassName("fifth_question_inCorrect")
let btn10 = document.querySelector("#end")
let div = document.querySelector("#first_question")
let div1 = document.querySelector("#second_question")
let div2 = document.querySelector("#third_question")
let div3 = document.querySelector("#fourth_question")
let div4 = document.querySelector("#fifth_question")
let counterCorrect = 0;
let counterInCorrect = 0;


for (var i = 0; i < btn1.length; i++) {
    btn1[i].addEventListener("click", function() {
        counterInCorrect++;
        let b = div.style.background = "red";
        btn1[0].disabled = true;
        btn1[1].disabled = true;
        btn1[2].disabled = true;
        btn.disabled = true;
    })

}
btn.addEventListener("click", function() {
    counterCorrect++;
    let e = div.style.background = "green";
    btn.disabled = true;
    for (var i = 0; i < btn1.length; i++) {
        btn1[i].disabled = true;
    }
})
for (var i = 0; i < btn3.length; i++) {
    btn3[i].addEventListener("click", function() {
        counterInCorrect++;
        let b = div1.style.background = "red";
        btn3[0].disabled = true;
        btn3[1].disabled = true;
        btn3[2].disabled = true;
        btn2.disabled = true;
    })
}
btn2.addEventListener("click", function() {
    counterCorrect++;
    let e = div1.style.background = "green";
    btn2.disabled = true;
    for (var i = 0; i < btn1.length; i++) {
        btn3[i].disabled = true;
    }
})
for (var i = 0; i < btn3.length; i++) {
    btn5[i].addEventListener("click", function() {
        counterInCorrect++;
        let b = div2.style.background = "red";
        btn5[0].disabled = true;
        btn5[1].disabled = true;
        btn5[2].disabled = true;
        btn4.disabled = true;
    })
}
btn4.addEventListener("click", function() {
    counterCorrect++;
    let e = div2.style.background = "green";
    btn4.disabled = true;
    for (var i = 0; i < btn1.length; i++) {
        btn5[i].disabled = true;
    }
})
for (var i = 0; i < btn7.length; i++) {
    btn7[i].addEventListener("click", function() {
        counterInCorrect++;
        let b = div3.style.background = "red";
        btn7[0].disabled = true;
        btn7[1].disabled = true;
        btn7[2].disabled = true;
        btn6.disabled = true;
    })
}
btn6.addEventListener("click", function() {
    counterCorrect++;
    let e = div3.style.background = "green";
    btn6.disabled = true;
    for (var i = 0; i < btn1.length; i++) {
        btn7[i].disabled = true;
    }
})
for (var i = 0; i < btn9.length; i++) {
    btn9[i].addEventListener("click", function() {
        counterInCorrect++;
        let b = div4.style.background = "red";
        btn9[0].disabled = true;
        btn9[1].disabled = true;
        btn9[2].disabled = true;
        btn8.disabled = true;
    })
}
btn8.addEventListener("click", function() {
    counterCorrect++;
    let e = div4.style.background = "green";
    btn8.disabled = true;
    for (var i = 0; i < btn1.length; i++) {
        btn9[i].disabled = true;
    }
})
btn10.addEventListener("click", function() {
    console.log(btn10)
    alert("Количесвто верных ответов:" + counterCorrect)
    alert("Количесвто неверных ответов:" + counterInCorrect)

})