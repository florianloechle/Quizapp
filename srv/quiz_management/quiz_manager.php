<?php
require('../database.php');

class QuizManager extends Database {

    const Keys = array('id','name','description','category','difficulty','user');

    const stdQuizQuery = 'SELECT quiz.* from quiz,category,difficulty,user
                          WHERE quiz.category_id = category.id
                          AND quiz.difficulty_id = difficulty.id
                          AND quiz.user_id = user.id';

    public static function getCategorys() {
        self::connect();

        if(!empty($categorys = R::findAll('category'))) {
            return json_encode(array_values($categorys));
        };
        throw new Exception(QuizManagerError::noItemsFound);
    }

    public static function deleteQuiz($userID,$dquiz) {
        self::connect();

        $quiz = R::loadForUpdate('quiz',$dquiz);

        if(!$quiz->id) {
            throw new Exception(QuizManagerError::noItemsFound);
        };

        $user = R::load('user',$userID);

        if(!$user->id) {
            throw new Exception(QuizManagerError::noItemsFound);
        };

        if($quiz->user_ID !== $user->id ) {
            throw new Exception(QuizManagerError::userDoesNotMatch);
        };

        unset($quiz->$user);

        $category = R::load('category',$quiz->category_id);
        unset($quiz->$category);

        R::trash($quiz);

        return true;
    }

    public static function addQuiz($quiz,$userID) {
        self::connect();

        $user = R::load('user',$userID);
        $category = R::load('category',$quiz->category);
        $difficulty = R::findOne('difficulty', ' name = ? ', [$quiz->difficulty]);

        $newQuiz = R::dispense('quiz');
        $newQuiz->name = $quiz->name;
        $newQuiz->description = $quiz->description;
        $newQuiz->category = $category;
        $newQuiz->difficulty = $difficulty;
        $newQuiz->user = $user;
        R::store($newQuiz);

        foreach ($quiz->questions as $question) {
            $newQuestion = R::dispense([
                '_type' => 'question',
                    'text' => $question->questionText,
            ]);
            $newQuiz->xownQuestionList[] = $newQuestion;

            foreach($question->answers as $answer) {
                $newAnswer = R::dispense([
                    '_type' => 'answer',
                        'text' => $answer->text,
                        'correct' => $answer->correct,
                ]);
                $newQuestion->xownAnswerList[] = $newAnswer;
            };
            R::store($newQuiz);
        };
    }

    private static function query($filters) {
        $sql = self::stdQuizQuery;
        $bindings = array();

        foreach($filters as $filter) {

            if(!is_null($filter[0]) && !empty($filter[0])) {
                $sql .=  " $filter[1]";
                $bindings[] = $filter[0];
            };
        };
        return R::findMulti('quiz',$sql,$bindings);
    }

    public static function getMultipleQuiz($filter) {
        self::connect();

        $fullQuizArray = array();
        $keys = self::Keys;
        $sub = array('category' => 'name','difficulty' => 'name','user' => 'username');

        $quizBeans = self::query([
            [$filter["name"],'AND quiz.name LIKE ? '],
            [$filter["id"],'AND quiz.id = ? '],
            [$filter["user"],'AND user.username LIKE ? '],
            [$filter["userid"],'AND user.id = ?']
        ]);

        foreach($quizBeans['quiz'] as $quiz) {
            $quizArray = array(); 

            for($i = 0;$i<count($keys);$i++) {

                $value = $quiz[$keys[$i]];

                if(is_object($value)) {

                    $quizArray[$keys[$i]] = $value[$sub[$keys[$i]]];
                    continue;
                };
                $quizArray[$keys[$i]] = $value;
            };

            $quizArray['questionCount'] = $quiz->countOwn('question');
            
            $fullQuizArray[] = $quizArray; 
        };

        echo json_encode($fullQuizArray);
        R::close();
        exit();
    }

    public static function fetchQuestions($quizID) {
        self::connect();

        $quiz = R::load('quiz',$quizID);

        if(!$quiz->id) {
            throw new Exception("Quiz does not exist in database. It might have been deleted by the owner.");
        };

        $questions = array();

        $firstQuestion = reset($quiz->xownQuestionList);
        $lastQuestion = end($quiz->xownQuestionList);
        
        foreach ($quiz->xownQuestionList as $question) {
            $temp = array(
                'id' => $question->id,
                'questionText' => $question->text,
                'answers' => array(),
            );

            $firstAnswer = reset($question->xownAnswerList);
            $lastAnswer = end($question->xownAnswerList);

            foreach ($question->xownAnswerList as $answer) {
                $tempAnswer = array(
                    'id' => $answer->id,
                    'text' => $answer->text,
                    'correct' => $answer->correct
                );
                $temp['answers'][] = $tempAnswer;
            };
            $questions[] = $temp;
        };
        return $questions;
    }
}

abstract class QuizManagerError {
    const noItemsFound = 'Keine Einträge in Datenbank gefunden.';
    const userDoesNotMatch = "Aktuelle Benuter stimmt nicht mit dem Ersteller überein";
}
?>