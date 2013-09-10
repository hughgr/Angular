var phoneListController = function($scope, $http, $timeout){
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
    };
    $scope.edit = function(){
        console.log(this)
        console.log($scope)
        this.show = !this.show;
    };
    $scope.sub = function(e,phone){
        var self = this;
        if(e.keyCode == 13){
            var url = 'opration.json?phoneid='+phone.id;
            $timeout(function(){
                    $http.get(url).success(function(data){
                            console.log(data.status)
                            if(data.status == 'success'){
                                self.show = !self.show;
                            }
                     }).
                    error(function(){
                            alert('error')
                     })
            },200)
        }
    }

}
phoneListController.$inject = ['$scope','$http','$timeout'];
