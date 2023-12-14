var plrpoints = 0;
var currentq = "";
var correct = 0;
var currentqpoints = 0;
var questionsanswered = 0;
var loaded;
function revealAnswer(category, points) {
  // You can use JavaScript to reveal the answer based on the category and points.
  // You can also update the score, start a timer, etc.
  hideThing(category, points)
  if (category == "1") { // Characters
    if (points == 100) {
      console.log("C1 - 100PTS Selected")
      questionShow(100,"This character was the original leader of the clan","Who was Jack Merridew","Who was Piggy?","Who was Ralph?","Who was Samneric?",3);
    } else if (points == 200) {
      console.log("C1 - 200PTS Selected")
      questionShow(200,"This character acts like a savage leader.","Who was Roger?","Who was Ralph?","Who was Jack Merridew?","Who Was Simon?",3);
    } else if (points == 300) {
      console.log("C1 - 300PTS Selected")
      questionShow(300,"This character likes to explore the woods at night.","Who was Simon?","Who was Ralph?","Who was Roger?","Who was Jack Merridew?",1);
    } else if (points == 400) {
      console.log("C1 - 400PTS Selected")
    } else if (points == 500) {
      console.log("C1 - 500PTS Selected")
    }
  } else if (category == "2") { // events
    console.log("C2 Selected")
    if (points == 100) {
      console.log("100 points")
      questionShow(100, "Question", "Answer 1", "Answer 2", "Answer 3", "Answer 4", 2);
    } else if (points == 200) {
      console.log("200 points")

    } else if (points == 300) {
      console.log("300 points")
    } else if (points == 400) {
      console.log("400 points")
    } else if (points == 500) {
      console.log("500 points")
    }
  } else if (category == "3") { // quotes
    console.log("C3 Selected")
    if (points == 100) {
      console.log("100 points")
      questionShow(100, '"We can\'t have everybody talking at once. We\'ll have to have \'Hands up\' like at school."', "Who is Jack?", "Who is Ralph?", "Who is Piggy?", "Who is Simon?", 2)
    } else if (points == 200) {
      console.log("200 points")
      questionShow(200, '"We don\'t want you. Three\'s enough."', "Who is Ralph?", "Who is Roger?", "Who is Jack?", "Who is Sam?", 3)
    } else if (points == 300) {
      console.log("300 points")
      questionShow(300, '"Jack and Roger and Maurice and Robert and Bill and Piggy and Ralph. Do you. See?"', 'Who is Ralph?', 'Who is Lord of the Flies', 'Who is Simon?', 'Who is samneric?', 2)
    } else if (points == 400) {
      console.log("400 points")
      questionShow(400,'"This an island, isn\'t it?"','Who is Jack Merridew?',"Who is Roger?","Who is Piggy?","Who is Sam?",3);
    } else if (points == 500) {
      console.log("500 points")
      questionShow(500,'"No. They\'re not as bad as that. It was an accident."',"Who is Lord of the Flies?","Who is Jack Merridew?","Who is Eric?","Who is Ralph?",4)
    }
  } else if (category == "4") { // conflict
    console.log("C4 Selected")
    if (points == 100) {
      console.log("100 points")
    } else if (points == 200) {
      console.log("200 points")
    } else if (points == 300) {
      console.log("300 points")
    } else if (points == 400) {
      console.log("400 points")
    } else if (points == 500) {
      console.log("500 points")
    }
  } else if (category == "5") { // symbolism
    console.log("C5 Selected")
    if (points == 100) {
      console.log("100 points")
    } else if (points == 200) {
      console.log("200 points")
    } else if (points == 300) {
      console.log("300 points")
    } else if (points == 400) {
      console.log("400 points")
    } else if (points == 500) {
      console.log("500 points")
    }
  } else if (category == "6") { // plot
    console.log("C6 Selected")
    if (points == 100) {
      console.log("100 points")
    } else if (points == 200) {
      console.log("200 points")
    } else if (points == 300) {
      console.log("300 points")
    } else if (points == 400) {
      console.log("400 points")
    } else if (points == 500) {
      console.log("500 points")
    }
  }
}
function questionShow(points, question, ans1, ans2, ans3, ans4, numanscorrect) {
  console.log("Question is worth " + points + " and is asking " + question + ".\nAnswers:\n" + ans1 + "\n" + ans2 + "\n" + ans3 + "\n" + ans4 + "\n\nCorrect Answer: " + numanscorrect)
  // plrpoints = plrpoints + points;
  correct = numanscorrect;
  currentq = question;
  currentqpoints = points;
  console.log(correct);
  console.log(currentq);
  console.log(currentqpoints);
  document.getElementById("qoverlay").style.display = "block"
  document.getElementById("qoverlay_question").innerHTML = question
  document.getElementById("qoverlay_pointval").innerHTML = "Worth: " + points + " points"
  document.getElementById("qoverlay_q1text").innerHTML = ans1
  document.getElementById("qoverlay_q2text").innerHTML = ans2
  document.getElementById("qoverlay_q3text").innerHTML = ans3
  document.getElementById("qoverlay_q4text").innerHTML = ans4
  document.getElementById("points").innerHTML = "Points: " + plrpoints;
  document.getElementById("qoverlay_checkbutton").style.display = "block";
}
// function checkAnswer() {
//   if (document.getElementById("Q1").checked || document.getElementById("Q2").checked || document.getElementById("Q3").checked || document.getElementById("Q4").checked) {
//     document.getElementById("qoverlay").style.display = "none";
//     document.getElementById("Q1").checked = false;
//     document.getElementById("Q2").checked = false;
//     document.getElementById("Q3").checked = false;
//     document.getElementById("Q4").checked = false;
//     if (document.getElementById("Q1").checked) {
//       if (correct == 1) {
//         plrpoints = plrpoints + currentqpoints;
//         document.getElementById("qoverlay_question").innerHTML = "Correct!"
//         document.getElementById("points").innerHTML = "Points: " + plrpoints;
//       } else if (correct != 1) {
//         plrpoints = plrpoints - currentqpoints;

