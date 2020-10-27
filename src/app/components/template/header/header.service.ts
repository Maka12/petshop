import { Injectable } from '@angular/core';
import {HeaderDataModel} from "./header-data.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

 private _headerData = new BehaviorSubject<HeaderDataModel>({
    title: 'Inicio',
    icon: 'home',
    routeURL: '',
    token: 'ergeg'
 })
  constructor() { }

  get headerData(): HeaderDataModel {
    return this._headerData.value;
  }

  set headerData(HeaderDataModel: HeaderDataModel) {
    this._headerData.next(HeaderDataModel)
  }
}
