package com.suresh.mvc.models;

import jakarta.persistence.GenerationType;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class ProductModel {
	
	
	

	
	
    @NotBlank(message = "Product name is required")
    @Size(min = 3, max = 50, message = "Product name must be between 3 and 50 characters")
    private String proName;

    @NotBlank(message = "Brand name is required")
    @Size(min = 2, max = 30, message = "Brand name must be between 2 and 30 characters")
    private String proBrand;

    @NotNull(message = "Price is required")
    @Min(value = 1, message = "Price must be greater than 0")
    private Double proPrice;

    @NotBlank(message = "Product description is required")
    @Size(min = 10, message = "Description must be at least 10 characters long")
    private String proDescription;

    @NotBlank(message = "Please select a category")
    private String proCategory;

    // Getters and setters
}

