<?php 
require_once('quiz_manager.php');

try {
    $categorys = QuizManager::getCategorys();
   
    echo $categorys;
    exit();
} catch (Exception $e) {


};


?>