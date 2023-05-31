import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interface/product';
import { FormBuilder } from "@angular/forms"
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  product: Iproduct = {
    name: "",
    price: 0,
    image: ""
  }
  productForm = this.formBuilder.group({
    name: [''],
    image: [''],
    price: 0,
  })
  constructor(private formBuilder: FormBuilder, private productService: ProductService, private router: Router, private ActiveRouter: ActivatedRoute ){
    this.ActiveRouter.paramMap.subscribe((par) => {
      const id = Number(par.get("id"))
      this.productService.getProduct(id).subscribe((data) => {
        this.product  = data
        this.productForm.patchValue({
          name: this.product.name,
          price: this.product.price,
          image: this.product.image

        })
      })

    })
  }
    update() {

    
    const product: Iproduct = {
      id: this.product.id,
      name: this.productForm.value.name || 'notfound',
      image: this.productForm.value.image || 'notfound',
      price: this.productForm.value.price || 0
    }
    this.productService.updateProduct(product).subscribe(() => {
      this.router.navigate(["admin/product"])
    })
  }
}
