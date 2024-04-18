//Question bank
var questionBank= [
    {
        question : 'What does RARP stand for?',
        option : ['Remote Address Resolution Protocol','Reverse Address Resolution Protocol','Routing Address Resolution Protocol','Reversible Address Resolution Protocol'],
        answer : 'Reverse Address Resolution Protocol'
    },
    {
        question : 'Which layer of the OSI model does RARP primarily operate on?',
        option : ['Application layer','Transport layer','Network layer','Data link layer'],
        answer : 'Data link layer'
    },
    {
        question : 'What is the main purpose of RARP?',
        option : ['To translate domain names to IP addresses','To discover the MAC address of a device on the same network given its IP address','To establish secure connections between devices','To manage network congestion'],
        answer : 'To discover the MAC address of a device on the same network given its IP address'
    },
    {
        question : 'Which command can be used to view the RARP cache in most operating systems?',
        option : ['rarpconfig','ifconfig','rarp -a','ipconfig /all'],
        answer : 'rarp -a'
    },
    {
        question : 'How does RARP resolve MAC addresses to IP addresses?',
        option : ['By sending RARP Requests','By querying the DNS server','By broadcasting RARP Responses','By using ICMP packets'],
        answer : 'By sending RARP Requests'
    }
    
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();