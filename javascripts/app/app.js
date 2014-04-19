var g0vTV = angular.module('g0vTV',['ngRoute','ngSanitize','ngAnimate']);

g0vTV.config(['$routeProvider',function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/getStart.html',
    controller: 'StartCtrl'
  })
  .when('/youtube', {
    templateUrl: 'views/youtube.html',
    controller: 'TvCtrl'
  })
  .otherwise({
    redirectTo: '/'
  })
}])

g0vTV.controller('StartCtrl', ['$scope', '$location', function($scope, $location){
  $scope.goNext = function() {
    $location.path('/youtube');
  }
  $scope.goYoutube = function() {
    console.log('click...');
    window.location = 'http://www.youtube.com/tv';
    // $location.path('/youtube');
  }
}])

g0vTV.controller('TvCtrl', ['$scope', '$location', function($scope, $location){
  var swiperParent = new Swiper('.swiper-parent',{
    pagination: '.pagination-parent',
    paginationClickable: true,
    slidesPerView: 1
  })
  var swiperNested1 = new Swiper('.swiper-nested-1',{
    mode: 'vertical',
    pagination: '.pagination-nested-1',
    paginationClickable: true,
    slidesPerView: 1
  })
  var swiperNested2 = new Swiper('.swiper-nested-2',{
    mode: 'vertical',
    pagination: '.pagination-nested-2',
    paginationClickable: true,
    slidesPerView: 1
  })
}])

g0vTV.directive('bindKey', ['$location', function($location) {
  return function(scope, element, attrs) {
    $(document).keydown(function(e) {
      if(e.which == 13) {
        $location.path('/'+attrs.next);
        // console.log('$location');
        window.location = 'http://www.youtube.com/tv';
        scope.$apply();
      }
    })
  };
}]);