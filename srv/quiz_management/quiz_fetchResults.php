<?php 
require_once('../Quiz.php');

session_start();

$results = $_SESSION['quiz']->getResults();
file_put_contents ( "c:/temp/log.txt" , print_r( $results ,true) );

echo json_encode( $results );
// echo json_encode( "php answer" );

exit();

?>