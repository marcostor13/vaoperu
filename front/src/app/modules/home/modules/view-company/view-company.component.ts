import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { GeneralService } from '@services/general.service';
import { IResponseApi } from 'src/app/models/responses';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { COffer } from 'src/app/modules/provider/modules/offer/models/offer';
import { OfferService } from 'src/app/modules/provider/modules/offer/services/offer.service';
import { CProduct } from 'src/app/modules/provider/modules/product/models/product';
import { ProductService } from 'src/app/modules/provider/modules/product/services/product.service';
import { CProfileProvider } from 'src/app/modules/provider/modules/profile-provider/models/profile-provider';
import { ProfileProviderService } from 'src/app/modules/provider/modules/profile-provider/services/profile-provider.service';
import { ITabList } from './interfaces/view-company.interface';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.scss']
})
export class ViewCompanyComponent implements OnInit {

  companyUrl: string
  profileProvider: CProfileProvider
  eventHeader: any
  faWhatsapp = faWhatsapp
  faPhone = faPhone
  products: CProduct[]
  offers: COffer[]
  tabs: ITabList[] = []

  constructor(
    private route: ActivatedRoute,
    private generalService: GeneralService,
    private profileProviderService: ProfileProviderService,
    private authService: AuthService,
    private productService: ProductService,
    private offersService: OfferService
  ) { 
    this.companyUrl = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.generalService.c('CompanyURL', this.companyUrl)
    this.getUrlData()
  }

  getUrlData(){
    this.profileProviderService.getUrlByUrl(this.companyUrl).subscribe((response:IResponseApi)=>{
      this.getProfileProvider(response?.data[0].profileProviderId)
    })  
  }

  getProfileProvider(profileProviderId:string){
    this.profileProviderService.getById(profileProviderId).subscribe((response: IResponseApi) => {
      this.generalService.c('getProfileProvider', response.data)
      this.profileProvider = response.data
      this.getProducts()
    })
  }

  getProducts(){
    this.productService.getByProfileProviderId(this.profileProvider._id).subscribe((response: IResponseApi) => {
      this.generalService.c('getProducts', response.data)
      this.products = response.data
      this.getOffers()
    })
  }

  getOffers() {
    this.offersService.getByProfileProviderId(this.profileProvider._id).subscribe((response: IResponseApi) => {
      this.generalService.c('offers', response.data)
      this.offers = response.data
      this.formatTabs()
    })
  }

  formatTabs(){
    let prods = [...this.products.filter(product => product.isFeatured)]
    if (prods.length > 0){
      this.tabs = [...this.tabs, {
        title: 'Destacados',
        data: prods
      }]
    }

    if (this.offers.length > 0) {
      this.tabs = [...this.tabs, {
        title: 'Ofertas',
        data: this.offers
      }]     
    }
   
  }

  addfavorites() {
    if (this.authService.getRole()) {
      //add Favorites
    } else {
      this.eventHeader = {
        event: 'open-login'
      }

    }
  }
  

}
