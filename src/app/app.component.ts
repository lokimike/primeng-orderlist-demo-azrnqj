import { Component } from '@angular/core';
import { ProductService } from './productservice';
import { Product } from './product';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: Product[];
  status: string[] = ['Order Received', 'Preparing', 'Ready To Serve'];
  currentStatus: string = 'Order Received';
  constructor(
    private productService: ProductService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.productService
      .getProductsSmall()
      .then(order => (this.products = order));
    this.primengConfig.ripple = true;
  }

  changeStatus(product) {
    console.log(product);
    this.products.forEach(order => {
      if (order.id == product.id) {
        if (order.status == this.status[0]) {
          order.status = this.status[1];
        }
        if (order.status == this.status[1]) {
          order.status = this.status[2];
        }
        if (order.status == this.status[2]) {
          order.status = this.status[1];
        }
      }
    });
  }
}
