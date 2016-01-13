'use strict';
angular.module('t2C3AngularApp')
    .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
    $scope.contacts = [
        {
            firstName: 'Frank',
            surname: 'Muscles',
            email: 'frank@muscles.com'
        },
        {
            firstName: 'Eddy',
            surname: 'Valentino',
            email: 'eddy@valfam.co.uk'
        }
    ];
});
//# sourceMappingURL=main.js.map