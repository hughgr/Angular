var phoneListController = function($scope, $http, $timeout){
    $http({method:'GET',url:'phones/phones.json'}).success(function(data){
        $scope.phones = data;
    });
    $scope.orderProp = 'age';
    $scope.hello = 'hello world';

    $timeout(function(){
        $scope.phones.push({
        "age": -1, 
        "id": "motorola-xoom-with-wi-fi", 
        "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg", 
        "name": "fuckfuckfuckfuck",
        "snippet": "vvfuckvfuckvfuckvfuckvfuckvfuckvfuckvfuckfuck"
        }) 
     },2000);

    $scope.removePhone = function(phone){
        console.log(JSON.stringify(phone));
        $scope.phones.splice($scope.phones.indexOf(phone),1);
    }
    
    $scope.edit = function(){
        console.log(this)
        console.log($scope)
        this.show = !this.show;
    }
    $scope.sub = function(){
        alert(1)
        if(e.keycode == 13){
           this.show = !this.show;
        }
    }
    $scope.gogogo = function(){
        alert(111)
    }

}
//phoneListController.$inject = ['$scope','$http'];
