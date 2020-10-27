import { Component, OnInit } from '@angular/core';
import {LoginModelModel} from "../login-model.model";
import {AuthentecateService} from "../authentecate.service";
import {Router} from "@angular/router";
import {HeaderService} from "../../template/header/header.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data : LoginModelModel= {
    email: '',
    password: ''
  };
  token: string ='';
  constructor(private authentecate:AuthentecateService, private router: Router,private HeaderService:HeaderService) {
    HeaderService.headerData ={
      title: 'Inicio',
      icon : 'home',
      routeURL: '',
      token: this.token ? this.token : ''
    }
  }

  ngOnInit(): void {
  }

  Entra(){
    this.authentecate.Login(this.data).subscribe(auth => {
        //  this.router.navigate(['/product']);
        this.token= (auth.access_token);
        console.log(auth.access_token);
    })
  }



}
