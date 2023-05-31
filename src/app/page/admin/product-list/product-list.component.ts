import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productData: any
  constructor(private productService: ProductService){}
  ngOnInit() {
    this.productService.getAllProduct().subscribe((data) => {
      this.productData = data
    })
  } 
  
  Delete(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.productData = this.productData.filter((item: any) => item.id !== id)
    })
  }
}
