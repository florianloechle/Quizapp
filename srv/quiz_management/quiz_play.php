<?php
require_once('quiz_dbutil.php');
require_once('../Quiz.php');

session_start();

$quizID = filter_input(INPUT_POST,'id',FILTER_SANITIZE_SPECIAL_CHARS);
$score = filter_input(INPUT_POST,'question',FILTER_SANITIZE_SPECIAL_CHARS);

//We get the questions from the desired quiz and store them in the users session
if(!is_null($quizID)) {
    $_SESSION['activeQuiz'] = $quizID;

    try {
        $questions = QuizManager::fetchQuestions($quizID);

        echo json_encode(array_values($questions));
        exit();

    } catch (Exception $e) {
        echo json_encode($error = array( 'error' => $e->getMessage()));
        exit();
    };

    $quiz = new Quiz($questions);

    $_SESSION['quiz'] = $quiz;

    echo json_encode($quiz->start());
    exit();
};





?>