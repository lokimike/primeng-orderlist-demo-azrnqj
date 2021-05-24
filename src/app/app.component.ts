import { Component } from '@angular/core';
import { ProductService } from './productservice';
import { Product } from './product';
import { PrimeNGConfig } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: Product[];
  status: string[] = ['Order Received', 'Preparing', 'Ready To Serve'];
  display: boolean = false;
  selectedOrder = {};
  selecteditems = [];
  selectedTotal;

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

  showDialog(order) {
    this.display = true;
    this.selectedOrder = order;
    this.selecteditems = order.items;
    this.selectedTotal = order.totalPrice;
    console.log(this.selectedOrder, this.selecteditems);
  }

  changeStatus(product, event) {
    console.log(product);
    this.products.forEach(order => {
      if (order.id == product.id) {
        if (order.status == this.status[0]) {
          order.status = this.status[1];
          return order.status;
        }
        if (order.status == this.status[1]) {
          console.log(order.status);
          order.status = this.status[2];
        }
      }
    });
  }
}