//         document.getElementById("points").innerHTML = "Points: " + plrpoints;
//       }
//     } else if (document.getElementById("Q2").checked) {
//       if (correct == 2) {
//         plrpoints = plrpoints + currentqpoints;
//         document.getElementById("points").innerHTML = "Points: " + plrpoints;
//       } else if (correct != 2) {
//         plrpoints = plrpoints - currentqpoints;
//         document.getElementById("points").innerHTML = "Points: " + plrpoints;
//       }
//     } else if (document.getElementById("Q3").checked) {
//       if (correct == 3) {
//         plrpoints = plrpoints + currentqpoints;
//         document.getElementById("points").innerHTML = "Points: " + plrpoints;
//       } else if (correct != 3) {
//         plrpoints = plrpoints - currentqpoints;
//         document.getElementById("points").innerHTML = "Points: " + plrpoints;
//       }
//     } else if (document.getElementById("Q4").checked) {
//       if (correct == 4) {
//         plrpoints = plrpoints + currentqpoints;
//         document.getElementById("points").innerHTML = "Points: " + plrpoints;
//       } else if (correct != 4) {
//         plrpoints = plrpoints - currentqpoints;
//         document.getElementById("points").innerHTML = "Points: " + plrpoints;
//       }
//     }
//   } else {
//     console.log("answer not checked");
//   }
// }
function checkAnswer() {
  const answer1 = document.getElementById("Q1").checked;
  const answer2 = document.getElementById("Q2").checked;
  const answer3 = document.getElementById("Q3").checked;
  const answer4 = document.getElementById("Q4").checked;
  document.getElementById("Q1").checked = false;
  document.getElementById("Q2").checked = false;
  document.getElementById("Q3").checked = false;
  document.getElementById("Q4").checked = false;
  
  let selectedAnswerText = "";
  questionsanswered += 1;
  if (answer1) {
    if (correct == 1) {
      document.getElementById("qoverlay_checkbutton").style.display = "none";
      plrpoints += currentqpoints;
      selectedAnswerText = "Correct!";
      document.getElementById("qoverlay_pointval").innerHTML = "Added "+currentqpoints+".";
      setTimeout(function(){
        document.getElementById("qoverlay").style.transform = "translate(200%, -50%)";
        setTimeout(function(){
          document.getElementById("qoverlay").style.display = 'none';
          document.getElementById("qoverlay").style.transform = "translate(-50%, -50%)";
          // document.getElementById("qoverlay").style.transition = "0s";
        },1000);
      },2000)
    } else {
      document.getElementById("qoverlay_checkbutton").style.display = "none";
      plrpoints -= currentqpoints;
      selectedAnswerText = "Sorry, Incorrect.";
      document.getElementById("qoverlay_pointval").innerHTML = "Deducted "+currentqpoints+".";
      setTimeout(function(){
        document.getElementById("qoverlay").style.transform = "translate(200%, -50%)";
        setTimeout(function(){
          document.getElementById("qoverlay").style.display = 'none';
          document.getElementById("qoverlay").style.transform = "translate(-50%, -50%)";
          // document.getElementById("qoverlay").style.transition = "0s";
        },1000);
      },2000)
    }
  } else if (answer2) {
    if (correct == 2) {
      document.getElementById("qoverlay_checkbutton").style.display = "none";
      plrpoints += currentqpoints;
      selectedAnswerText = "Correct!";
      document.getElementById("qoverlay_pointval").innerHTML = "Added "+currentqpoints+".";
      setTimeout(function(){
        document.getElementById("qoverlay").style.transform = "translate(200%, -50%)";
        setTimeout(function(){
          document.getElementById("qoverlay").style.display = 'none';
          document.getElementById("qoverlay").style.transform = "translate(-50%, -50%)";
          // document.getElementById("qoverlay").style.transition = "0s";
        },1000);
      },2000)
    } else {
      document.getElementById("qoverlay_checkbutton").style.display = "none";
      plrpoints -= currentqpoints;
      selectedAnswerText = "Sorry, Incorrect.";
      document.getElementById("qoverlay_pointval").innerHTML = "Deducted "+currentqpoints+".";
      setTimeout(function(){
        document.getElementById("qoverlay").style.transform = "translate(200%, -50%)";
        setTimeout(function(){
          document.getElementById("qoverlay").style.display = 'none';
          document.getElementById("qoverlay").style.transform = "translate(-50%, -50%)";
          // document.getElementById("qoverlay").style.transition = "0s";
        },1000);
      },2000)
    }
  } else if (answer3) {
    if (correct == 3) {
      document.getElementById("qoverlay_checkbutton").style.display = "none";
      plrpoints += currentqpoints;
      selectedAnswerText = "Correct!";
      document.getElementById("qoverlay_pointval").innerHTML = "Added "+currentqpoints+".";
      setTimeout(function(){
        document.getElementById("qoverlay").style.transform = "translate(200%, -50%)";
        setTimeout(function(){
          document.getElementById("qoverlay").style.display = 'none';
          document.getElementById("qoverlay").style.transform = "translate(-50%, -50%)";
          // document.getElementById("qoverlay").style.transition = "0s";
        },1000);
      },2000)
    } else {
      document.getElementById("qoverlay_checkbutton").style.display = "none";
      plrpoints -= currentqpoints;
      selectedAnswerText = "Sorry, Incorrect.";
      document.getElementById("qoverlay_pointval").innerHTML = "Deducted "+currentqpoints+".";
      setTimeout(function(){
        document.getElementById("qoverlay").style.transform = "translate(200%, -50%)";
        setTimeout(function(){
          document.getElementById("qoverlay").style.display = 'none';
          document.getElementById("qoverlay").style.transform = "translate(-50%, -50%)";
          // document.getElementById("qoverlay").style.transition = "0s";
        },1000);
      },2000)
    }
  } else if (answer4) {
    if (correct == 4) {
      document.getElementById("qoverlay_checkbutton").style.display = "none";
      plrpoints += currentqpoints;
      selectedAnswerText = "Correct!";
      document.getElementById("qoverlay_pointval").innerHTML = "Added "+currentqpoints+".";
      setTimeout(function(){
        document.getElementById("qoverlay").style.transform = "translate(200%, -50%)";
        setTimeout(function(){
          document.getElementById("qoverlay").style.display = 'none';
          document.getElementById("qoverlay").style.transform = "translate(-50%, -50%)";
          // document.getElementById("qoverlay").style.transition = "0s";
        },1000);
      },2000)
    } else {
      document.getElementById("qoverlay_checkbutton").style.display = "none";
      plrpoints -= currentqpoints;
      selectedAnswerText = "Sorry, Incorrect.";
      document.getElementById("qoverlay_pointval").innerHTML = "Deducted "+currentqpoints+".";
      setTimeout(function(){
        document.getElementById("qoverlay").style.transform = "translate(200%, -50%)";
        setTimeout(function(){
          document.getElementById("qoverlay").style.display = 'none';
          document.getElementById("qoverlay").style.transform = "translate(-50%, -50%)";
          // document.getElementById("qoverlay").style.transition = "0s";
        },1000);
      },2000)
    }
  } else {
    console.log("No answer selected");
    return;
  }

  document.getElementById("points").textContent = "Points: " + plrpoints;
  document.getElementById("qoverlay_question").textContent = selectedAnswerText;
}

