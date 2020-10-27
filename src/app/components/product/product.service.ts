import {Injectable} from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import {HttpClient} from "@angular/common/http";
import {ProductModel} from "./product.model";
import {EMPTY, Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://127.0.0.1:8000/api/products';
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _snackBar: MatSnackBar, private http: HttpClient) {
  }

  ShowMessage(msg: string, isError: boolean = false): void {
    this._snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  Create(product: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(this.baseUrl, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  Read(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  ReadById(id: string): Observable<ProductModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<ProductModel>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  Update(product: ProductModel): Observable<ProductModel> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<ProductModel>(url, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  Delete(id: string): Observable<ProductModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<ProductModel>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }
  errorHandler(e: any): Observable<any> {
    this.ShowMessage('Ocorreu um erro!', true)
    return EMPTY
  }
}
