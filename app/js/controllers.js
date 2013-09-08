var phoneListController = function($scope, $http){
    $http({method:'GET',url:'phones/phones.json'}).success(function(data){
        $scope.phones = data;
    });
    $scope.orderProp = 'age';
    $scope.hello = 'hello world';

}
//phoneListController.$inject = ['$scope','$http'];
