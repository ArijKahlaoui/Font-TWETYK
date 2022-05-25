import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordre',
  templateUrl: './ordre.component.html',
  styleUrls: ['./ordre.component.css']
})
export class OrdreComponent implements OnInit {

  orders=[
    {
      orderId:10,
      buyerName: 'NourElislem Cherni',
      buyerEmail:'Nour@gmail.com',
      buyerPhone: '21******',
      product:'Sun Glass',
      orderAmount:'10',

    },
    {
      orderId:11,
      buyerName: 'Arij Kahlaoui',
      buyerEmail:'Arij@gmail.com',
      buyerPhone: '94******',
      product:'shoes',
      orderAmount:'5',

    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
