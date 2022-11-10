p1= localStorage.getItem("player1");
p2= localStorage.getItem("player2");
p1_score=0;
p2_score=0;
console.log(p1);
console.log(p2);
document.getElementById("p1_name").innerHTML=p1+": "+p1_score;
document.getElementById("p2_name").innerHTML=p2+": "+p2_score;
document.getElementById("questionturn").innerHTML="Question Turn: "+p1;
document.getElementById("answerturn").innerHTML="Answer Turn: "+p2;
function send(){
    number1=document.getElementById("n1").value;
    number2=document.getElementById("n2").value;
    correct_answer=parseInt(number1)*parseInt(number2);
    multiply_numbers="<h4>"+number1+" x "+number2+"</h4>";
    input_box="<br> Answer: "+"<input type='number' id='answer'>";
    check_button="<br> <br> <button class= 'btn btn-primary' onclick='check()'>"+"Check"+"</button>";
    document.getElementById("output").innerHTML=multiply_numbers+input_box+check_button;
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
}
question_turn="Player1";
answer_turn="Player2";
function check(){
    get_answer=document.getElementById("answer").value;
    if(get_answer==correct_answer){
        if(answer_turn="Player1"){
            p1_score=p1_score+1;
            document.getElementById("p1_name").innerHTML=p1+": "+p1_score;
        }
        else{
            p2_score=p2_score+1;
            document.getElementById("p2_name").innerHTML=p2+": "+p2_score;
        }
    }
    if(answer_turn=="Player1"){
        answer_turn="Player2";
        document.getElementById("answerturn").innerHTML="Answer Turn: "+p1;
    }
    else{
        answer_turn="Player1";
        document.getElementById("answerturn").innerHTML="Answer Turn: "+p2;
    }
    if(question_turn=="Player1"){
        question_turn="Player2";
        document.getElementById("questionturn").innerHTML="Question Turn: "+p2;
    }
    else{
        question_turn="Player1";
        document.getElementById("questionturn").innerHTML="Question Turn: "+p1;
    }
    document.getElementById("output").innerHTML="";
}


