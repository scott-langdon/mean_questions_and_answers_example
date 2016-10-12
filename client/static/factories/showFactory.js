app.factory('showFactory', ['$http', function($http) {
  return {
    index: function(id, callback) {
      $http({
        url: '/getOneQuestion/'+id,
        method: 'get'
      }).then(callback);
    },
    like: function(id, callback){
        $http({
            url: '/like/'+id,
            method: 'get'
        }).then(callback)
    }
  }
}]);