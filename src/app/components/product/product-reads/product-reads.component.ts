import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../product.model";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-reads',
  templateUrl: './product-reads.component.html',
  styleUrls: ['./product-reads.component.css']
})
export class ProductReadsComponent implements OnInit {

  myDataArray: ProductModel[];

  displayedColumns=['id','name','price','action']

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
     this.productService.Read().subscribe(products => {
         this.myDataArray = products;
     });
  }

}
