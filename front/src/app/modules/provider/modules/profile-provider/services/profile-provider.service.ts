import { Injectable } from '@angular/core';
import { ApiService } from './../../../../../services/api.service';
import { IDataApi } from '../../../../../models/dataapi';
import { GeneralService } from '@services/general.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileProviderService {

  model = 'profile-provider'

  constructor(
    private api: ApiService,
    private general: GeneralService,
    private authService: AuthService
  ) { }

  save(element: any) {
    this.general.c('SAVE ELEMEENT', element.userid)
    const data: IDataApi = {
      service: element._id ? `update-${this.model}/${element._id}` : `save-${this.model}`,
      type: element._id ? 'patch' : 'post',
      data: element
    }
    return this.api.api(data)
  }

  get() {
    const data: IDataApi = {
      service: `get-${this.model}-by-userid/${this.authService.getUserID()}`,
      type: 'get',
      data: null
    }
    return this.api.api(data)
  }

  getById(id: string) {
    const data: IDataApi = {
      service: `get-${this.model}-by-id/${id}`,
      type: 'get',
      data: null
    }
    return this.api.api(data)
  }

  getAllCompanies() {
    const data: IDataApi = {
      service: `get-${this.model}`,
      type: 'get',
      data: null
    }
    return this.api.api(data)
  }

  delete(id: string) {
    const data: IDataApi = {
      service: `delete-${this.model}/${id}`,
      type: 'delete',
      data: null
    }
    return this.api.api(data)
  }

  getUrlByProfileProviderId(id:string){
    const data: IDataApi = {
      service: `get-url-by-profile-provider-id/${id}`,
      type: 'get',
      data: null
    }
    return this.api.api(data)
  }

  getUrlByUrl(url: string) {
    const data: IDataApi = {
      service: `get-url-by-url/${url}`,
      type: 'get',
      data: null
    }
    return this.api.api(data)
  }
}
