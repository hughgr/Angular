var app = angular.module('app',['infinite-scroll']);

app.controller('phoneListController',function phoneListControl($scope, $http, $timeout){
    var tmpList = {};
    $scope.phones = [];
    var currentPage = 1;
    /*$http({method:'GET',url:'phones/phones.json'}).success(function(data){
        tmpList = data;
        $scope.phones = data;
    });*/
    
    var loadData = function(isFirst){
        isFirst ? isFirst=isFirst : isFirst=false;
        if(isFirst){
        var urlAddr = 'phones/phones.json?ts='+new Date().getTime();
        $http({method:'GET',url:'phones/phones.json'}).success(function(data){
                tmpList = data;
                $scope.phones = data;
            });
        }else{
        var urlAddr = 'phones/phones.json?ts='+new Date().getTime();
        $http({method:'GET',url:urlAddr}).success(function(data){
                for(var i  = 0; i<data.length; i++){
                    $scope.phones.push(data[i])
                }
            });
            
        }
    };
    $scope.orderProp = 'age';
    $scope.hello = 'hello world';
    /*$timeout(function(){
            $scope.phones.unshift({
        "age": -1, 
        "id": "fuck", 
        "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg", 
        "name": "fuckfuck", 
        "snippet": "fuckfuck"
            })
    },2000)
*/
    /*$timeout(function(){
        $scope.phones.push({
        "age": -2, 
        "id": "motorola-xoom-with-wi-fi", 
        "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg", 
        "name": "fuckfuckfuckfuck",
        "snippet": "vvfuckvfuckvfuckvfuckvfuckvfuckvfuckvfuckfuck"
        }) 
     },2000);*/
    $scope.loadMore = function(){
        loadData.call(this);
    }

    $scope.removePhone = function(phone,index){
        console.log(JSON.stringify(phone));
        alert('index: '+index)
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

});
//phoneListController.$inject = ['$scope','$http','$timeout'];
