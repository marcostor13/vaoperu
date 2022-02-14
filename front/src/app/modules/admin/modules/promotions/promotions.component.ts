import { Component, OnInit, ViewChild } from '@angular/core';
import { GeneralService } from '@services/general.service';
import { MessageService } from 'primeng/api';
import { IResponseApi } from 'src/app/models/responses';
import { PromotionService } from './services/promotion.service';
import { CPromotion } from './interfaces/promotion.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {

  
  items: CPromotion[] 

  constructor(
    private promotionService: PromotionService,
    private messageService: MessageService,
    private generalService: GeneralService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.get()
  }

  get() {   
    this.promotionService.get().subscribe((response: IResponseApi) => {
      this.generalService.c('Get', response)
      this.items = response.data
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    })   
  }  

  updateAll(){
    
  }

  addEdit(item = null){
    if (item){
      this.router.navigate([`/admin/promotions/add-edit/${item._id}`])
    }else{
      this.router.navigate(['/admin/promotions/add-edit'])
    }
  }

  

  



}
