var phoneListController = function($scope, $http,$timeout){
    $http({method:'GET',url:'phones/phones.json'}).success(function(data){
        $scope.phones = data;
    });
    $scope.orderProp = 'age';
    $scope.hello = 'hello world';
    $timeout(function(){
            $scope.phones.unshift({
            
        "age": -1, 
        "id": "fuck", 
        "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg", 
        "name": "fuckfuck", 
        "snippet": "fuckfuck"
            })
    },2000)

}
//phoneListController.$inject = ['$scope','$http'];
