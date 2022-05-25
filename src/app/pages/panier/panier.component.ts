import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  productInOrders=[
    {
      productName:'T-Shirt',
      productPrice:90,
      productQuantity:12,
      
    },
    {
      productName:'watch',
      productPrice:150,
      productQuantity:2,
      
    },
    {
      productName:'hand bag',
      productPrice:200,
      productQuantity:1,
      
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  

}
