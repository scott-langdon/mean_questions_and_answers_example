app.controller('questionController', ['$scope','$location','userFactory', 'questionFactory', function($scope, $location, userFactory, questionFactory){
    $scope.currentUser = {};
    $scope.qErr = "";

    userFactory.getCurrentUser(function(user){
        $scope.currentUser= user;
    });
    
    $scope.logout = function(user, isValid){
        userFactory.logout(function() {
        $scope.currentUser = {};
        $location.url('');
        });    
    }
    $scope.createQuestion= function(question, isValid){
        if(isValid){
            questionFactory.create(question);
            $location.url('/dashboard');
        } else {
            $scope.qErr = "Too short";
        }

    }

}])