import { NgModule } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { AccordionModule } from 'primeng/accordion';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProductService } from './productservice';

import { OrderListModule } from 'primeng/orderlist';
import { TableModule } from 'primeng/table';
import { ChipModule } from 'primeng/chip';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OrderListModule,
    DialogModule,
    TableModule,
    AccordionModule,
    HttpClientModule,
    ChipModule,
    FormsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule {}
