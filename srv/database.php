<?php 
require('lbr/rb.php');

class Database {

    private static $isConnected = false;

    protected static function connect() {
        if(self::$isConnected) {
            return;
        }

        R::setup( 'mysql:host=localhost;dbname=quiz','root', '' );  
        self::$isConnected = true;
    }

}

?>