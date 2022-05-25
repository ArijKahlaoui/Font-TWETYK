import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products=[
    {
      productId:10,
      productName:'Women Maroon Top',
      productDescription:'',
      productPrice:899.99,
      productStock:100,
      ProductStatus:1
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

  

}
