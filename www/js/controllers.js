angular.module('starter.controllers',[])

.controller('HomeTabCtrl', function($scope) {
	window.alert('HomeTabCtrl');
  console.log('HomeTabCtrl');
})

.controller('customersCtrl', function($scope,$http){
	$http.get("http://www.w3schools.com/angular/customers.php")
	.success(function(response) {
		console.log('[customersCtrl]-success: '+response.records);
		$scope.names = response.records;
	});
})

//http://stackoverflow.com/questions/20369377/how-to-use-http-get-in-angularjs-correctly-in-specific-for-an-external-api-cal
.service('dataService',function($http){
	this.getData = function(callbackFunc){
	$http({
		method: 'GET',
		url: 'http://api.openweathermap.org/data/2.5/find?q=London&units=metric'

	}).success(function(data){
		console.log('[dataService] - success'+data.list);
		//alert('[dataService] - success');
		callbackFunc(data);
	}).error(function(){
		alert("error");
	})
}
}).controller('AngularJSCtrl', function($scope, dataService){
	$scope.data= null;
	dataService.getData(function(dataResponse){
		console.log('[AngularJSCtrl]: '+dataResponse.list);
 		$scope.data = dataResponse.list;
	});
});


