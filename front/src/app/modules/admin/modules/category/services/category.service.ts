import { Injectable } from '@angular/core';
import { ApiService } from '../../../../../services/api.service';
import { IDataApi } from '../../../../../models/dataapi';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  model = 'category'

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

  updateAll(items: any) {
    const data: IDataApi = {
      service: `update-${this.model}-all` ,
      type: 'patch',
      data: items
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

  getByNameCategories(name: string) {
    const data: IDataApi = {
      service: `get-${this.model}-by-name-subcategories/${name}`,
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
