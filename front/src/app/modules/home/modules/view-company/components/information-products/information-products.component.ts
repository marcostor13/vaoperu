import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faStar } from '@fortawesome/free-solid-svg-icons';
import { GeneralService } from '@services/general.service';
import { IResponseApi } from 'src/app/models/responses';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { COffer } from 'src/app/modules/provider/modules/offer/models/offer';
import { OfferService } from 'src/app/modules/provider/modules/offer/services/offer.service';
import { CProduct } from 'src/app/modules/provider/modules/product/models/product';
import { ProductService } from 'src/app/modules/provider/modules/product/services/product.service';
import { CProfileProvider } from 'src/app/modules/provider/modules/profile-provider/models/profile-provider';
import { ProfileProviderService } from 'src/app/modules/provider/modules/profile-provider/services/profile-provider.service';
import { ITabList } from './../../interfaces/view-company.interface';
import { FavoriteService } from './../../../../../../shared/services/favorite/favorite.service';
import { IFavorite } from '@shared/interfaces/favorites.interface';
import { ConfirmationService, MessageService } from 'primeng/api';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { InformationComponent } from './../../components/information/information.component'

@Component({
  selector: 'app-information-products',
  templateUrl: './information-products.component.html',
  styleUrls: ['./information-products.component.scss']
})
export class InformationProductsComponent implements OnInit {
  eventHeader: any
  faArrowLeft = faArrowLeft
  profileProvider: CProfileProvider
  products: CProduct[]
  companyUrl: string

  constructor(
    private route: ActivatedRoute,
    private generalService: GeneralService,
    private profileProviderService: ProfileProviderService,
    private authService: AuthService,
    private productService: ProductService,
    private offersService: OfferService,
    private favoriteService: FavoriteService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
    ) {
      this.companyUrl = this.route.snapshot.paramMap.get('id')
     }

  ngOnInit(): void {
    this.getUrlData()
  }
  getUrlData(){
    this.profileProviderService.getUrlByUrl(this.companyUrl).subscribe((response:IResponseApi)=>{
      this.getProfileProvider(response?.data[0].profileProviderId)
    })
  }

  getProfileProvider(profileProviderId:string){
    this.profileProviderService.getById(profileProviderId).subscribe((response: IResponseApi) => {
      this.profileProvider = response.data
      this.getProducts()
    })
  }

  getProducts(){
    this.productService.getByProfileProviderId(this.profileProvider._id).subscribe((response: IResponseApi) => {
      this.products = response.data
    })
  }

  allproduct(){
    this.router.navigate([ this.profileProvider.comercialName.toLowerCase().replace(' ', '-')])
  }

}
