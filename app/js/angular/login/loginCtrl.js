mainApp.controller('loginController', function($scope, $http, $rootScope) {
  $scope.corporateClient=  JSON.parse(localStorage.getItem("Arraylogin"));
  if ($scope.corporateClient !== null ) {
    window.location = "/#!/list"
  };
  $scope.login = function(){
    if ($scope.name === "test" && $scope.password === "testtask") {
      let paramsEvent = {};
      paramsEvent.name = $scope.name;
      paramsEvent.password = $scope.password;
      localStorage.removeItem('Arraylogin',JSON.stringify(""));
      localStorage.setItem('Arraylogin',JSON.stringify(paramsEvent));
      document.cookie = "apiKey:=2fda745bb4cdd835fdf41ec1fab82a13ddc1a54c";
      window.location = "/#!/list"
    }else {
      alert("incorrect login or password")
    };
  };
});
