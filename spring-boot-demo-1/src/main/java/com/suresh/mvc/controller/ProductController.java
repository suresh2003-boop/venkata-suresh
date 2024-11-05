package com.suresh.mvc.controller;


import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import javax.management.AttributeNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.suresh.mvc.entities.Product1;
import com.suresh.mvc.models.ProductModel;
import com.suresh.mvc.service.ProductService;

import jakarta.validation.Valid;


@Controller
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/productform")
    public String showForm(Model model) {
        model.addAttribute("productModel", new ProductModel());
      
        model.addAttribute("page", "productform");
    	return "index";
    }

    @PostMapping("/productform")
    public String submitForm(@Valid @ModelAttribute("productModel") ProductModel productModel, BindingResult result, Model model) {
        if (result.hasErrors()) {
        	  model.addAttribute("page", "productform");
          	return "index";  // Return to form if errors exist
        }
        // Process the form submission (e.g., save to database)
        productService.saveProductData(productModel);
        model.addAttribute("page", "productform");
      	return "index";  // Return to form if errors exist   // Redirect to success page if form is valid
    }
    
    
 

    @GetMapping("/getproduct")
    public String getProducts(Model model) {
        List<Product1> products = productService.getAllProducts();       
        model.addAttribute("products", products); // Use lowercase for consistency
        model.addAttribute("page", "getproduct");
    	return "index";
    }

    
    
  
    @GetMapping("/delete")
    public String deleteProductById(@RequestParam Long proId) {
        productService.deleteProductById(proId); // Call the service method to delete the product
        return "redirect:/getproduct"; // Redirect to the product list after deletion
    }
    
    
    
    @GetMapping("/editProduct")
    public String showEditForm(@RequestParam Long proId, Model model) {
        // Fetch the product by ID and add it to the model
        ProductModel productModel = productService.getProductById(proId);
        model.addAttribute("productModel", productModel);
        model.addAttribute("categories", Arrays.asList("Mobile", "Camera", "Printer", "Laptop", "Accessories"));

        model.addAttribute("proId", proId);
        
        return "edit-form";  
    }
    @PostMapping("/update")
   	public String updateData(Long proId,ProductModel proModel) {
   		
   		productService.updateproduct(proId,proModel);
   		return "redirect:/getproduct";
   		
   		
   	}
    

        @GetMapping("/about")
        public String aboutUs(Model model) {
        	 model.addAttribute("page", "about");
         	return "index";
                
        }
        @GetMapping("/contactus")
        public String contact(Model model) {
        	 model.addAttribute("page", "contactus");
          	return "index";
        	
        }
      
       

            // Assuming productService is already injected
            @GetMapping("/searchProductById")
            public String showSearchForm(Model model) {
                model.addAttribute("page", "searchProductById");
                return "index"; // Return to the search form
            }

            @PostMapping("/searchProductById")
            public String searchProductById(@RequestParam("proId") Long proId, Model model) {
                // Fetch product from the database using the provided proId
                Product1 product = productService.getAllProductsId(proId); // Assume this service exists

                if (product != null) {
                    model.addAttribute("product", product);
                } else {
                    model.addAttribute("errorMessage", "Product not found");
                }

                return "search-Product"; // Thymeleaf template name
            }
        


                   //Get the index form
        @GetMapping("/")
        public String browser() {
            return "index";
        }
        
    }



        
    

