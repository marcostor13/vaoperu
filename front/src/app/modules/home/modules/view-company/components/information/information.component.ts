import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CProfileProvider } from 'src/app/modules/provider/modules/profile-provider/models/profile-provider';
import { IKeyValue } from '../../interfaces/view-company.interface';

/// <reference types="@types/googlemaps" />

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit, AfterViewInit {

  @ViewChild('map') el: ElementRef;
  @Input() profileProvider: CProfileProvider
  profileProviderFormat: IKeyValue[] = []

  constructor() { }

  ngOnInit(): void {
    this.formatData()
  }

  ngAfterViewInit(): void {
    this.initMap()

  }

  formatData(){
    if (this.profileProvider.comercialName) this.profileProviderFormat = [...this.profileProviderFormat, { key: 'Nombre comercial', value: this.profileProvider.comercialName }]
    if (this.profileProvider.legalName) this.profileProviderFormat = [...this.profileProviderFormat, { key: 'Razón social', value: this.profileProvider.legalName }]
    if (this.profileProvider.ruc) this.profileProviderFormat = [...this.profileProviderFormat, { key: 'Ruc', value: this.profileProvider.ruc }]
    if (this.profileProvider.whatsapp) this.profileProviderFormat = [...this.profileProviderFormat, { key: 'Whatsapp', value: this.profileProvider.whatsapp }]
    if (this.profileProvider.phone) this.profileProviderFormat = [...this.profileProviderFormat, { key: 'Teléfono', value: this.profileProvider.phone }]
    if (this.profileProvider.addressText) this.profileProviderFormat = [...this.profileProviderFormat, { key: 'Direción', value: this.profileProvider.addressText }]
    if (this.profileProvider.facebook) this.profileProviderFormat = [...this.profileProviderFormat, { key: 'Facebook', value: this.profileProvider.facebook }]
    if (this.profileProvider.twitter) this.profileProviderFormat = [...this.profileProviderFormat, { key: 'Twitter', value: this.profileProvider.twitter }]
    if (this.profileProvider.instagram) this.profileProviderFormat = [...this.profileProviderFormat, { key: 'Instagram', value: this.profileProvider.instagram }]
    if (this.profileProvider.tiktok) this.profileProviderFormat = [...this.profileProviderFormat, { key: 'Tiktok', value: this.profileProvider.tiktok }]
    if (this.profileProvider.email) this.profileProviderFormat = [...this.profileProviderFormat, { key: 'Correo', value: this.profileProvider.email }]
    if (this.profileProvider.distrinctName) this.profileProviderFormat = [...this.profileProviderFormat, { key: 'Distrito', value: this.profileProvider.distrinctName }]
    if (this.profileProvider.siteWeb) this.profileProviderFormat = [...this.profileProviderFormat, { key: 'Sitio Web', value: this.profileProvider.siteWeb }]
  }

  format(key:string): string{
    return key.replace('-', '').replace('-', '').replace('-', '').replace('-', '')
  }

  initMap(): void {
    const ubication = { lat: this.profileProvider.lat, lng: this.profileProvider.lng }
    const map = new google.maps.Map(this.el.nativeElement as HTMLElement, {
      center: ubication,
      zoom: 14,
    });

    new google.maps.Marker({
      position: ubication,
      map,
      title: this.profileProvider.comercialName,
    });

  }



}
