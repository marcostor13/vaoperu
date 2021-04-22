import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { GeneralService } from '@services/general.service';
import { SelectItem } from 'primeng/api';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { CProduct } from 'src/app/modules/provider/modules/product/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: any
  @Output() productsEvent: EventEmitter<any> =  new EventEmitter();

  responsiveOptions: Array<any>
  sortOptions: SelectItem[]
  sortOrder: number
  sortField: string
  role: string

  constructor(
    private general: GeneralService,
    private authService: AuthService
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
   }

  onSortChange(event) {
    this.general.c('SORT BY', event)
  }
  
  ngOnInit(): void {
    this.role = this.authService.getRole()
    this.general.c('ROLE', this.role)
  }

  edit(product: CProduct){
    this.productsEvent.emit({
      function: 'edit',
      data: product
    })
  }

  getPrice(price: any){
    if(typeof price === 'number'){
      return `S/${price}`
    }else{
      return price
    }
  }


}
