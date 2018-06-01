<?php 
require_once('quiz_manager.php');
session_start();

$filterKeys = ["name","id","user","category"];
$filter = array(
    "name" => "",
    "id" => "",
    "user" => "",
    "userid" => "",
    "category" => "",
);

foreach($_GET as $key => $value) {

    if($key == 'current') {
        $filter['userid'] = $_SESSION['id'];
        break;
    };

    if(in_array($key,$filterKeys)) {

        $value = filter_input(INPUT_GET,$key,FILTER_SANITIZE_STRING,FILTER_FLAG_NO_ENCODE_QUOTES);

        if(!is_null($value)) {
            if($key == 'name' || $key == 'user') {
                $value = '%'.$value.'%';
            }
    
            $filter[$key] = $value;
        };
    };
 
}

try {

    QuizManager::getMultipleQuiz($filter);

    exit();

} catch (Exception $e) {

};

?>