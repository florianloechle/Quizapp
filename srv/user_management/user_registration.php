<?php 
require_once("user_manager.php");

$errors = array(
    'error' => array()
);
$registration = 'UserRegistration';
$post_Values = array();

/* <MARK:>POST VALIDATION</MARK:> */

/*************************************/
/*
Loops through each POST Value and filters its value. 
If Post values are missing we generate an Error and throw them after each value has been analized.
An invalid argument (not set or not required for registration) is considered as fatalError and ends script execution.
 */
/************************************ */

foreach($_POST as $key => $value) {
   
    $value = filter_input(INPUT_POST,UserManager::registrationKeys[$key]);

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


$username = UserManager::validateUsername($_POST['username']);
if(!$username) {
    UserManager::generateError('username',UserManagerError::invalidUsername);
};

/* <MARK:>PASSWORD</MARK:> */
$password = $_POST['password'];
$repeatPassword = $_POST['repeatPassword'];

if($password != $repeatPassword) {
    $errors['error'][] = UserManager::generateError('repeatPassword',
    UserManagerError::passwordsDoNotMatch);
};

/* <MARK:>EMAL</MARK:> */
$email = $_POST['email'];

if(!preg_match('/^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/',$email)) {
    $errors['error'][] = UserManager::generateError('email',
    UserManagerError::invalidEmail);
};

//Return errors in case some arguments are invalid. Exiting the script.
if(!empty($errors['error'])) {
    UserManager::throwErrors($errors);
};

try {
    UserManager::registerUser($username,$password,$email);

    $success = array(
        'success' => 'register successfull'
    );
    echo json_encode($success);

} catch (UserManagerException $e) {
    $errors['error'][] = UserManager::generateError($e->getType(),
    UserManagerError::alreadyExists);

    UserManager::throwErrors($errors);
};

?>