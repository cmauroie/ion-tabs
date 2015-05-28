angular.module('servicesCtrol',[])

.controller('appHttp',function($scope, $http){
 //hacemos uso de $http para obtener los datos del json
    $http({
    	url: "http://api.openweathermap.org/data/2.5/find?q=London&units=metric",
    	method: "GET"
    }).
  success(function(data, status, headers, config) {
    	console.log('recibido..... ' + status);
    	Window.alert('recibido.....'+ status);
    // this callback will be called asynchronously
    // when the response is available
  }).
  error(function(data, status, headers, config) {
  	Window.alert('error'+ status);
	// called asynchronously if an error occurs
    // or server returns response with an error status.
       console.log('ERRORRRRR--Mauricio');
  });
});