<?php
require('../database.php');

class UserManager extends Database {

    const registrationKeys = array(
        'username' => 'username',
        'password' => 'password',
        'repeatPassword' => 'repeatPassword',
        'email' => 'email'
    );

    const loginKeys = array(
        'username' => 'username',
        'password' => 'password'
    );

    const method = array(
        'UserRegistration' => 'register',
        'UserLogin' => 'login',
        'UserProfile' => 'profile'
    );

    private const filterOptions = array(
        'username' => array(FILTER_FLAG_NO_ENCODE_QUOTES)
    );

    public static function generateError($affected,$message) {
        $error = array(
            'for'=>$affected.='-error',
            'message'=>$message
        );

        return $error;
    }
    
    public static function validateUsername($value) {
        $username = filter_var($value,FILTER_SANITIZE_STRING,self::filterOptions['username']);

        if(!$username) {
            return false;
        }
        return $username;
    }

    public static function throwErrors($errors) {
        echo json_encode($errors);
        exit();
    }

    public static function registerUser($username,$password,$email) {
        self::connect();

        $user = R::dispense('user');

        if(!is_null($testUser = R::findOne( 'user', ' username = ? ', [$username] ))) {
            throw new UserManagerException('username');
        };

        if(!is_null($testUser = R::findOne( 'user', ' email = ? ', [$email] ))) {
            throw new UserManagerException('email');
        };

        $user->username = $username;
        $hashedPassword = password_hash($password,PASSWORD_DEFAULT);
        $user->password = $hashedPassword;
        $user->email = $email;
        $user->score = 0;
        $user->gamesPlayed = 0;

        R::store($user);
        R::close();
    }

    public static function loginUser($username,$password) {
        self::connect();

        $user = R::findOne( 'user', ' username = ? ', [$username] );

        if(is_null($user)) {
            throw new UserManagerException();
        };
        if(!password_verify($password,$user->password)) {
            throw new UserManagerException();
        };

        $_SESSION['username'] = $user->username;
        $_SESSION['id'] = $user->id;
        R::close();
    }
};

abstract class UserManagerError {
    const missingArgument = 'Field is required.';
    const fatalError= 'invalidArgument';
    const invalidEmail = 'Please enter a valid email adress.';
    const invalidPassword = 'Password must at least contain one number';
    const invalidUsername = 'You entered an invalid username';
    const alreadyExists = 'is already taken.';
    const passwordsDoNotMatch = 'Passwords do not match.';
    const wrongCredentials = 'Incorrect username or password';
}

class UserManagerException extends Exception {
    private $type;

    public function __construct($type = null) {
        $this->type = $type;
    }

    public function getType() {
        return $this->type;
    }
}


?>