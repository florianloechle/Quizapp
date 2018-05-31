import {request} from '../index';

const path = {
    registration: '../srv/user_management/user_registration.php',
    login: '../srv/user_management/user_login.php',
    logout: '../srv/user_management/user_logout.php',
};

export default class User {

    static async checkLoginStatus() {
        return request(path.login,{check: true},'POST');
    };

    static async logout() {
        return request(path.logout,'POST');
    };
    
    static async login(values) {
        return request(path.login,values,'POST');
    };

    static async register(values) {
        return request(path.registration,values,'POST');
    };



}