<?php 
require_once('user_manager.php');
session_start();

if(isset($_POST['check'])) {
    echo (isset($_SESSION['username']) && !empty($_SESSION['username'])) ? 'true' : 'false';
    exit();
};


$errors = array(
    'error' => array()
);
$login = 'UserLogin';

foreach($_POST as $key => $value) {
   
    $value = filter_input(INPUT_POST,UserManager::loginKeys[$key]);

    if(is_null($value)) {
        $errors['error'][] = UserManager::generateError($key,
        UserManagerError::fatalError);

        UserManager::throwErrors($errors);
    };

    if(!$value) {
        $errors['error'][] = UserManager::generateError($key,
        UserManagerError::missingArgument);
    };
};

//Return errors in case some arguments were empty. Exiting the script.
if(!empty($errors['error'])) {
    UserManager::throwErrors($errors);
};

try {
    UserManager::loginUser($_POST['username'],$_POST['password']);

    $success = array(
        'success' => 'login successfull'
    );
    echo json_encode($success);
    
} catch (UserManagerException $e) {
    $errors['error'][] = UserManager::generateError('username',
    UserManagerError::wrongCredentials);

    $errors['error'][] = UserManager::generateError('password',
    UserManagerError::wrongCredentials);

    UserManager::throwErrors($errors);
};


?>