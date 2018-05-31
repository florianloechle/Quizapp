<?php
require_once('quiz_manager.php');
session_start();

$quizID = filter_input(INPUT_POST,'quizID',FILTER_SANITIZE_SPECIAL_CHARS);
$val = filter_input(INPUT_POST,'question',FILTER_SANITIZE_SPECIAL_CHARS);
$score = filter_input(INPUT_POST,'question',FILTER_SANITIZE_SPECIAL_CHARS);

//We get the questions from the desired quiz and store them in the users session
if(!is_null($quizID)) {
    $_SESSION['activeQuiz'] = 'id';

    $questions = QuizManager::fetchQuestions($quizID);

    $_SESSION['questions'] = $questions;

    echo json_encode($questions[0]);

//If the quizID isnt asked for we can assume the user is playing a quiz and the answers are already stored;
} else if(!is_null($val)) {

    $questions = $_SESSION['questions'];

    if($question[$val]) {
        echo json_encode($question[$val]);
        exit();

    } else {

        echo json_encode(array("error" => "End of questions reached"));
        exit();
    };

};

if(!is_null($score)) {




}





?>