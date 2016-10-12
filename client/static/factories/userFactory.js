app.factory('userFactory', ['$http', function($http){
    var currentUser = {};
    return{
        getCurrentUser: function(callback){
            $http({
                method:  "GET",
                url: "/currentUser"
            }).then(function(user){
                currentUser = user;
                callback(user.data);
            })
        },
        create:function(user, callback){
            $http({
                method:"POST",
                url:"/users",
                data:user
            }).then(function(user){
                currentUser = user;
                callback(user);
            })
        },
        login:function(user,callback){
            $http({
                method:"POST",
                url:"/login",
                data:user
            }).then(function(user){
                currentUser = user;
                callback(user);
            })
        },
        logout: function(callback){
          $http({
            method:"GET",
            url:'/logout'
          }).then(callback)
        }
    }
}])