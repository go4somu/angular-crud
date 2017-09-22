app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "pages/main.html"
    })
    .when("/product/add", {
        templateUrl : "pages/product-add.html"
    })
    .when("/product/edit/:pid", {
        templateUrl : "pages/product-edit.html"
    })
});