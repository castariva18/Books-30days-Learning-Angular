import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  title: any;
  book: any = {};
  books: any = [];
  constructor(public dialog: MatDialog) {}

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
  }

  getBooks() {
    this.books = [
      {
        title: 'Angular Pemula',
        author: 'Belmiro',
        publisher: 'Jubilee Enterprise',
        year: '2022',
        isbn: '098765',
        price: '50000',
      },
      {
        title: 'Angular Menengah',
        author: 'Belmiro',
        publisher: 'Jubilee Enterprise',
        year: '2022',
        isbn: '108765',
        price: '70000',
      },
      {
        title: 'Angular Expert',
        author: 'Belmiro',
        publisher: 'Jubilee Enterprise',
        year: '2022',
        isbn: '118765',
        price: '100000',
      },
    ];
  }

  productDetail(data: any, idx: number) {
    let dialog = this.dialog.open(ProductDetailComponent, {
      width: '500px',
      data: data,
    });
    dialog.afterClosed().subscribe((res) => {
      if (res) {
        if (idx == -1) this.books.push(res);
        else this.books[idx] = res;
      }
    });
  }

  deleteProduct(idx: any) {
    var conf = confirm('Delete item?');
    if (conf) {
      this.books.splice(idx, 1);
    }
  }
}
