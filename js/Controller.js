
    angular.module('myApp', [])
    .controller('todoCtrl', function($scope)
{
    $scope.todoList = [
    {Name:'Assignment!',Descr:'Due on 10th October 2017', done:false}];


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