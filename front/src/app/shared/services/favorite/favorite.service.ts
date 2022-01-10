import { Injectable } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { IDataApi } from '../../../models/dataapi';

@Injectable({
  providedIn: 'root'
})

export class FavoriteService {

  model = 'favorite'

  constructor(
    private api: ApiService,
  ) { }


  save(element: any) {
    const data: IDataApi = {
      service: `save-${this.model}`,
      type: 'post',
      data: element
    }
    return this.api.api(data)
  }

  getByClientId(clientId: string) {
    const data: IDataApi = {
      service: `get-${this.model}-by-client-id/${clientId}`,
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


}
