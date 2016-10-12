app.controller('showController', ['$scope','$location','userFactory', 'showFactory', '$routeParams', function($scope, $location, userFactory, showFactory, $routeParams){
    $scope.currentUser = {};

    userFactory.getCurrentUser(function(user){
        $scope.currentUser= user;
    });
    $scope.createLike = function(id){
        showFactory.like(id, getOneQuestion)
    }
    $scope.logout = function(user, isValid){
        userFactory.logout(function() {
        $scope.currentUser = {};
        $location.url('');
        });    
    }
    function getOneQuestion(){
        showFactory.index($routeParams.id,function(res){
            $scope.question = res.data
        })
    }
    getOneQuestion();

    $scope.createQuestion= function(question){
        questionFactory.create(question);
        $location.url('/dashboard');
    }

}])