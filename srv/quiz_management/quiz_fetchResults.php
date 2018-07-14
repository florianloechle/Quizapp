<?php 
require_once('../Quiz.php');

session_start();

$results = $_SESSION['quiz']->getResults();

echo json_encode( $results );
// echo json_encode( "php answer" );

exit();

?>