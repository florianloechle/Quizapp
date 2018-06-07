<?php
require_once('quiz_dbutil.php');
session_start();

$quizID = filter_input(INPUT_POST,'id',FILTER_SANITIZE_SPECIAL_CHARS);

if(is_null($quizID)) {
    //...
};

if(isset($_SESSION['id']) && !empty($_SESSION['id'])) {
    $user = $_SESSION['id'];
};

try {

    if(QuizManager::deleteQuiz($user,$quizID)) {

        $success = array(
            'success' => 'Quiz was deleted'
        );
        echo json_encode($success);
    };

} catch (Exception $e) {

    echo json_encode($error = array( 'error' => 'Failed to delete quiz from database.'));

}



?>