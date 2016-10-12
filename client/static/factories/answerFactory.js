app.factory('answerFactory', ['$http', function($http) {
  return {
    index: function(id, callback) {
      $http({
        url: '/getOneQuestion/'+id,
        method: 'get'
      }).then(callback);
    },
    create: function(id, answer, callback) {
      $http({
        url: '/answer/'+id,
        method: 'post',
        data: answer
      }).then(callback);
    }
  }
}]);