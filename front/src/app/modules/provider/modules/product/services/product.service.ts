import { Injectable } from '@angular/core';
import { IDataApi } from 'src/app/models/dataapi';
import { ApiService } from 'src/app/services/api.service';
import { ICategoryProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  model = 'product'
  model2 = 'category-product'

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

  getByIds(ids:string[]) {
    const data: IDataApi = {
      service: `get-${this.model}-by-ids`,
      type: 'post',
      data: { ids}
    }
    return this.api.api(data)
  }

  getByProfileProviderId(profileProviderId: string) {
    const data: IDataApi = {
      service: `get-${this.model}-by-profile-provider-id/${profileProviderId}`,
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

  getCategoryByProfileProviderId(profileProviderId: string) {
    const data: IDataApi = {
      service: `get-${this.model2}-by-profile-provider-id/${profileProviderId}`,
      type: 'get',
      data: null
    }
    return this.api.api(data)
  }

  saveCategory(element: ICategoryProduct) {
    const data: IDataApi = {
      service: element._id ? `update-${this.model2}/${element._id}` : `save-${this.model2}`,
      type: element._id ? 'patch' : 'post',
      data: element
    }
    return this.api.api(data)
  }

  deleteCategory(id: string) {
    const data: IDataApi = {
      service: `delete-${this.model2}/${id}`,
      type: 'delete',
      data: null
    }
    return this.api.api(data)
  }

}
