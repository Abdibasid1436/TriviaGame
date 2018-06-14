
//click start to start game

$(document).on('click', '#start', function(){
    console.log("Start");
    game.startGame();

});

//Reset on Click (User Action)
    $(document).on('click', '#reset', function(){
    game.reset();
});

//questions with answers

var randomQuestions = Math.floor(Math.random()*(questions));

var questions = [{
question: "What is the tallest mountain in World??",
answers:["Mount Everest", "Golis Mountain", "Mount Kenya", "Mount Kilimanjaro"],
correctAnswer: "Mount Everest",
}, {

question: "Where is the tallest mountain in the world is located?",
answers: ["India", "USA", "Canada", "Nepal"],
correctAnswer: "Nepal",
}, {

question: "What is the actual height of mount Everest?",
answers: ["1500 feet", "29,029 feet", "2000 feet", "800 feet"],
correctAnswer: "29,029 feet",
}, {

question: "What is highest mountain in Africa?",
answers: ["Mt Mckinley", "Mt Elbrus", "Mt Kilimanjaro", "Mt Kenya"],
correctAnswer: "Mt Kilimanjaro",
}, {

question: "What is the height of Mt Kilimanjaro?",
answers: ["19,341 feet", "5000 feet", "400 feet","40000 feet"],
correctAnswer: "19,341 feet",
}];


//game object

var game = {
correct:0,
incorrect:0,
counter:120,

countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);
    if (game.counter === 0){
    console.log('Times Up');
    game.timeUP();
}
},
startGame:function(){
    timer=setInterval(game.countdown, 1000);
    $('#start').remove();
    for (var i = 0; i < questions.length; i++) {
    $("#panel").append('<h2>' + questions[i].question + '</h2>');
        for (var j = 0; j < questions[i].answers.length; j++) {
    $("#panel").append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);

     }
    }
},
timeUP:function() {
    clearInterval (timer);
    alert('Times Up!');

},
reset:function() {
location.reload();

},

done: function(){
    $.each($("imput[name='answer0']:checked"), function (){
        console.log("inside")
        if($(this).val() == questions[0].correctAnswer){
            game.correct++;
        }else {
            game.incorrect++;
        }
});
    $.each($("input[name='answer1']:checked"), function () {
    console.log("inside")
    if($(this).val() == questions[1].correctAnswer){
        game.correct++;
        } else {
        game.incorrect++;
    }
});
    $.each($("input[name='answer2']:checked"), function () {
    console.log("inside")
    if($(this).val() == questions[2].correctAnswer) {
        game.correct++;
    } else {
        game.incorrect++;
    }
});
    $.each($("input[name='answer3']:checked"), function () {
    console.log("inside")
    if($(this).val() == questions[3].correctAnswer) {
        game.correct++;
    } else {
        game.incorrect++;
    }
});
    $.each($("input[name='answer4']:checked"), function () {
    console.log("inside")
    if($(this).val() == questions[4].correctAnswer) {
        game.correct++;
    } else {
        game.incorrect++;
    }
});
    $.each($("input[name='answer5']:checked"), function () {
    console.log("inside")
    if($(this).val() == questions[5].correctAnswer) {
        game.correct++;
    } else {
        game.incorrect++;
    }
});
game.result();
},
     result:function(){
     clearInterval(timer);
     $("#panel").empty();
     $("#panel").append("Correct answers: " + game.correct + "<br/>");
     $("#panel").append("Incorrect answers: " + game.incorrect);

     }
 }
