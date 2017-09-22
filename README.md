# angular-crud

product-app : is the Restful web service created by Spring Boot

ProductApp : Angularjs (1.x) version code of CRUD on the product.

This needs a table to be created in mysql/test schema as shown

CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(45) DEFAULT NULL,
  `purdate` datetime DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
