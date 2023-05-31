import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms"
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productForm = this.formBuilder.group({
    name: [''],
    image: [''],
    price: [],
  })
  constructor(private formBuilder: FormBuilder, private productService: ProductService, private router: Router ){}
    Add() {

    
    const product: Iproduct = {
      name: this.productForm.value.name || 'notfound',
      image: this.productForm.value.image || 'notfound',
      price: this.productForm.value.price || 0
    }
    this.productService.createProduct(product).subscribe(() => {
      this.router.navigate(["admin/product"])
    })
  }
}


