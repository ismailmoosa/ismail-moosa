var myAPP = angular.module('myAPP', [ 'ngRoute' ]);

myAPP.config(['$routeProvider',
    function (
        $routeProvider
    ) {
          $routeProvider.
              when('/home', {
                  templateUrl: 'partials/home.html',
                  controller: 'HomeController'
              }).
              when('/about', {
                  templateUrl: 'partials/about.html',
                  controller: 'AboutController'
              }).
              when('/contact', {
                  templateUrl: 'partials/contact.html',
                  controller: 'ContactController'
              }).
              otherwise({
                  redirectTo: '/home'
              });
}]);

    myAPP.controller('todoCtrl', function($scope)
    {
    $scope.todoList = [
    {Name:'Assignment!',Descr:'10th October 2017', done:false}];


    $scope.todoAdd = function() {
        $scope.todoList.push({Name:$scope.Name,Descr:$scope.Descr, done:false});
        $scope.Name = "";
        $scope.Descr = "";
    };

    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(y) {
            if (!y.done) $scope.todoList.push(y);
        });
    };
});