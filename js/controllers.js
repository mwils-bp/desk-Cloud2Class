var myApp = angular.module('myApp', []);
myApp.controller('PhoneListCtrl', function ($scope) {
$.get( "includes/filesObj.php", function( data ) {
 console.log(data);
});
  $scope.phones = [
    {'name': 'files',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'worksheets',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'navigation',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
  $scope.contents = [
    {'name': 'Welcome to the files section',
     'snippet': 'not a lot here at the moment',
     'tab': 'files'},
    {'name': 'Here are your lesson worksheets',
     'snippet': 'The Next, Next Generation of learning',
     'tab': 'worksheets'},
    {'name': 'Lesson Navigation',
     'snippet': 'The Next, Next Generation of navigation links.',
     'tab': 'navigation'}
  ];
});
