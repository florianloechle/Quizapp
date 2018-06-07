<?php
require_once('quiz_dbutil.php');

class Quiz {

    /**
     * The questions associated with the quiz 
     * @var array 
     */
    private $questions;

    /**
     * Initializer. Dependency is an array of questions.
     * @var array 
     */
    public function __construct($questions) {
        if(!is_Array($questions)) {
            $questions = (array) $questions;
        };

        $this->questions = $questions;

        $this->setup();
    }

    public function start() {

    }

    private function setup() {
       
        
    }

}




?>