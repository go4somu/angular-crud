app.service('productService', function($http) {
    // Get All Products
    this.getProducts = function () {
        return $http.get("http://localhost:8080/product/all");
    };

    this.addProduct = function(prod){
        console.log("Product Received :"+prod);
        return $http.post("http://localhost:8080/product/add",prod);
    };

    this.getProduct = function(id){
        return $http.get("http://localhost:8080/product/get/"+id);
    };

    this.deleteProduct = function(id){
        return $http.get("http://localhost:8080/product/delete/"+id);
    };

});