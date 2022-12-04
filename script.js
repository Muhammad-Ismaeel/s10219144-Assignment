function result(){
    var score =0;

    if (document.getElementById('correct1').checked){
        score++;
    }

    if (document.getElementById('correct2').checked){
        score++;
    }

    if (document.getElementById('correct3').checked){
        score++;
    }

    if (document.getElementById('correct4').checked){
        score++;
    }

    if (document.getElementById('correct5').checked){
        score++;
    }

    document.write("Your score for the quiz is: " + score + "!!!!");
    document.write("<br>")

    if (score>3){
        document.write("Amazing Work!!");
    }

    else{
        document.write("Try again next time...");   
    }


}