function hideThing(category, pointval) {
  if (category == "1") {
    if (pointval == 100) {
      document.getElementById("WII-100").classList.toggle('disabled', true);
    } else if (pointval == 200) {
      document.getElementById("WII-200").classList.toggle('disabled', true);
    } else if (pointval == 300) {
      document.getElementById("WII-300").classList.toggle('disabled', true);
    } else if (pointval == 400) {
      document.getElementById("WII-400").classList.toggle('disabled', true);
    } else if (pointval == 500) {
      document.getElementById("WII-500").classList.toggle('disabled', true);
    }
  } else if (category == "2") {
    if (pointval == 100) {
      document.getElementById("WH-100").classList.toggle('disabled', true);
    } else if (pointval == 200) {
      document.getElementById("WH-200").classList.toggle('disabled', true);
    } else if (pointval == 300) {
      document.getElementById("WH-300").classList.toggle('disabled', true);
    } else if (pointval == 400) {
      document.getElementById("WH-400").classList.toggle('disabled', true);
    } else if (pointval == 500) {
      document.getElementById("WH-500").classList.toggle('disabled', true);
    }
  } else if (category == "3") {
    if (pointval == 100) {
      document.getElementById("WSI-100").classList.toggle('disabled', true);
    } else if (pointval == 200) {
      document.getElementById("WSI-200").classList.toggle('disabled', true);
    } else if (pointval == 300) {
      document.getElementById("WSI-300").classList.toggle('disabled', true);
    } else if (pointval == 400) {
      document.getElementById("WSI-400").classList.toggle('disabled', true);
    } else if (pointval == 500) {
      document.getElementById("WSI-500").classList.toggle('disabled', true);
    }
  } else if (category == "4") {
    if (pointval == 100) {
      document.getElementById("TI-100").classList.toggle('disabled', true);
    } else if (pointval == 200) {
      document.getElementById("TI-200").classList.toggle('disabled', true);
    } else if (pointval == 300) {
      document.getElementById("TI-300").classList.toggle('disabled', true);
    } else if (pointval == 400) {
      document.getElementById("TI-400").classList.toggle('disabled', true);
    } else if (pointval == 500) {
      document.getElementById("TI-500").classList.toggle('disabled', true);
    }

  } else if (category == "5") {
    if (pointval == 100) {
      document.getElementById("OL-100").classList.toggle('disabled', true);
    } else if (pointval == 200) {
      document.getElementById("OL-200").classList.toggle('disabled', true);
    } else if (pointval == 300) {
      document.getElementById("OL-300").classList.toggle('disabled', true);
    } else if (pointval == 400) {
      document.getElementById("OL-400").classList.toggle('disabled', true);
    } else if (pointval == 500) {
      document.getElementById("OL-500").classList.toggle('disabled', true);
    }
  } else if (category == "6") {
    if (pointval == 100) {
      document.getElementById("TP-100").classList.toggle('disabled', true);
    } else if (pointval == 200) {
      document.getElementById("TP-200").classList.toggle('disabled', true);
    } else if (pointval == 300) {
      document.getElementById("TP-300").classList.toggle('disabled', true);
    } else if (pointval == 400) {
      document.getElementById("TP-400").classList.toggle('disabled', true);
    } else if (pointval == 500) {
      document.getElementById("TP-500").classList.toggle('disabled', true);
    }
  }
}
