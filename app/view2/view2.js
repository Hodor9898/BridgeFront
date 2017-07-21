'use strict';

angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        });
    }])

    .controller('View2Ctrl', ['$scope', '$http', function ($scope, $http) {
        $scope.conditions = [
            {
                name: 'greater',
                value: -1
            }, {
                name: 'smaller',
                value: -1
            }
        ];

        $scope.submit = submit;


        function init() {
            $scope.cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k', 'A'].map(function(val, index) {
                return {
                    key: (index + 2),
                    label: val
                }
            })
        }

        /**
         * send conditions to the server
         */
        function submit () {
            var url = 'http://localhost/bridge-rest/index.php';

            $http.post(url, {
                conditions: $scope.conditions
            }).then(function(response) {
                // display cards to the end user
                $scope.response = response;
            })
        }

        init();
    }]);