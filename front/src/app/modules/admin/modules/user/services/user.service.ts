import { Injectable } from '@angular/core';
import { ApiService } from '../../../../../services/api.service';
import { IDataApi } from '../../../../../models/dataapi';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  model = 'user'

  constructor(
    private api: ApiService,
  ) { }


  save(element: any) {
    const data: IDataApi = {
      service: element._id ? `update-${this.model}/${element._id}` : `save-${this.model}`,
      type: element._id ? 'patch' : 'post',
      data: element
    }
    return this.api.api(data)
  }

  get() {
    const data: IDataApi = {
      service: `get-${this.model}`,
      type: 'get',
      data: null
    }
    return this.api.api(data)
  }

  getById(id:string) {
    const data: IDataApi = {
      service: `get-${this.model}-by-id/${id}`,
      type: 'get',
      data: null
    }
    return this.api.api(data)
  }

  getByIds(ids: string[]) {
    const data: IDataApi = {
      service: `get-${this.model}-by-ids`,
      type: 'post',
      data: {ids}
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

  changePassword(email: string, password: string) {
    const data: IDataApi = {
      service: `change-password-${this.model}`,
      type: 'patch',
      data: {email, password}
    }
    return this.api.api(data)
  }







}
