<?php 
require_once('../Quiz.php');

session_start();

$givenAnswer = filter_input(INPUT_POST,'answers',FILTER_SANITIZE_SPECIAL_CHARS);

if(isset($_SESSION['activeQuiz']) && is_null($givenAnswer)) {
    getNewQuestion();
};

function getNewQuestion() {
    $quiz = $_SESSION['quiz'];

    $question = $quiz->nextQuestion();

    if(!is_null($question)) {
        echo json_encode($question);
        exit();

    } else {
        unset($_SESSION['activeQuiz']);

        echo json_encode($error = array( 'error' => 'End of quiz reached.'));
        exit();
    };
}

if(!is_null($givenAnswer)) {
    // file_put_contents ( "c:/temp/log.txt" , print_r($givenAnswer,true) );
    // file_put_contents ( "c:/temp/log.txt" , print_r($_SESSION['quiz'],true) );
    getCorrectAnswers($givenAnswer);
};

function getCorrectAnswers($givenAnswer) {

    $quiz = $_SESSION['quiz'];

    $correctAnswers = $quiz->getCorrectAnswers($givenAnswer);

    echo json_encode($correct = array( 'id' => $correctAnswers));
    exit();
};

?>