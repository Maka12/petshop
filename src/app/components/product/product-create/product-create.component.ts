import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Router} from "@angular/router";
import {ProductModel} from "../product.model";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product : ProductModel ={
      name: '',
      price: null
  }

  constructor(private productService : ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.Create(this.product).subscribe(()=>{
      this.productService.ShowMessage('Produto Criado com sucesso');
      this.router.navigate(['/product']);
    })
  }

  exitProduct() : void {
     this.router.navigate(['/product']);
  }

}
