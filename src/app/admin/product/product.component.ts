import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  title: any;
  book: any = {};
  public books: any = [];

  constructor(public dialog: MatDialog, public api: ApiService) {}

  ngOnInit(): void {
    this.title = 'Produk';
    // this.book = {
    //   title: 'Angular Pemula',
    //   author: 'Belmiro',
    //   publisher: 'Jubilee Enterprise',
    //   year: '2022',
    //   isbn: '098765',
    //   price: '50000',
    // };
    this.getBooks();

    //console.log(this.api.get);
  }

  loading: boolean = false;

  getBooks() {
    this.loading = true;
    this.api.getAllBook('books').subscribe(
      (res) => {
        this.books = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        alert('Ups! Something is wrong :(');
      }
    );
  }

  productDetail(data: any, idx: number) {
    let dialog = this.dialog.open(ProductDetailComponent, {
      width: '500px',
      data: data,
    });
    dialog.afterClosed().subscribe((res) => {
      if (res) {
        if (idx == -1) this.books.push(res);
        else this.books[idx] = data;
      }
    });
  }
  loadingDelete: any = {};
  deleteProduct(id: any, idx: any) {
    var conf = confirm('Delete item?');
    if (conf) {
      this.loadingDelete[idx] = true;
      this.api.deleteBook('books/' + id).subscribe(
        (res) => {
          this.books.splice(idx, 1);
          this.loadingDelete[idx] = false;
        },
        (error) => {
          this.loadingDelete[idx] = false;
          alert('Delete data failed');
        }
      );
    }
  }
}
