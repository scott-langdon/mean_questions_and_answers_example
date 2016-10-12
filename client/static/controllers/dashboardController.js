app.controller('dashboardController', ['$scope','$location','userFactory', 'dashboardFactory', function($scope, $location, userFactory, dashboardFactory){
    $scope.currentUser = {};

    userFactory.getCurrentUser(function(user){
        $scope.currentUser= user;
    });
    
    $scope.logout = function(user, isValid){
        userFactory.logout(function() {
        $scope.currentUser = {};
        $location.url('');
        });    
    }

    function updateQuestions() {
        dashboardFactory.index(function(res) {
            $scope.questions = res.data; 
        })
    }
    updateQuestions();

}])