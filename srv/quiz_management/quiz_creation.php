<?php 
require_once('quiz_manager.php');
session_start();

$noDataError = json_encode($error = array('error' => 'No data found.'));

$quizData = filter_input(INPUT_POST,'quiz');

if(is_null($quizData)) {
    echo $noDataError;
    exit();
};

$quiz = json_decode($quizData);

foreach ($quiz as $key => $value) {
    if(!$value) {
        echo $noDataError;
        exit();
    };

    if(is_Array($key)) {
        foreach ($key as $nestedKey => $nestedValue) {
            if(!$nestedValue) {
                echo $noDataError;
                exit();
            };

            if(is_Array($nestedKey)) {
                for($i = 0;count($nestedKey);$i++) {
                    if(!$nestedKey[$i]) {
                        echo $noDataError;
                        exit();
                    }
                }
            }
        }
    }
}
//At this stage we can be sure that every value does at least exist. 

$creator = $_SESSION['id'];

try {
    QuizManager::addQuiz($quiz,$creator);

    $success = array(
        'success' => 'quiz added to database'
    );
    echo json_encode($success);

} catch (Exception $e) {
    json_encode($error = array('error' => 'Unexpected error occured.'));
};
?>