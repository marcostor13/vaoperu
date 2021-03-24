import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() products: Array<any>;
  @Input() title: string;
  @Input() link: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
