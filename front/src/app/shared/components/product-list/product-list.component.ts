import { Component, Input, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { GeneralService } from '@services/general.service';
import { SelectItem } from 'primeng/api';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() items: Array<any>
  @Input() rows: number
  @Output() productsEvent: EventEmitter<any> =  new EventEmitter();

  responsiveOptions: Array<any>
  sortOptions: SelectItem[]
  sortOrder: number
  sortField: string
  role: string
  itemsTmp: any[]
  effect:string = 'scrollx'
  isMobile:boolean = false
  displayModal: boolean = false
  currentItem: any

  constructor(
    private general: GeneralService,
    private authService: AuthService
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1412px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '1200px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
    
  }
  
  
  ngOnInit(): void {
    this.initializeItems()    
    this.role = this.authService.getRole()
  }

  initializeItems(){
    if (this.items) {
      this.itemsTmp = [...this.items]
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(event.target.innerWidth<768){
      this.isMobile = true
    }else{
      this.isMobile = false
    }
  }
  
  onSortChange(event) {
    this.general.c('SORT BY', event)
  }

  edit(item: any){
    this.productsEvent.emit({
      function: 'edit',
      data: item
    })
  }

  search(event:any){
    const srt = event.target.value
    this.general.c('srt', srt)
    if(srt === ''){
      this.items = [...this.itemsTmp]
    }else{
      this.items = [...this.itemsTmp.filter((item:any)=>
          item.name.indexOf(srt) > -1 ||
          item.description.indexOf(srt) > -1
        )]
    }
  }

  getPrice(price: any){
    if(typeof price === 'number'){
      return `S/${price}`
    }else{
      return price
    }
  }

  openModal(item: any){
    this.currentItem = item
    this.displayModal = true
  }
  


}
