app.controller('listCtrl',function($scope,$window,$location,productService) {
    var productsRet = productService.getProducts();
    productsRet.then(function(response) {
        //console.log(response.data);
        $scope.productList = response.data;
    });
    $scope.edit = function(pid) {
        $location.path('/product/edit/'+pid);
    };
    $scope.delete = function(pid) {
        var deleteResult = productService.deleteProduct(pid);
        deleteResult.then(function(response) {
            console.log(response.data);
            $location.path('/');
            $window.location.reload();
        });
    };
});

app.controller('addCtrl',function($scope,$location,productService) {
    $scope.submit = function(f) {
        var prod = {
            "description": $scope.description,
            "purdate": $scope.purdate,
            "quantity": $scope.quantity
        }
        console.log(prod);
        var addResult = productService.addProduct(prod);
        addResult.then(function(response) {
            console.log(response.data);
            $location.path('/');
        });
      };
});

app.controller('editAddCtrl',function($scope,$location,productService,$routeParams) {
    console.log($routeParams.pid);
    var getResult = productService.getProduct($routeParams.pid);
    getResult.then(function(response) {
        console.log(response.data);
        $scope.id = response.data.id;
        $scope.description = response.data.description;
        $scope.purdate = response.data.purdate;
        $scope.quantity = response.data.quantity;
    });
    $scope.update = function(f){
        var prod = {
            "id":$scope.id,
            "description": $scope.description,
            "purdate": $scope.purdate,
            "quantity": $scope.quantity
        }
        console.log(prod);
        var addResult = productService.addProduct(prod);
        addResult.then(function(response) {
            console.log(response.data);
            $location.path('/');
        });
    };
});