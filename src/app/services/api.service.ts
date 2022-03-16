import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: any = 'https://api.sunhouse.co.id/bookstore/index.php/';
  constructor(public http: HttpClient) {}

  getAllBook(url: any) {
    return this.http.get(this.baseUrl + url);
  }

  postBook(url: any, data: any) {
    return this.http.post(this.baseUrl + url, data);
  }

  updateBook(url: any, data: any) {
    return this.http.put(this.baseUrl + url, data);
  }

  deleteBook(url: any) {
    return this.http.delete(this.baseUrl + url);
  }
}
