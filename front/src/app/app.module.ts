import { BrowserModule, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthTokenHttpInterceptorProvider } from './interceptors/auth.interceptor';
import { HttpErrorHttpInterceptorProvider } from './interceptors/httperrorinterceptor.interceptor';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from 'src/environments/environment';

import { Reducer } from '@reducers/reducer';
import { storageMetaReducer } from 'src/app/store/reducers/metareducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { HammerConfig } from './hammer.config';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({ Reducer }, { metaReducers: [storageMetaReducer] }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    FontAwesomeModule,
    HttpClientModule,
    ProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    MessageModule,
    ToastModule,
    HammerModule
  ],
  providers: [
    AuthTokenHttpInterceptorProvider,
    HttpErrorHttpInterceptorProvider,
    MessageService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass:HammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
