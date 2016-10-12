app.controller('answerController', ['$scope','$location','userFactory', 'answerFactory', '$routeParams', function($scope, $location, userFactory, answerFactory, $routeParams){
    $scope.currentUser = {};
    $scope.aErr = "";

    userFactory.getCurrentUser(function(user){
        $scope.currentUser= user;
    });
    
    $scope.logout = function(user, isValid){
        userFactory.logout(function() {
        $scope.currentUser = {};
        $location.url('');
        });    
    }
    function getOneQuestion(){
        answerFactory.index($routeParams.id,function(res){
            $scope.question = res.data
        })
    }
    getOneQuestion();
    $scope.createAnswer= function(answer, isValid){
        if(isValid){
            answerFactory.create($routeParams.id, answer);
            $location.url('/dashboard');
        } else {
            $scope.aErr = "Too Short";
        }
    }

}])