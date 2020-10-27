import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../product.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product : ProductModel ={
    name: '',
    price: null
  }
  constructor(private ProductService: ProductService, private Router: Router, private Route:  ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.Route.snapshot.paramMap.get('id');
    this.ProductService.ReadById(id).subscribe(product => {
      this.product = product;
    });
  }
  deleteProduct():void {
    const id = this.Route.snapshot.paramMap.get('id');
    this.ProductService.Delete(id).subscribe(() => {
      this.ProductService.ShowMessage('Produto Apagado com sucesso');
      this.Router.navigate(['/product']);
    });
  }
  exitProduct():void {
    this.Router.navigate(['product']);
  }

}
