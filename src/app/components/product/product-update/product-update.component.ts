import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductModel} from "../product.model";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

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
  updateProduct():void {
    this.ProductService.Update(this.product).subscribe(() => {
      this.ProductService.ShowMessage('Produto Atuallizado com sucesso');
      this.Router.navigate(['/product']);
    });
  }
  exitProduct():void {
    this.Router.navigate(['product']);
  }
}
