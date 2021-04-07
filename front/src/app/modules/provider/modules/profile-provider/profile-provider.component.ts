import { Component, OnDestroy, OnInit } from '@angular/core';
import { GeneralService } from '@services/general.service';
import { IResponseApi } from 'src/app/models/responses';
import { SubSink } from 'subsink';
import { ProfileProviderService } from './services/profile-provider.service';

@Component({
  selector: 'app-profile-provider',
  templateUrl: './profile-provider.component.html',
  styleUrls: ['./profile-provider.component.scss']
})
export class ProfileProviderComponent implements OnInit, OnDestroy {

  subs = new SubSink()

  constructor(
    private profileProvideService: ProfileProviderService,
    private general: GeneralService
  ) { }

  ngOnInit(): void {
    this.getProfileProvider()
  }

  ngOnDestroy(){
    this.subs.unsubscribe()
  }

  getProfileProvider(){
    this.subs.add(
      this.profileProvideService.get().subscribe((response: IResponseApi)=>{
        this.general.c('GetProfileProvider', response)
      })
    )
  }

}
