import { Platform } from '@angular/cdk/platform';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GeneralService } from '@services/general.service';
import { delay } from 'rxjs/operators';
import { SubSink } from 'subsink';
import { App } from '@capacitor/app';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private subs = new SubSink()

  constructor(private store: Store<any>,
              private platform: Platform,
              private generalService: GeneralService,
              private _location: Location
              ){
      this.subscriptionLoading()
      this.setPlatform()
      this.setBackButton()

    }
    title = 'front'
    isLoading:boolean = false

  subscriptionLoading(){
      this.subs.add(
        this.store.select((state) => state.Reducer.isLoading)
        .pipe(delay(0))
        .subscribe((isLoading: boolean) => {
          this.isLoading = isLoading;
        })
      )
  }

  setPlatform(){
    if(this.platform.ANDROID){
      this.generalService.setPlatform('Android')
    }else{
      this.generalService.setPlatform('Web')
    }
  }

  setBackButton(){
    App.addListener('backButton', () =>{
      if (this._location.isCurrentPathEqualTo('/'))
      {
        navigator['app'].exitApp();
      }
      else
      {
        this._location.back();
      }
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

}
