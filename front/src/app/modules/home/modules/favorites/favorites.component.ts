import { Component, OnInit } from '@angular/core';
import { GeneralService } from '@services/general.service';
import { MessageService } from 'primeng/api';
import { IResponseApi } from 'src/app/models/responses';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { CProfileProvider } from 'src/app/modules/provider/modules/profile-provider/models/profile-provider';
import { ProfileProviderService } from 'src/app/modules/provider/modules/profile-provider/services/profile-provider.service';
import { FavoriteService } from './../../../../shared/services/favorite/favorite.service';
import { IFavoriteData } from './interfaces/favorite.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  eventHeader:any
  currentProfileProviders: CProfileProvider[]
  profileProviders: CProfileProvider[]

  constructor(
    private general:GeneralService,
    private profileProviderService: ProfileProviderService,
    private favoriteService: FavoriteService,
    private authService: AuthService,
    private messageService:MessageService
  ) { }

  ngOnInit() {
    this.getProfilesProvider()
  }

  getFavorites(){
    if (this.authService.getUserID()){
      this.favoriteService.getByClientId(this.authService.getUserID()).subscribe((response: IResponseApi) => {
        const favorites: IFavoriteData[] = response.data
        const favoritesArray: string[] = favorites.map(favorite => { return favorite.profileProviderId })
        this.currentProfileProviders = this.profileProviders.filter(profile => favoritesArray.includes(profile._id))
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      })
    }else{
      this.messageService.add({ severity: 'warning', summary: 'Mensaje', detail: 'No se encontraron favoritos' });
    }
  }

  getProfilesProvider(){
    this.profileProviderService.getAllCompanies().subscribe((response: IResponseApi) => {
      this.profileProviders = response.data
      this.getFavorites()
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    })
  }

  companyListEvent($event: any) {
    switch ($event.event) {
      case 'open-login':
        this.eventHeader = $event
        break;

      default:
        break;
    }
  }

}
