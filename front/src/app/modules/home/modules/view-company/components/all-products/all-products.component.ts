import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CProfileProvider } from 'src/app/modules/provider/modules/profile-provider/models/profile-provider';
import { ProfileProviderService } from 'src/app/modules/provider/modules/profile-provider/services/profile-provider.service';
import { CProduct } from 'src/app/modules/provider/modules/product/models/product';
import { ProductService } from 'src/app/modules/provider/modules/product/services/product.service';
import { IResponseApi } from 'src/app/models/responses';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  eventHeader: any
  faArrowLeft = faArrowLeft
  profileProvider: CProfileProvider
  products: CProduct[]
  companyUrl: string

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private profileProviderService: ProfileProviderService,
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
