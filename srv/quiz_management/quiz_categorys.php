<?php 
require_once('quiz_dbutil.php');

try {
    $categorys = QuizManager::getCategorys();
   
    echo $categorys;
    exit();
} catch (Exception $e) {


};


?>