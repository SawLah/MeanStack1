 

app.controller('hymnController', ['$scope', '$resource', 

    function($scope, $resource){
 
        var Hymn = $resource('/api/hymns');

        Hymn.query(function(results){
            $scope.hymns = results;
        });

        $scope.hymns = []; 
 
        $scope.CreateHymn = function(){
            var hymn = new Hymn();
            hymn.name = $scope.hymnName;
            hymn.$save(function (result){
                $scope.hymns.push(result);
                $scope.hymnName = '';
            });    
        };

        $scope.UpdateHymn = function(){
            var hymn = new Hymn();

            //TODO update of given hymn
        } 

}]); 
  
 
    

