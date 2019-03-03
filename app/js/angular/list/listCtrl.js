mainApp.controller('listController', function($scope, $http, $rootScope) {
  let cookies = document.cookie.split(/;/);
  for (let i = 0, len = cookies.length; i < len; i++) {
     let cookie = cookies[i].split(/=/);
     var cook = cookie[1];
  };
  if (JSON.parse(localStorage.getItem("Comment") != null)) {
      $scope.ArrayComment = JSON.parse(localStorage.getItem("Comment"));
  }else {
      $scope.ArrayComment = [];
  };
  $http({method: 'GET', url: 'https://redmine.ekreative.com/projects.json?key=' + cook}).
     then(function success(response) {
          $scope.lists = response.data;
          for (let i = 0; i < $scope.ArrayComment.length; i++) {
            $scope.lists.projects.find(x => x.id === $scope.ArrayComment[i].id).comment = $scope.ArrayComment[i].comment;
          }
          $scope.selectProject = $scope.lists.projects[0]
         });
  $scope.selectProjects = function(id){
    var list = $scope.lists.projects;
    var search = list.filter(function( obj ) {
    return obj.id == id;
    });
    $scope.comment = " ";
    $scope.selectProject = search[0];
  };
  $scope.addComment = function(id){
    $scope.lists.projects.find(x => x.id === id).comment = $scope.comment;
    let objTuarr = {};
    objTuarr.id = id;
    objTuarr.comment = $scope.comment;
    var i = $scope.ArrayComment.findIndex(o => o.id === objTuarr.id);
    if ($scope.ArrayComment[i]) { $scope.ArrayComment[i] = objTuarr } else { $scope.ArrayComment.push(objTuarr) };
    console.log($scope.ArrayComment);
    localStorage.setItem('Comment',JSON.stringify($scope.ArrayComment));
  };
  $scope.ssssts =function(comment){
    $scope.comment = comment;
  };
  $scope.logOut = function(){
    localStorage.removeItem('Arraylogin',JSON.stringify(""));
    window.location = "/"
  };
});
