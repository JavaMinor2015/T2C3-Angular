'use strict';
/**
 * Order object interface to be implemented and sent to server.
 */
var t2C3AngularApp;
(function (t2C3AngularApp) {
    var UserInfo = (function () {
        function UserInfo() {
        }
        UserInfo.prototype.getNewInstance = function () {
            return new UserInfo();
        };
        UserInfo.prototype.setFirstName = function (firstName) {
            this.firstName = firstName;
            console.log('FIRST NAME SET');
        };
        UserInfo.prototype.getFirstName = function () {
            return this.firstName;
        };
        UserInfo.prototype.setLastName = function (lastName) {
            this.lastName = lastName;
        };
        UserInfo.prototype.getLastName = function () {
            return this.lastName;
        };
        UserInfo.prototype.setEmailAddress = function (emailAddress) {
            this.emailAddress = emailAddress;
        };
        UserInfo.prototype.getEmailAddress = function () {
            return this.emailAddress;
        };
        return UserInfo;
    })();
    t2C3AngularApp.UserInfo = UserInfo;
})(t2C3AngularApp || (t2C3AngularApp = {}));
/**
 * Made this class as a service so it can be used inside an Angular v1 objects like a controller.
 * And be able to get a new object of this class by calling the getNewInstance() function.
 */
//angular.module('t2C3AngularApp')
//  .service('UserInfo', t2C3AngularApp.UserInfo);
//# sourceMappingURL=userInfo.js.map