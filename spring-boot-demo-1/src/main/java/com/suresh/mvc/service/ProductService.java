package com.suresh.mvc.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import javax.management.AttributeNotFoundException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.suresh.mvc.entities.Product1;
import com.suresh.mvc.models.ProductModel;
import com.suresh.mvc.repository.ProductRepository;

@Service
public class ProductService {

    private static final Logger logger = LoggerFactory.getLogger(ProductService.class);

    @Autowired
    ProductRepository productRepository;

	private CrudRepository<Product1, Long> porductRepository;

    // Save product data with discount calculation
    public void saveProductData(ProductModel productModel) {
        double price = productModel.getProPrice();
        String category = productModel.getProCategory();
        double discount = 0.0;

        // Log the incoming data for debugging
        logger.info("Received product data: Name={}, Price={}, Category={}",
                    productModel.getProName(), price, category);

        // Determine the discount based on product category
        switch (category) {
            case "Mobile":
                discount = price * 0.1; // 10% discount
                break;
            case "Laptop":
                discount = price * 0.15; // 15% discount
                break;
            case "Tv":
                discount = price * 0.25; // 20% discount
                break;
            case "Camera":
                discount = price * 0.25; // 25% discount
                break;
            case "Soap":
                discount = price * 0.2; // 20% discount
                break;
            default:
                discount = 0.0; // No discount for other categories
                break;
        }

        // Log the calculated discount for debugging
        logger.info("Calculated discount for category '{}': {}", category, discount);

        // Create the Product1 entity and set the values
        Product1 productEntity = new Product1();
        productEntity.setProName(productModel.getProName());
        productEntity.setProPrice(price);
        productEntity.setProCategory(category);
        productEntity.setProDescription(productModel.getProDescription());
        productEntity.setProBrand(productModel.getProBrand());

        // Set the discounted price
        double discountedPrice = price - discount;
        productEntity.setDisPrice(discountedPrice); // Store the discounted price
        productEntity.setCreatedAt(LocalDate.now());
        productEntity.setCreatedBy(System.getProperty("user.name"));

                           // Save the product entity to the repository
        productRepository.save(productEntity);

                                 // Log the saved product details
        logger.info("Saved product: {}", productEntity);
    }

    // Delete product by ID
    public Product1 deleteProductById(Long proId) {
        productRepository.deleteById(proId); // Assuming you're using JpaRepository
		return null;
    }

    // Get all products
    public List<Product1> getAllProducts() {
        return productRepository.findAll(); // Assuming you’re using Spring Data JPA
    }

    // Get a product by ID
    public Product1 getAllProductsId(Long proId) {
        return productRepository.findById(proId).orElse(null); // Handle null or throw exception if necessary
    }

    // Get a product for editing by ID
    public ProductModel getProductById(Long proId) {
        Product1 product = productRepository.findById(proId).orElse(null); // Ensure null is handled if product doesn't exist
        if (product == null) {
            // Handle null case, throw exception or return a default model, as per requirement
            return null;
        }

        ProductModel productModel = new ProductModel();
        productModel.setProName(product.getProName());
        productModel.setProPrice(product.getProPrice());
        productModel.setProBrand(product.getProBrand());
        productModel.setProDescription(product.getProDescription());
        productModel.setProCategory(product.getProCategory());

        return productModel;
    }
public void updateproduct(Long proId,ProductModel proModel) {
		
		
		
		double price = proModel.getProPrice();
		String category = proModel.getProCategory();
		double dprice = 0.0; 
		
		 switch (category) {
         case "Mobile":
             dprice = price * 0.1; 
             break;
         case "Laptop":
        	 dprice = price * 0.15;
             break;
         case "Tv":
        	 dprice = price * 0.25;
             break;
         case "Camera":
        	 dprice = price * 0.25;
             break;
         case "Soap":
        	 dprice = price * 0.25;
             break;
             
         default :
        	 dprice = 0.00;

        	 
		 }
		 
		 
	 Product1 productEntity = new Product1();
	 
	 	
	 
		 productEntity.setProName(proModel.getProName());
		 productEntity.setProPrice(proModel.getProPrice()); 
		 productEntity.setProCategory(proModel.getProCategory()); // Example for category
		 productEntity.setProDescription(proModel.getProDescription()); // Example for description
		 productEntity.setProBrand(proModel.getProBrand());
		 productEntity.setProId(proId);
		 
		 productEntity.setDisPrice(dprice);
		
		 productEntity.setCreatedAt(LocalDate.now());
		 productEntity.setCreatedBy(System.getProperty("user.name"));
	
		 productRepository.save(productEntity);	 

}
		
public void deleteProductById1(Long proId) 
{
        productRepository.deleteById(proId);
    }
	

}
