<?php
require_once('quiz_dbutil.php');
require_once('../Quiz.php');

session_start();

$quizID = filter_input(INPUT_POST,'id',FILTER_SANITIZE_SPECIAL_CHARS);

if(!is_null($quizID)) {
    startNewQuiz($quizID);
};

function startNewQuiz($quizID) {

    $_SESSION['activeQuiz'] = $quizID;

    try {

        $questions = QuizManager::fetchQuestions($quizID);

    } catch (Exception $e) {
        echo json_encode($error = array( 'error' => $e->getMessage()));
        exit();
    };

    $quiz = new Quiz($questions);

    $_SESSION['quiz'] = $quiz;

    echo json_encode($success = array('success' => 'Quiz started successfully'));
    exit();
};
?>