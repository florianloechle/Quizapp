<?php
require_once('quiz_dbutil.php');

class Quiz {

    /**
     * The questions associated with the quiz.
     * @var array 
     */
    private $questions = array();

    
    /**
     * The current index, determines which question the user is on. 
     * @var int 
     */
    private $index = 0;


    /**
     * Initializer. Dependency is an array of questions.
     * @var array 
     */
    public function __construct($questions) {
        if(!is_Array($questions)) {
            $questions = (array) $questions;
        };

        $this->questions = $questions;
        $this->count = count($questions);
    }

    public function nextQuestion() {
        
        if($this->index <= $this->count-1) {
            $question = $this->questions[$this->index];

            $nextQuestion = array(
                'id' => $question['id'],
                'questionText' => $question['questionText'],
                'answers' => array()
            );

            foreach ($question['answers'] as $answer) {
                $tempAnswer = array(
                    'id' => $answer['id'],
                    'text' => $answer['text'],
                );
                $nextQuestion['answers'][] = $tempAnswer;
            };

           return $nextQuestion;

        } else {
            return null;
        };
    }

    public function getCorrectAnswers() {
        $question = $this->questions[$this->index];

        $correctAnswer;
        foreach ($question['answers'] as $answer) {
            if($answer['correct'] == true) {
                $correctAnswer = $answer['id'];
                break;
            };
        };

        $this->index++; 
        return $correctAnswer;
    }

}




?>