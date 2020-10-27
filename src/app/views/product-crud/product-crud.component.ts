import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HeaderService} from "../../components/template/header/header.service";

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private HeaderService:HeaderService,private router: Router) {
    HeaderService.headerData ={
      title: 'Cadastro',
      icon : 'storefront',
      routeURL: '/product'
    }
  }

  ngOnInit(): void {
  }

  navigateToCreat(): void {
     this.router.navigate(['/product/create'])
  }

}
