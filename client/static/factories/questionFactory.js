app.factory('questionFactory', ['$http', function($http) {
  return {
    create: function(question, callback) {
      $http({
        url: '/new_question',
        method: 'post',
        data: question
      }).then(callback);
    }
  }
}]);